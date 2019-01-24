mainApp.controller('HandbookController', function($scope,$sce,$localstorage,$window,dataService,mainModel) 
    {
        //init
        $scope.currentChapter = 1;
        $scope.currentPage = 0;
        $scope.maxChapters = 5;
        $scope.nextChapterBtn = false;
        $scope.prevChapterBtn = false;
        $scope.showNextNav = true;
        $scope.showPrevNav = true;

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
         
            // highlights
            // if ( $scope.user.userHightlights[keyindex] != undefined)
            // {
            //     $scope.addHighlight($scope.user.userHightlights[keyindex]);
            // }
            
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

            $scope.setNavButtons();
        }

        $scope.navToPage = function(num)
        {
            if ( num > -1 && num < $scope.currentMaxPages)
            {
                $scope.currentPage = num;
                page = $scope.allPageContent[num];
                $scope.currentPageContent = $sce.trustAsHtml(page.content);

                console.log("----------------------------");
                console.log("$scope.currentPageContent :" + $scope.currentPageContent);
                console.log("----------------------------");

                $scope.actualPageNumber = parseFloat($scope.allPageContent[num].page);
                $scope.setPageData($scope.currentPage);
            }
            else // move chapters
            {
                var chaptSections = $localstorage.getObject('allChapterSections');
                var whichPage = $localstorage.getObject('resourcePage');
                var totalSections = chaptSections[(whichPage[1]-1)].sections.length;

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

                if ( num >= $scope.currentMaxPages) // moving forward
                {
                    if ( currentSectionNum >= (totalSections-1) ) // at end of sections, move to next chapter
                    {
                        if ( whichPage[1] < $scope.maxChapters ) // max chapters 5 for now
                        {
                            whichPage[1]++;

                            var nextSection = chaptSections[(whichPage[1]-1)].sections[0].sectionID;
                            whichPage[2] = nextSection;
                            $localstorage.setObject('resourcePage',whichPage);
                            $scope.currentPage = 0;
                            $scope.getContent();
                        }
                    }
                    
                    else
                    {
                        var nextSection = chaptSections[(whichPage[1]-1)].sections[currentSectionNum+1].sectionID;
                        whichPage[2] = nextSection;
                        $localstorage.setObject('resourcePage',whichPage);
                        $scope.currentPage = 0;
                        $scope.getContent();
                    }
                }
                else // moving back
                {
                    if (currentSectionNum < 1) // moving back a chapter
                    {
                        if ( whichPage[1] > 1 ) // Stop on first chapter
                        {
                            whichPage[1]--;

                            var nextSection = chaptSections[(whichPage[1]-1)].sections[0].sectionID;
                            whichPage[2] = nextSection;
                            $localstorage.setObject('resourcePage',whichPage);
                            $scope.currentPage = 0;
                            $scope.getContent();
                        }
                    }
                    else
                    {
                        var nextSection = chaptSections[(whichPage[1]-1)].sections[currentSectionNum-1].sectionID;
                        whichPage[2] = nextSection;
                        $localstorage.setObject('resourcePage',whichPage);
                        $scope.currentPage = 0;
                        $scope.getContent();
                    }
                }
            }
        }

        $scope.setNavButtons = function()
        {
            var chaptSections = $localstorage.getObject('allChapterSections');
            var whichPage = $localstorage.getObject('resourcePage');
            var totalSections = chaptSections[(whichPage[1]-1)].sections.length;

            // Current section number
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
            // end of section

            // change nav button to prev or next chapter
            $scope.showNextNav = true;
            if ( currentSectionNum == (totalSections-1) && $scope.currentPage == ($scope.currentMaxPages-1))
            {
                if ( whichPage[1] < $scope.maxChapters)
                {
                    $scope.showNextNav = true;
                }
                else
                {
                    $scope.showNextNav = false;
                }
                $scope.nextChapterBtn = true;
            }
            else
            {
                $scope.nextChapterBtn = false;
            }

            $scope.showPrevNav = true;
            if ( currentSectionNum == 0 && $scope.currentPage == 0)
            {
                if ( whichPage[1] > 1)
                {
                    $scope.showPrevNav = true;
                }
                else
                {
                    $scope.showPrevNav = false;
                }                
                $scope.prevChapterBtn = true;
            }
            else
            {
                $scope.prevChapterBtn = false;
            }
        }

        // *********  HIGHLIGHTS **************
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

            var specNode = {};
            var specNode = $scope.getNode(range,selection);

            console.log("specNode : " + JSON.stringify(specNode));

            // Save highlight
            var whichPage = $localstorage.getObject('resourcePage');

            var highlight = {};
            highlight.chapterID = whichPage[1];
            highlight.sectionID = whichPage[2];
            highlight.pageNumber = $scope.allPageContent[$scope.currentPage].page;
            highlight.content = specNode.nodes;
            highlight.startChar = specNode.startChar;
            highlight.endChar = specNode.endChar;

            $scope.user.userHightlights.push(highlight);

            $localstorage.setObject('user', $scope.user);

            $scope.saveThisUserData();
            $scope.setPageData($scope.currentPage);
            $scope.addHighlights();
        }

        $scope.addHighlights = function()
        {
            $scope.currentPageContent = $sce.trustAsHtml($scope.allPageContent[$scope.currentPage].content);
            var whichPage = $localstorage.getObject('resourcePage');

            var hightlights = $scope.user.userHightlights;
            hightlights.forEach(function(highlight)
            {

                if ( highlight.chapterID == whichPage[1] &&
                     highlight.sectionID == whichPage[2] &&
                     highlight.pageNumber == $scope.allPageContent[$scope.currentPage].page)
                {
                    console.log("highlight.chapterID : " + highlight.chapterID + ":" + whichPage[1]);
                    console.log("highlight.sectionID : " + highlight.sectionID + ":" + whichPage[2]);
                    console.log("highlight.pageNumber : " + highlight.pageNumber + ":" + $scope.allPageContent[$scope.currentPage].page);
                }
                // "highlightID": 29,
                // "chapterID": "2",
                // "sectionID": "2A",
                // "pageNumber": 74,
                // "content": "0,0",
                // "startChar": 140,
                // "endChar": 161
            });

            // if ( txt != '')
            // {
            //     var contentEle = document.getElementById( 'pageContentEle' );
            //     $scope.currentPageContent = $scope.highlight($scope.currentPageContent,txt);

            //     $scope.saveHighlights($scope.currentPage,txt);
            // }
        }

        $scope.highlight = function(haystack, needle) {
            if(!needle || needle == "" ) {
                return $sce.trustAsHtml(haystack);
            }
            return $sce.trustAsHtml(haystack.toString().replace(new RegExp(needle, "gi"), function(match) {
                return '<span class="highlight-text">' + match + '</span>';
            }));
        };

        $scope.getNode = function(range,selection)
        {
            var returnObj = {};

            var div = document.querySelector('#pageContentEle');
            var allParaNodes = div.querySelectorAll('p');

            // Getting node index start and end
            var startNodeIndex = 0;
            var endNodeIndex = 0;
            angular.forEach(allParaNodes, function(value,key)
            {
                if ( range.startContainer.textContent == value.textContent)
                {
                    startNodeIndex = key;
                }
                if ( range.endContainer.textContent == value.textContent)
                {
                    endNodeIndex = key;
                }
            });

            console.log("startNodeIndex : " + startNodeIndex + " | endNodeIndex " + endNodeIndex);

            returnObj.nodes = startNodeIndex + "," + endNodeIndex;
            returnObj.startChar = range.startOffset
            returnObj.endChar = range.endOffset;

            return returnObj;
        }

        // *********  HIGHLIGHTS **************


        $scope.getContent();

  });