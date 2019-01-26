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
            else if ( $scope.user.userLastView == 'savedHighlights')
            {
                $scope.changeSubHeaderText("HIGHLIGHTS SAVED CONTENT");
            }

            $scope.chapters = mainModel.getBookChapters();
            $scope.chapters.forEach(function(chapter)
            {
                $scope.chapterSectionOpen.push(false);
            });

            $scope.user = $localstorage.getObject('user');
            $scope.savedHighlights = $scope.user.userHightlights;
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
        
        $scope.deleteHightlight = function(highlight,hlIndex)
        {
            console.log("Deleting.. :" + JSON.stringify(highlight));

            // Saving data
            dataService.deleteHighlight($scope.user.userSession,
                                        $scope.user.userID,
                                        highlight.highlightID)
            .then(function(response) 
                {
                if (response != undefined && typeof response == "object") 
                {
                    console.log("deletedHighlight response: " + JSON.stringify(response.data))
                    $scope.removeUIHighlight(hlIndex);
                }
                else 
                {
                    alert("Result is not JSON type");
                }
            });
        }

        $scope.removeUIHighlight = function(hlIndex)
        {
            delete $scope.savedHighlights[hlIndex];

            console.log("$scope.savedHighlights : " + $scope.savedHighlights);
        }

        $scope.init();
        
  });