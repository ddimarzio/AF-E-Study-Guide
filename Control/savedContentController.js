mainApp.controller('SavedContentController', function($scope,$localstorage,$sce,dataService,mainModel) 
    {

        // Methods
        $scope.chapterSectionOpen = [];

        $scope.init = function()
        {
            $scope.user = $localstorage.getObject('user');

            if ( $scope.user.userLastView == 'savedBookmarks')
            {
                $scope.changeSubHeaderText("BOOKMARKS SAVED CONTENT");
            }
            else if ( $scope.user.userLastView == 'savedNotes')
            {
                $scope.changeSubHeaderText("NOTES SAVED CONTENT");
            }

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