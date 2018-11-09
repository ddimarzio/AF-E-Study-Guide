mainApp.controller('HandbookController', function($scope,$sce,$localstorage,$window,dataService,mainModel) 
    {
        //init
        $scope.currentChapter = 1;
        $scope.currentPage = 0;
        $scope.currentMaxPages = mainModel.getMaxPages();
        $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage(0));
        $scope.originalPageContent =  $scope.currentPageContent;

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

        // TODO : Neees rework
        $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage($scope.currentPage));
        var contentEle = document.getElementById( 'pageContentEle' );
        $scope.currentPageContent = $scope.highlight(contentEle.innerHTML,txt);
    // document.aform.selectedtext.value = txt;
    }

    $scope.highlight = function(haystack, needle) {
        if(!needle) {
            return $sce.trustAsHtml(haystack);
        }
        return $sce.trustAsHtml(haystack.replace(new RegExp(needle, "gi"), function(match) {
            return '<span class="highlight-text">' + match + '</span>';
        }));
    };
        $scope.setPageData($scope.currentPage);
        
  });