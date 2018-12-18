mainApp.controller('FlashCardController', function($scope,$localstorage,$sce,dataService,mainModel) 
    {
        //init
        $scope.currentFlashcard = 0;

        // Methods
        $scope.getFlashCards = function(amount,chapters)
        {
            console.log("Get Flash Cards : " + $scope.user.userSession + " | " + amount + " | " + chapters);

            dataService.getFlashCardStack($scope.user.userSession,amount,chapters)
            .then(function(response) 
            {
              if (response != undefined && typeof response == "object") 
              {
                console.log("Flash Cards : " + JSON.stringify(response.data));

                $scope.flashCards = response.data;
                $scope.user.userFlashCardsMax = $scope.flashCards.length;
                $scope.setFlashCardData($scope.currentFlashcard);
              } 
              else 
              {
                alert("Result is not JSON type");
              }
            });
        }

        // ********** Main flash card data call
        if ( $scope.user.userLastView == 'flashcards')
        {
            $scope.getFlashCards($scope.user.flashCardSelectedAmount ,$scope.user.chaptersSelected);
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
            }
            else
            {
                $scope.user.userFlashCardFlagged[$scope.flashCards[$scope.currentFlashcard].ID] = 1;
            }
            $scope.setFlashCardData($scope.currentFlashcard);
            $localstorage.setObject('user', $scope.user);
        }


        $scope.setFlashCardData = function(page)
        {
            //Question&Answer
            $scope.flashCardQuestionContent = $sce.trustAsHtml($scope.flashCards[page].Question);
            $scope.flashCardAnswerContent = $sce.trustAsHtml($scope.flashCards[page].Answer);

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
        }
        
  });