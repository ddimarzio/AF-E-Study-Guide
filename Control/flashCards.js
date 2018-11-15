mainApp.controller('FlashCardController', function($scope,$localstorage,$sce,dataService,mainModel) 
    {
        //init
        $scope.currentFlashcard = 0;
        $scope.flashCardQuestionContent = $sce.trustAsHtml(mainModel.getFlashCardQuestion(0));
        $scope.flashCardAnswerContent = $sce.trustAsHtml(mainModel.getFlashCardAnswer(0));
        $scope.flashCards = mainModel.getFlashCards();         // test data, change to service later
        
        // Methods



        $scope.selectFlashCardAmount = function(amount)
        {
            $scope.flashCardSelectedAmount = amount;
        }

        $scope.flagFlashCard = function()
        {
            if ( $scope.user.userFlashCardFlagged[$scope.currentFlashcard] == 1 )
            {
                $scope.user.userFlashCardFlagged[$scope.currentFlashcard] = 0;
            }
            else
            {
                $scope.user.userFlashCardFlagged[$scope.currentFlashcard] = 1;
            }
            $scope.setFlashCardData($scope.currentFlashcard);
            $localstorage.setObject('user', $scope.user);


        }


        $scope.setFlashCardData = function(page)
        {
            //Question&Answer
            $scope.flashCardQuestionContent = $sce.trustAsHtml(mainModel.getFlashCardQuestion(page));
            $scope.flashCardAnswerContent = $sce.trustAsHtml(mainModel.getFlashCardAnswer(page));

            // flagged
            if ( $scope.user.userFlashCardFlagged[page] == 1 )
            {
                $scope.flashCardFlagged = true;
            }
            else
            {
                $scope.flashCardFlagged = false;
            }

            console.log("Flagged : " + $scope.flashCardFlagged )
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
        $scope.setFlashCardData($scope.currentFlashcard);
  });