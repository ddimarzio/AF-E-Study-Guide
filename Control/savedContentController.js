mainApp.controller('SavedContentController', function($scope,$localstorage,$sce,dataService,mainModel) 
    {

        $scope.testIt = function(indx)
        {
            if ( (indx/4) == Math.round(indx/4) )
            {
                console.log("true" + (indx/4) + " | " + Math.round(indx/4) );
            }
            
        }
        // Methods
        $scope.chapterSectionOpen = [];

        $scope.init = function()
        {
            $scope.changeSubHeaderText("BOOKMARKS SAVED CONTENT");
            $scope.chapters = mainModel.getBookChapters();
            $scope.chapters.forEach(function(chapter)
            {
                $scope.chapterSectionOpen.push(false);
            });

            // console.log("Chapters : " + JSON.stringify($scope.chapters));
        }

        $scope.openChaperSection = function(num)
        {
            $scope.chapterSectionOpen.forEach(function(value, key)
            {
                if ( key != num )
                {
                    $scope.chapterSectionOpen[key] = false;
                }
            });

            $scope.chapterSectionOpen[num] = !$scope.chapterSectionOpen[num];
        }

        $scope.removeBookmark = function(num)
        {
            console.log("Removing #" + num);
        }
        
        $scope.init();
        
  });