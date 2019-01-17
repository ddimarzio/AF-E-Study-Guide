mainApp.controller('HandbookController', function($scope,$sce,$localstorage,$window,dataService,mainModel) 
    {
        //init
        $scope.currentChapter = 1;
        $scope.currentPage = 0;

        $scope.getContent = function()
        {
            var whichPage = $localstorage.getObject('resourcePage');
            console.log("whichPage :" + whichPage);
            
            dataService.getEReaderPages($scope.user.userSession,whichPage[0],whichPage[1],whichPage[2])
            .then(function(response) 
            {
              if (response != undefined && typeof response == "object") 
              {
                
                $scope.allPageContent = [];
                $scope.allPageContent = response.data;
                $scope.actualPageNumber = parseFloat($scope.allPageContent[0].page);

                console.log("allPageContent : " + JSON.stringify($scope.allPageContent));

                $scope.currentMaxPages = $scope.allPageContent.length;
                $scope.currentPageContent = $sce.trustAsHtml($scope.allPageContent[0].content);
                // $scope.changeSubHeaderText("Chapter " + mainModel.handbookGetHBPage(0).chapter," - " + mainModel.handbookGetHBPage(0).title);
                $scope.originalPageContent =  $scope.currentPageContent;

                $scope.changeHeaderText("THE AIR Force HANDBOOK 1");
                $scope.changeSubHeaderText("Chapter " + ($scope.allPageContent[0].chapter-1) + " " + $scope.allPageContent[0].title);

                $scope.setPageData($scope.currentPage);

              } 
              else 
              {
                alert("Result is not JSON type");
              }
            });
        }

        $scope.saveHighlights = function(page,txt)
        {
            var keyindex = $scope.allPageContent[page].chapter + "." + $scope.allPageContent[page].section + "." + $scope.allPageContent[page].page;
            
            $scope.user.userHightlights[keyindex] = txt.toString();
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
            var keyindex = $scope.allPageContent[$scope.currentPage].chapter + "." + $scope.allPageContent[$scope.currentPage].section + "." + $scope.allPageContent[$scope.currentPage].page;

            $scope.user.userNotes[keyindex] = notes;
            $localstorage.setObject('user', $scope.user);

            $scope.saveThisUserData();

            $scope.setPageData($scope.currentPage);
            $scope.pageNotesSaved = true;
        }

        $scope.saveThisUserData = function()
        {
            var keyindex = $scope.allPageContent[$scope.currentPage].chapter + "." + $scope.allPageContent[$scope.currentPage].section + "." + $scope.allPageContent[$scope.currentPage].page;

            // Converting my system to the 'other' system
            var notesArray = [];
            angular.forEach($scope.user.userNotes, function(note, index) 
            {
                var indexarray = index.split('.');
                var noteObject = {};
                noteObject.chapterID = indexarray[0];
                noteObject.sectionID = indexarray[1];
                noteObject.pageNumber = indexarray[2];
                noteObject.note = note;
                notesArray.push(noteObject);
            });

            var bookmarksArray = [];
            angular.forEach($scope.user.userBookMarks, function(bookmark, index) 
            {
                if ( bookmark == 1 )
                {
                    var indexarray = index.split('.');
                    var bookMarkObject = {};
                    bookMarkObject.chapterID = indexarray[0];
                    bookMarkObject.sectionID = indexarray[1];
                    bookMarkObject.pageNumber = indexarray[2];
                    bookmarksArray.push(bookMarkObject);
                }
            });

            console.log("bookmarksArray :" + JSON.stringify(bookmarksArray));

            // Saving data
            dataService.saveUserData($scope.user.userSession,
                                        $scope.user.userID,
                                        $scope.user.userRankID,
                                        $scope.user.userRole,
                                        $scope.user.userName,
                                        bookmarksArray,
                                        notesArray,
                                        $scope.user.userFlashCardFlagged,
                                        $scope.user.userHightlights,
                                        $scope.user.userReadHandbook,
                                        $scope.user.userProgress)
            .then(function(response) 
            {
            if (response != undefined && typeof response == "object") 
            {
                console.log("saveUserData response: " + JSON.stringify(response.data))
            }
            else 
            {
                alert("Result is not JSON type");
            }
            });

        }

        $scope.bookmarkThisPage = function()
        {
            var keyindex = $scope.allPageContent[$scope.currentPage].chapter + "." + $scope.allPageContent[$scope.currentPage].section + "." + $scope.allPageContent[$scope.currentPage].page;
            
            if ( $scope.user.userBookMarks[keyindex] == 1 )
            {
                $scope.user.userBookMarks[keyindex] = 0;
            }
            else
            {
                $scope.user.userBookMarks[keyindex] = 1;
            } 

            $scope.saveThisUserData();

            $scope.setPageData($scope.currentPage);
            $localstorage.setObject('user', $scope.user);
        }

        $scope.setPageData = function(page)
        {
            var keyindex = $scope.allPageContent[page].chapter + "." + $scope.allPageContent[page].section + "." + $scope.allPageContent[page].page;
         
            console.log("User userNotes :" + JSON.stringify($scope.user.userNotes));
            console.log("keyindex : " + keyindex);
            console.log("$scope.user.userNotes[keyindex] :" + $scope.user.userNotes[keyindex]);


            // highlights
            if ( $scope.user.userHightlights[keyindex] != undefined)
            {
                $scope.addHighlight($scope.user.userHightlights[keyindex]);
            }
            
            // notes
            if ( $scope.user.userNotes[keyindex] != undefined)
            {
                $scope.pageNotes = $scope.user.userNotes[keyindex];
            }
            else
            {
                $scope.pageNotes = "";
                $scope.notesOpen = false;
            }

            // boookmark
            if ( $scope.user.userBookMarks[keyindex] != undefined)
            {
                if ( $scope.user.userBookMarks[keyindex] == 1 )
                {
                    $scope.pageBookmarked = true;
                }
                else
                {
                    $scope.pageBookmarked = false;
                }
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
                $localstorage.setObject('user', $scope.user);
            }
        }

        $scope.navToPage = function(num)
        {
            if ( num > -1 && num < $scope.currentMaxPages)
            {
                $scope.currentPage = num;
                page = $scope.allPageContent[num];
                $scope.currentPageContent = $sce.trustAsHtml(page.content);
                $scope.actualPageNumber = parseFloat($scope.allPageContent[num].page);
                $scope.setPageData($scope.currentPage);
            }
            else // move chapters
            {
                var chaptSections = $localstorage.getObject('allChapterSections');
                var whichPage = $localstorage.getObject('resourcePage');
                console.log("Chapter :" + whichPage[1]);
                console.log("Section :" + whichPage[2]);

                console.log("Sections total :" + chaptSections[(whichPage[1]-1)].sections.length);

                // TODO. Not the best way to get the current section we are on.
                var currentSectionNum = 0;
                var i = 0;
                chaptSections[(whichPage[1]-1)].sections.forEach(function(section)
                {
                    if ( section.sectionID == whichPage[2])
                    {
                        currentSectionNum = i;   
                    }
                    i++;
                });

                console.log("Current Section : " + currentSectionNum);


                var totalSections = chaptSections[(whichPage[1]-1)].sections.length;

                // chapter has sections, section exists.
                // check if chapter or sections are at the end
                // $localstorage.setObject('allChapterSections', $scope.allChapterSections);

                // $scope.allPageContent[0].chapter
                // $localstorage.setObject('resourcePage', [booktype,parseFloat(sectionid),sectionid]);
                // var whichPage = $localstorage.getObject('resourcePage');
                // $scope.getContent();
            }
        }

        // TODO - problem highlighting paranetheses
        $scope.getSelectedText = function()
        {
            var selection = getSelection();

            if (selection.getRangeAt)
                range = selection.getRangeAt(0);
            else {
                range = document.createRange();
                range.setStart(selection.anchorNode, selection.anchorOffset);
                range.setEnd(selection.focusNode, selection.focusOffset);
            }

            console.log("Range : " + range.startOffset + ":" + range.endOffset );
            console.log("Nodes : " + range.startContainer + ":" + range.endContainer );

            console.log("range.startContainer : " + range.startContainer.textContent  );


            // var txt = '';
            // if (window.getSelection)
            // {
            //     txt = window.getSelection();
            // }
            // else if (document.getSelection)
            // {
            //     txt = document.getSelection();
            // }
            // else if (document.selection)
            // {
            //     txt = document.selection.createRange().text;
            // }
            // else return;

            // $scope.addHighlight(txt);
        }

        $scope.addHighlight = function(txt)
        {
            $scope.currentPageContent = $sce.trustAsHtml($scope.allPageContent[$scope.currentPage].content);
                
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

        $scope.getContent();

  });