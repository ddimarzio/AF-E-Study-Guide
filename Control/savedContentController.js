mainApp.controller('SavedContentController', function($scope,$localstorage,$sce,dataService,mainModel) 
    {
        //init
        $scope.chapterSectionOpen = [false,false,false,false,false];
        // Methods

        $scope.openChaperSection = function(num)
        {
            $scope.chapterSectionOpen[num] = !$scope.chapterSectionOpen[num];
        }
        
        
  });