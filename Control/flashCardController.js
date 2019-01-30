mainApp.controller('FlashCardController', function($scope,$localstorage,$sce,$timeout,dataService,mainModel) 
    {
        //init
        $scope.currentFlashcard = 0;
        $scope.ieFrontCardStyle = "";
        $scope.ieBackCardStyle = {'visibility':'hidden'};

        // Methods
        $scope.getFlashCards = function(amount,chapters)
        {
            console.log("$scope.user.userSession : " + $scope.user.userSession);
            console.log("amount : " + amount);
            console.log("chapters : " + chapters);
            console.log("$scope.user.userRankID : " + $scope.user.userRankID);

            dataService.getFlashCardStack($scope.user.userSession,amount,chapters,$scope.user.userRankID)
            .then(function(response) 
            {
              if (response != undefined && typeof response == "object") 
              {
                $scope.flashCards = response.data;
                $scope.user.userFlashCardsMax = $scope.flashCards.length;
                $scope.setFlashCardData($scope.currentFlashcard);

                console.log("getFlashCardStack : " + JSON.stringify(response.data));
              } 
              else 
              {
                alert("Result is not JSON type");
              }
            });
        }

        $scope.getFlaggedFlashCards = function()
        {
            dataService.getUserFlaggedCards($scope.user.userSession,$scope.user.userID)
            .then(function(response) 
            {
              if (response != undefined && typeof response == "object") 
              {
                $scope.flashCards = response.data.userFlashCardFlagged;

                // Setting all cards as flagged
                $scope.flashCards.forEach(function(fCard)
                {
                    $scope.user.userFlashCardFlagged[fCard.ID] = 1;
                });

                // console.log("$scope.flashCards : " + JSON.stringify($scope.flashCards) );

                $scope.user.userFlashCardsMax = $scope.flashCards.length;
                $scope.setFlashCardData($scope.currentFlashcard);
              } 
              else 
              {
                alert("Result is not JSON type");
              }
            });
        }

        $scope.Tuser = $localstorage.getObject('user'); // bug workaround 'Tuser'
        $scope.flashCardChapters = $localstorage.getObject('flashCardChapters');

        // ********** Main flash card data call
        if ( $scope.Tuser.userLastView == 'flashcards')
        {
            $scope.getFlashCards($scope.user.flashCardSelectedAmount ,$scope.user.chaptersSelected);
        }
        else if ( $scope.Tuser.userLastView == 'savedFlashcards' )
        {
            // Get user's flagged cards
            $scope.getFlaggedFlashCards();
        }
        // **********

        $scope.setChaptersSelected = function()
        {
            $scope.chaptersSelected = [];
            $scope.flashCardChapters.forEach(function(chapter)
            {
                if ( chapter.checked == 'true' )
                {   
                    $scope.chaptersSelected.push(parseFloat(chapter.index)+1);
                }
            });

            $scope.user.chaptersSelected = $scope.chaptersSelected;
            $localstorage.setObject('user', $scope.user);
        }

        $scope.checkFlashCardChapter = function(indx)
        {
            if ( $scope.flashCardChapters[indx].checked == 'true' )
            {
                $scope.flashCardChapters[indx].checked = 'false';
            }
            else
            {
                $scope.flashCardChapters[indx].checked = 'true';
            }

            $scope.setChaptersSelected();
        }

        $scope.setAllFlashCardChapters = function(check)
        {
            $scope.flashCardChapters.forEach(function(chapter) {
                chapter.checked = check;
              });
            $scope.setChaptersSelected();
        }

        $scope.selectFlashCardAmount = function(amount)
        {
            $scope.flashCardSelectedAmount = amount;
            $scope.user.flashCardSelectedAmount = amount;
            $localstorage.setObject('user', $scope.user);
        }

        $scope.flagFlashCard = function()
        {
            if ( $scope.user.userFlashCardFlagged[$scope.flashCards[$scope.currentFlashcard].ID] == 1 )
            {
                $scope.user.userFlashCardFlagged[$scope.flashCards[$scope.currentFlashcard].ID] = 0;
                $scope.setFlashCardMark($scope.flashCards[$scope.currentFlashcard].ID,false);
            }
            else
            {
                $scope.user.userFlashCardFlagged[$scope.flashCards[$scope.currentFlashcard].ID] = 1;
                $scope.setFlashCardMark($scope.flashCards[$scope.currentFlashcard].ID,true);
            }
            $scope.setFlashCardData($scope.currentFlashcard);
            $localstorage.setObject('user', $scope.user);
        }

        $scope.setFlashCardMark = function(flashcardID,save)
        {
            if ( save )
            {
                dataService.saveFlashCardMark($scope.user.userSession,flashcardID)
                .then(function(response) 
                {
                    if (response != undefined && typeof response == "object") 
                    {
                        console.log("setFlashCardMark : " + JSON.stringify(response.data));
                    } 
                    else 
                    {
                        alert("Result is not JSON type");
                    }
                });
            }
            else
            {
                dataService.deleteFlashCardMark($scope.user.userSession,flashcardID)
                .then(function(response) 
                {
                    if (response != undefined && typeof response == "object") 
                    {
                        console.log("deleteFlashCardMark : " + JSON.stringify(response.data));
                    } 
                    else 
                    {
                        alert("Result is not JSON type");
                    }
                });
            }
        }

        $scope.setFlashCardData = function(page)
        {
            //Question&Answer
            $scope.flashCardQuestionContent = $sce.trustAsHtml($scope.flashCards[page].question);
            $scope.flashCardAnswerContent = $sce.trustAsHtml($scope.flashCards[page].answer);

            // flagged
            if ( $scope.user.userFlashCardFlagged[$scope.flashCards[$scope.currentFlashcard].ID] == 1 )
            {
                $scope.flashCardFlagged = true;
            }
            else
            {
                $scope.flashCardFlagged = false;
            }

        }

        $scope.nextCard = function(num)
        {
            $scope.flashCardisFlipped = false;
            $scope.setCardFaceVisibility();
            $scope.currentFlashcard += num;
            $scope.setFlashCardData($scope.currentFlashcard);
        }
        
        $scope.flipCard = function()
        {
            if ( $scope.flashCardisFlipped == false )
            {
                $scope.flashCardisFlipped = true;
            }
            else 
            {
                $scope.flashCardisFlipped = false;
            }
            $timeout(function() { $scope.setCardFaceVisibility();}, 150);
        }

        $scope.setCardFaceVisibility = function()
        {
                // ie 11 modification
                if ( $scope.flashCardisFlipped )
                {
                    $scope.ieFrontCardStyle = {'visibility':'hidden'};
                    $scope.ieBackCardStyle = {'visibility':'visible'};
                }
                else
                {
                    $scope.ieFrontCardStyle = {'visibility':'visible'};
                    $scope.ieBackCardStyle = {'visibility':'hidden'};
                }
        }

        $scope.shuffleFlashCards = function()
        {
            $scope.flashCards = $scope.shuffleArray($scope.flashCards);
            $scope.setFlashCardData($scope.currentFlashcard);
        }

        $scope.shuffleArray = function(array)
        {
            var m = array.length, t, i;
          
            // While there remain elements to shuffle
            while (m) {
              // Pick a remaining element…
              i = Math.floor(Math.random() * m--);
          
              // And swap it with the current element.
              t = array[m];
              array[m] = array[i];
              array[i] = t;
            }
          
            return array;
          }
  });