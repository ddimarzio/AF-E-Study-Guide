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
        $scope.marker = "MM";

        $scope.chapterPageNumber = 0;
        $scope.chapterMaxPages = 0;

        $scope.getContent = function()
        {
            var whichPage = $localstorage.getObject('resourcePage');
            
            dataService.getEReaderPages($scope.user.userSession,whichPage[0],whichPage[1],whichPage[2])
            .then(function(response) 
            {
              if (response != undefined && typeof response == "object") 
              {
                console.log("response.data : " + JSON.stringify(response.data));
                $scope.allPageContent = [];
                $scope.allPageContent = response.data.getSectionContentResp;
                $scope.actualPageNumber = parseFloat($scope.allPageContent[0].page);

                $scope.chapterPageNumber = parseFloat(response.data.pageStart);
                $scope.chapterMaxPages = parseFloat(response.data.chapterPageCount);

                console.log("$scope.chapterPageNumber" + $scope.chapterPageNumber);
                console.log("$scope.chapterMaxPages" + $scope.chapterMaxPages);

                $scope.currentMaxPages = $scope.allPageContent.length;
                $scope.currentPageContent = $sce.trustAsHtml($scope.allPageContent[0].content);
                // $scope.changeSubHeaderText("Chapter " + mainModel.handbookGetHBPage(0).chapter," - " + mainModel.handbookGetHBPage(0).title);
                $scope.originalPageContent =  $scope.currentPageContent;

                $scope.changeHeaderText("THE AIR Force HANDBOOK 1");
                $scope.changeSubHeaderText("Chapter " + ($scope.allPageContent[0].chapter) + " " + $scope.allPageContent[0].title);

                $scope.getAllUserData();

              } 
              else 
              {
                alert("Result is not JSON type");
              }
            });
        }

        $scope.getAllUserData = function()
        {
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

            $localstorage.setObject('user', $scope.user);
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
            // $localstorage.setObject('user', $scope.user);
        }

        $scope.setPageData = function(page)
        {
            $scope.user = $localstorage.getObject('user');
            
            console.log("----Page Content-----");
            console.log(JSON.stringify($scope.allPageContent[page].content));
            console.log("---Page Content End---");

            var keyindex = $scope.allPageContent[page].chapter + "." + $scope.allPageContent[page].section + "." + $scope.allPageContent[page].page;
         
            // highlights
            $scope.addHighlights();
            
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

            var selection = getSelection();

            if (selection.getRangeAt)
                range = selection.getRangeAt(0);
            else {
                range = document.createRange();
                range.setStart(selection.anchorNode, selection.anchorOffset);
                range.setEnd(selection.focusNode, selection.focusOffset);
            }

            // No selection, has to be same node also
            if ( txt != "" && selection.focusNode == selection.anchorNode)
            {
                $scope.addMarker(range,txt);
            }
        }

        $scope.addMarker = function(range,txt)
        {
            var addedMarkerContent = [range.startContainer.textContent.toString().slice(0, range.startOffset), $scope.marker, range.startContainer.textContent.toString().slice(range.startOffset)].join('');
           
            // replace " with &quot;  TODO  add other special chars
                // EM Dash is escaped to:  &mdash;
                // EN Dash is escaped to: &ndash;
                // Double quotes are escaped to: &quot;
                // And single quotes are escaped to: ((quote))
            var replacedContent = addedMarkerContent.replace(/"/g, '&quot;');
            var nodeContent = range.startContainer.textContent.replace(/"/g, '&quot;');
            var contentWithMarker = $scope.currentPageContent.toString().replace(nodeContent,replacedContent);
            
            var matchTxt = $scope.removeSpecialChars(txt);
            // Matching the txt with the marker in front
            var reg = new RegExp("(" + $scope.marker + ")?" + matchTxt,"g");
            var occurance = -1;
            var i = 0;
            var matchIndex = -1;
            while ( result = reg.exec(contentWithMarker))
            {
                if ( result[1] != undefined)
                {
                    occurance = i;
                    matchIndex = result.index;
                }
                i++;
            }
            // save highlight
            var whichPage = $localstorage.getObject('resourcePage');
            var hl = {};
                hl.chapterID = whichPage[1];
                hl.sectionID = whichPage[2];
                hl.pageNumber = $scope.allPageContent[$scope.currentPage].page;
                hl.content = txt.toString();
                hl.startChar = occurance;
                hl.endChar = matchIndex;

            $scope.saveUserHightlight(hl);
        }

        $scope.saveUserHightlight = function(highlight)
        {
            // Saving data
            dataService.saveHighlight($scope.user.userSession,
                $scope.user.userID,
                highlight.chapterID,
                highlight.sectionID,
                highlight.pageNumber,
                highlight.content,
                highlight.startChar,
                highlight.endChar)
            .then(function(response) 
            {
            if (response != undefined && typeof response == "object") 
            {
                console.log("saveUserHightlight response: " + JSON.stringify(response.data))

                highlight.highlightID = response.data.highlightID;    
                $scope.user.userHightlights.push(highlight);
                $localstorage.setObject('user', $scope.user);

                console.log("saveUserHightlight : " + JSON.stringify($scope.user));

                $scope.addHighlights();
            }
            else 
            {
            alert("Result is not JSON type");
            }
            });
        }
        $scope.addHighlights = function()
        {
            //TODO move prototypes to new file.
            String.prototype.splice = function(idx, rem, str) {
                return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
            };

            var startHLTag = "<span class='highlight-text'>";
            var endHTMLTag = "</span>";
            $scope.user.userHightlights.forEach(function(highlight)
            {
                // Determining if on correct page for highllight
                var whichPage = $localstorage.getObject('resourcePage');
                if ( highlight.chapterID == whichPage[1] &&
                     highlight.sectionID == whichPage[2] &&
                     highlight.pageNumber == $scope.allPageContent[$scope.currentPage].page)
                {

                    // Finding the occurance
                    var matchContent = $scope.removeSpecialChars(highlight.content);

                    var reg = new RegExp(matchContent,"g");
                    var i = 0;
                    var highLightContent = "";
                    while ( result = reg.exec($scope.currentPageContent))
                    {
                        if ( i == highlight.startChar)
                        {
                            highLightContent =  $scope.currentPageContent.toString().splice(result.index,result[0].length,startHLTag + result[0] + endHTMLTag);
                        }
                        i++;
                    }

                    $scope.currentPageContent = $sce.trustAsHtml(highLightContent);
                }
            });
        }

        $scope.removeSpecialChars = function(matchText)
        {
             return matchText.toString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }

        $scope.getContent();

  });