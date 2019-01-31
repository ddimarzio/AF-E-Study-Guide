mainApp.controller('PracticeTestController', function($scope,dataService,mainModel) 
    {
        //init
        $scope.currentTestQuestion = 0;

        $scope.setTestQuestion = function(num)
        {
            $scope.currentTestQuestion = num; 
        }

        $scope.getTestData = function()
        {
            dataService.loginUser()
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

        $scope.testQuestions = mainModel.getTestQuestions();         // test data, change to service later

        // Methods
        $scope.TestAnswerSelected = function(thierSelection)
        {
            $scope.testAnswerSelection = thierSelection;
        }

        $scope.SubmitTestAnswer = function(correctAnswer)
        {
            if ( $scope.testAnswerSelection == correctAnswer ) 
            {
                $scope.testQuestions.selectionResponse = "GREAT JOB!";
            }
            else
            {
                $scope.testQuestions.selectionResponse = "TRY AGAIN";
            }
        }

        $scope.NextTestQuestion = function(val)
        {
            $scope.currentTestQuestion += val;
        }
  });