mainApp.controller('FlashCardController', function($scope,dataService,mainModel) 
    {
        //init
        $scope.currentFlashcard = 0;
        $scope.maxFlashCards = 4;


        $scope.flashCards = mainModel.getFlashCards();         // test data, change to service later
        
        // Methods
        $scope.nextCard = function(num)
        {
            $scope.flashCardisFlipped = false;
            $scope.currentFlashcard += num;
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