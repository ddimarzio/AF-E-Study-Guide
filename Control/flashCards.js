mainApp.controller('FlashCardController', function($scope,dataService,mainModel) 
    {
        //init
        $scope.currentFlashcardQuestion = 0;

        $scope.getTestData = function()
        {
            dataService.getGreeting()
                .then(function(response) 
                {
                    if (response != undefined && typeof response == "object") {
                        console.log("Controller : "  + JSON.stringify(response.data) );
                        $scope.testData = response.data;
                    } else {
                            alert("Result is not JSON type");
                    }
                });

        }

        $scope.flashCards = mainModel.getFlashCards();         // test data, change to service later


        // Methods
        $scope.FlashCardSelected = function(thierSelection)
        {
            $scope.flashCardSelection = thierSelection;
        }

        $scope.SubmitFlashCard = function(correctAnswer)
        {
            if ( $scope.flashCardSelection == correctAnswer ) 
            {
                $scope.flashCards.selectionResponse = "GREAT JOB!";
            }
            else
            {
                $scope.flashCards.selectionResponse = "TRY AGAIN";
            }
        }

        $scope.NextFlashCard = function(val)
        {
            $scope.currentFlashcardQuestion += val;
        }
  });