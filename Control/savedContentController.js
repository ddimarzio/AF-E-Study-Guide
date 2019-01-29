mainApp.controller('SavedContentController', function($scope,$localstorage,$sce,dataService,mainModel) 
    {

        // Methods
        $scope.chapterSectionOpen = [];

        $scope.init = function()
        {
            $scope.getSavedUserData();

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
        }

        $scope.getSavedUserData = function()
        {
            // TODO : Change to just getting highlights
            dataService.getUserData($scope.user.userSession,$scope.user.userID)
            .then(function(response) 
                {
                if (response != undefined && typeof response == "object") 
                {
                    $scope.user.userName = response.data.Username;
                    $scope.user.userRankID = response.data.userRankID;
                    $scope.user.userRole = response.data.userRole;

                    // $scope.user.userBookMarks = response.data.userBookMarks;
                    $scope.user.userHightlights = response.data.userHightlights;

                    $scope.user.userFlashCardFlagged = {};
                    response.data.userFlashCardFlagged.forEach(function(flashcard)
                    {
                    $scope.user.userFlashCardFlagged[flashcard.indx] = flashcard.flagged;
                    });

                    // Notes
                    $scope.user.userNotes = {}; 
                    response.data.userNotes.forEach(function(noteObject)
                    {
                    var noteIndex = noteObject.chapterID + "." + noteObject.sectionID + "." + noteObject.pageNumber;
                    $scope.user.userNotes[noteIndex] = noteObject.note;
                    });
                    
                    // bookmarks
                    $scope.user.userBookMarks = {}; 
                    response.data.userBookMarks.forEach(function(bmObject)
                    {
                    var bmIndex = bmObject.chapterID + "." + bmObject.sectionID + "." + bmObject.pageNumber;
                    $scope.user.userBookMarks[bmIndex] = 1;
                    });

                    $localstorage.setObject('user', $scope.user);

                    $scope.savedHighlights = $scope.user.userHightlights;
                    console.log("getSavedUserData : " + JSON.stringify($scope.user));
                }
                else
                {
                    alert("Result is not JSON type");
                }
            });
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
            // console.log("Removing #" + num);
        }
        
        $scope.deleteHightlight = function(highlight,hlIndex)
        {
            // Delete
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
            $scope.savedHighlights.splice(hlIndex,1);
            $scope.user.userHightlights = $scope.savedHighlights;
            $localstorage.setObject('user', $scope.user);
        }

        $scope.init();
        
  });