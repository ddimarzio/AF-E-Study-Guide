mainApp.controller('HandbookController', function($scope,$sce,$localstorage,$window,dataService,mainModel) 
    {
        //init
        $scope.currentChapter = 1;
        $scope.currentPage = 0;
        $scope.currentMaxPages = mainModel.getMaxPages();
        $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage(0));

        $scope.addPageNotes = function(notes)
        {
            $scope.user.userNotes[$scope.currentPage] = notes;
            $localstorage.setObject('user', $scope.user);
            $scope.setPageData($scope.currentPage);
            $scope.pageNotesSaved = true;
        }

        $scope.bookmarkThisPage = function()
        {
            if ( $scope.user.userBookMarks[$scope.currentPage] == 1 )
            {
                $scope.user.userBookMarks[$scope.currentPage] = 0;
            }
            else
            {
                $scope.user.userBookMarks[$scope.currentPage] = 1;
            } 
            $scope.setPageData($scope.currentPage);
            $localstorage.setObject('user', $scope.user);
        }

        $scope.setPageData = function(page)
        {
            // notes
            $scope.pageNotes = $scope.user.userNotes[page];

            // boookmark
            if ( $scope.user.userBookMarks[page] == 1 )
            {
                $scope.pageBookmarked = true;
            }
            else
            {
                $scope.pageBookmarked = false;
            }
        }

        $scope.navToPage = function(num)
        {
            if ( num > -1 && num < $scope.currentMaxPages)
            {
                $scope.currentPage = num;
                $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage(num));

                $scope.setPageData($scope.currentPage);
            }   
        }

        $scope.setPageData($scope.currentPage);
        
  });