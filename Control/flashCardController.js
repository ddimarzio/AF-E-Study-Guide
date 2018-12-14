mainApp.controller('FlashCardController', function($scope,$localstorage,$sce,dataService,mainModel) 
    {
        //init
        $scope.currentFlashcard = 0;

        
        // Methods
        $scope.getFlashCards = function(amount,chapters)
        {
            dataService.getFlashCardStack($scope.user.userSession,amount,chapters)
            .then(function(response) 
            {
              if (response != undefined && typeof response == "object") 
              {
                  console.log("Controller : "  + JSON.stringify(response.data) );
               
                $scope.flashCards = response.data;
                // $scope.flashCardQuestionContent = $sce.trustAsHtml(mainModel.getFlashCardQuestion(0));
                // $scope.flashCardAnswerContent = $sce.trustAsHtml(mainModel.getFlashCardAnswer(0));
                $scope.setFlashCardData($scope.currentFlashcard);
              } 
              else 
              {
                alert("Result is not JSON type");
              }
            });
        }

        $scope.getFlashCards(10,[1,2]); 

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
        }

        $scope.setAllFlashCardChapters = function(check)
        {
            $scope.flashCardChapters.forEach(function(chapter) {
                chapter.checked = check;
              });

            // forEach ( chapter in $scope.flashCardChapters)
            // {
            //     chapter.checked = check;
            // }
        }

        $scope.selectFlashCardAmount = function(amount)
        {
            $scope.flashCardSelectedAmount = amount;
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