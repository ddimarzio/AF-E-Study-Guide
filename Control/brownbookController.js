mainApp.controller('BrownbookController', function($scope,$sce,$localstorage,$window,dataService,mainModel) 
    {
        //init
        $scope.currentChapter = 1;
        $scope.currentPage = 0;
        $scope.currentMaxPages = mainModel.getMaxBBPages();
        $scope.currentPageContent = $sce.trustAsHtml(mainModel.brownBookGetPage(0).content);
        $scope.changeSubHeaderText("Chapter " + mainModel.brownBookGetPage(0).chapter," - " + mainModel.handbookGetHBPage(0).title);
        $scope.originalPageContent =  $scope.currentPageContent;

        $scope.saveHighlights = function(page,txt)
        {
            $scope.user.userHightlights[mainModel.brownBookGetPage($scope.currentPage).indx] = txt.toString();
            $localstorage.setObject('user', $scope.user);
        }

        $scope.openCloseNotes = function()
        {
            if ( $scope.notesOpen != true )
            {
                $scope.notesOpen = true;
            }
            else
            {
                $scope.notesOpen = false;
            }
        }

        $scope.addPageNotes = function(notes)
        {
            $scope.user.userNotes[mainModel.brownBookGetPage($scope.currentPage).indx] = notes;
            $localstorage.setObject('user', $scope.user);
            $scope.setPageData($scope.currentPage);
            $scope.pageNotesSaved = true;
        }

        $scope.bookmarkThisPage = function()
        {
            if ( $scope.user.userBookMarks[mainModel.brownBookGetPage($scope.currentPage).indx] == 1 )
            {
                $scope.user.userBookMarks[mainModel.brownBookGetPage($scope.currentPage).indx] = 0;
            }
            else
            {
                $scope.user.userBookMarks[mainModel.brownBookGetPage($scope.currentPage).indx] = 1;
            } 
            $scope.setPageData($scope.currentPage);
            $localstorage.setObject('user', $scope.user);
        }

        $scope.setPageData = function(page)
        {
            // highlights
            if ( $scope.user.userHightlights[mainModel.brownBookGetPage($scope.currentPage).indx] != undefined)
            {
                $scope.addHighlight($scope.user.userHightlights[mainModel.brownBookGetPage($scope.currentPage).indx]);
            }

            // notes
            $scope.pageNotes = $scope.user.userNotes[mainModel.brownBookGetPage($scope.currentPage).indx];

            // boookmark
            if ( $scope.user.userBookMarks[mainModel.brownBookGetPage($scope.currentPage).indx] == 1 )
            {
                $scope.pageBookmarked = true;
            }
            else
            {
                $scope.pageBookmarked = false;
            }

            // set read progress
            if ( page+1 > $scope.user.userReadHandbook)
            {
                $scope.user.userReadHandbook = page+1;
                $scope.user.userProgress = $scope.user.userReadHandbook*10;
                console.log("Progress update" + $scope.user.userProgress);
                $localstorage.setObject('user', $scope.user);
            }
        }

        $scope.navToPage = function(num)
        {
            if ( num > -1 && num < $scope.currentMaxPages)
            {
                $scope.currentPage = num;
                page = mainModel.brownBookGetPage(num);
                $scope.currentPageContent = $sce.trustAsHtml(page.content);
                $scope.changeSubHeaderText("Chapter " + page.chapter," - " + page.title);
                $scope.setPageData($scope.currentPage);
            }   
        }

        // TODO - problem highlighting paranetheses
        $scope.getSelectedText = function()
        {
            var txt = '';
            if (window.getSelection)
            {
                txt = window.getSelection();
            }
            else if (document.getSelection)
            {
                txt = document.getSelection();
            }
            else if (document.selection)
            {
                txt = document.selection.createRange().text;
            }
            else return;

            $scope.addHighlight(txt);
        }

        $scope.addHighlight = function(txt)
        {
            $scope.currentPageContent = $sce.trustAsHtml(mainModel.brownBookGetPage($scope.currentPage).content);
                
            if ( txt != '')
            {
                var contentEle = document.getElementById( 'pageContentEle' );
                $scope.currentPageContent = $scope.highlight($scope.currentPageContent,txt);

                $scope.saveHighlights($scope.currentPage,txt);
            }
        }

        $scope.highlight = function(haystack, needle) {
            if(!needle || needle == "" ) {
                return $sce.trustAsHtml(haystack);
            }
            return $sce.trustAsHtml(haystack.toString().replace(new RegExp(needle, "gi"), function(match) {
                return '<span class="highlight-text">' + match + '</span>';
            }));
        };

        $scope.setPageData($scope.currentPage);
  });