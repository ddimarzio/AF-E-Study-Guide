mainApp.controller('HandbookController', function($scope,$sce,$localstorage,$window,dataService,mainModel) 
    {
        //init
        $scope.currentChapter = 1;
        $scope.currentPage = 0;
        $scope.currentMaxPages = mainModel.getMaxPages();
        $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage(0).content);
        $scope.changeSubHeaderText("Chapter " + mainModel.handbookGetHBPage(0).chapter," - " + mainModel.handbookGetHBPage(0).title);
        $scope.originalPageContent =  $scope.currentPageContent;

        $scope.addHighlights = function(txt,page)
        {
            // page needs to be a specific index.  Replace array
            
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
            // header

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
                page = mainModel.handbookGetHBPage(num);
                $scope.currentPageContent = $sce.trustAsHtml(page.content);
                $scope.changeSubHeaderText("Chapter " + page.chapter," - " + page.title);
                $scope.setPageData($scope.currentPage);
            }   
        }

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
            console.log("Selected Text : " + txt)

            // TODO : Needs rework
            $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage($scope.currentPage).content);
            
            var contentEle = document.getElementById( 'pageContentEle' );
            $scope.currentPageContent = $scope.highlight($scope.currentPageContent,txt);
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