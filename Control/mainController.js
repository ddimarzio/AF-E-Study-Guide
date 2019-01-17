var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate'] );

mainApp.controller('MainController', function($scope,$sce,$location,$window,$localstorage,$document,mainModel,dataService) {
 
  $scope.version = "Version 0.249";

  $scope.Math = window.Math;

  // Menu system
  $scope.navMainMenuSelect = function(menuitem)
  {
    $scope.navMenuGreenText(menuitem);

    $scope.navSubMenuOpen[menuitem] = !$scope.navSubMenuOpen[menuitem];
    $scope.navMenuMainOpen[menuitem] = !$scope.navMenuMainOpen[menuitem];
  }

  $scope.navMenuGreenText = function(menuitem)
  {
    if ( menuitem != $scope.lastGreenText)
    {
      var menuText = angular.element( document.querySelector( '#menutext' + menuitem ) );
      menuText.addClass('menu-selected');

      var menuText = angular.element( document.querySelector( '#menutext' + $scope.lastGreenText ) );
      menuText.removeClass('menu-selected');
    }
    $scope.lastGreenText = menuitem;
  }
 
  $scope.toggleMainMenu = function()
  {
    $scope.navMenuMainOpen[0] = !$scope.navMenuMainOpen[0];
    $scope.closeChapterMenu[0] = false;
    $scope.navChapterMenuOpen[0] = false;
  }

  $scope.closeMainMenu = function()
  {
    $scope.navMenuMainOpen[0] = false;
    $scope.closeChapterMenu[0] = false;
    $scope.navChapterMenuOpen[0] = false;
  }

  $scope.toggleChapterMenu = function()
  {
    $scope.allChapterSections = $localstorage.getObject('allChapterSections');
    console.log("ChaptersSections :" + JSON.stringify($scope.allChapterSections));

    $scope.navChapterMenuOpen[0] = !$scope.navChapterMenuOpen[0];
  }

  $scope.closeChapterMenu = function()
  {
    $scope.navChapterMenuOpen[0] = false;
  }

  $scope.navChapterMenuSelect = function(menuitem)
  {
    $scope.navChapterMenuOpen[menuitem] = !$scope.navChapterMenuOpen[menuitem];
  }


  $scope.navigateToResource = function(booktype,sectionid)
  {
      $localstorage.setObject('resourcePage', [booktype,parseFloat(sectionid),sectionid]);
      $scope.closeMainMenu();

      if ( $scope.user.userLastView != 'handbook')
      {
       $scope.navigateToView('handbook');
      }
      else
      {
        $scope.user.userLastView = 'handbook';
        $localstorage.setObject('user', $scope.user);

        $window.location.reload();
      }
      // $scope.getContent();
  }

 // ********************

  $scope.resetPassword = function(thisUser)
  {
    // Service call then ...

    $scope.alertMessageClass = "bold-success-text";
    $scope.alertMessage = "An email has been sent to the address above.";
  }

  $scope.registerOnPassChange = function(thisUser)
  {
    var confirmPasswordInput = document.getElementById( 'inputPassword2' );
    confirmPasswordInput.setCustomValidity("");
  }

  $scope.registerUser = function(thisUser)
  {
    var passwordInput = document.getElementById( 'inputPassword' );
    var confirmPasswordInput = document.getElementById( 'inputPassword2' );

    if ( passwordInput.value != confirmPasswordInput.value )
    {
      confirmPasswordInput.setCustomValidity("Passwords Don't Match");
    }
    else
    {
   
      // TODO  - Disable submit button and add loader
      dataService.registerUser(thisUser)
      .then(function(response) 
      {
          if (response != undefined && typeof response == "object") 
          {
              // console.log("Controller : "  + JSON.stringify(response.data) );
            if ( response.data.status == 1)  //success
            {
              $scope.navigateToView('thanksForRegister');
            }
            else if ( response.data.status == 2) // email in use
            {
              alert("Email aready in use!");
            }
            else
            {
              alert("Error with credentials.  Please contact...!");
            }

              $scope.testData = response.data;
          } 
          else 
          {
            alert("Result is not JSON type");
          }
      });


    }
  }

  $scope.navigateToView = function(viewPage)
  {
    if ( viewPage != "")
    {
      $scope.user.userLastView = viewPage;
      $localstorage.setObject('user', $scope.user);
      $location.path(viewPage);

      // Forcing an update on an element.
      $scope.changeHeaderText($scope.viewTitles[viewPage]);// + " - " + $scope.user.userName);
      $scope.changeSubHeaderText("","");
      // console.log("View Page = " + viewPage); // debug
    }
  }



  $scope.changeHeaderText = function(text)
  {
    var viewTitleSpan = angular.element( document.querySelector( '#viewTitleSpan' ) );
    viewTitleSpan.text(text);
  }

  $scope.changeSubHeaderText = function(text,text2)
  {
    var viewSubTitleSpan = angular.element( document.querySelector( '#viewSubTitleSpan' ) );
    viewSubTitleSpan.text(text);

    var viewSubTitleSpan2 = angular.element( document.querySelector( '#viewSubTitleSpan2' ) );
    viewSubTitleSpan2.text(text2);
  }

  $scope.logout = function()
  {
    $scope.user = mainModel.resetUser();
    $scope.user.userLoggedIn = false;
    $localstorage.setObject('user', $scope.user);
    // console.log("Logout User : " + JSON.stringify($scope.user, null, 4)); // debug
    $window.location.reload();
  }

  $scope.authenticateUser = function(thisUser)
  {
    if ( thisUser != undefined) // TODO  Add in validate email format
    {

      $scope.loginLoading = true;
      dataService.loginUser(thisUser)
          .then(function(response) 
          {
            if (response != undefined && typeof response == "object") 
            {
                console.log("Controller : "  + JSON.stringify(response.data) );
              if ( response.data.status == 1)  //success
              {
                $scope.user.userSession = response.data.SessionID;
                $scope.user.userID = response.data.ID;
                $scope.user.userLoggedIn = true;
                $localstorage.setObject('user', $scope.user); // TODO  Create seperate method for saving objects

                $scope.getUserData();
                $scope.getAllChaptersSections();
                
              }
              else if ( response.data.status == 2) // email in use
              {
                $scope.loginLoading = false;
                alert("Email aready in use!");
              }
              else
              {
                $scope.loginLoading = false;
                alert("Error with credentials!");
              }
            } 
            else 
            {
              $scope.loginLoading = false;
              alert("Result is not JSON type");
            }
          });
    }
  }

  $scope.getUserData = function()
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

            $scope.loginLoading = false;
            $scope.navigateToView('rankselection');
          }
          else
          {
            alert("Result is not JSON type");
          }
    });
  }


  $scope.getAllChaptersSections = function()
  {
    dataService.getChapterSections($scope.user.userSession,0)
    .then(function(response) 
        {
          if (response != undefined && typeof response == "object") 
          {
              $scope.flashCardChapters = [];
              $scope.allChapterSections = [];
              var i = 0;
              response.data.forEach(function(chapter)
              {
                $scope.flashCardChapters[i] = {};
                $scope.flashCardChapters[i].name = "Chapter " + (i+1);//response.data[i].chapterTitle;
                $scope.flashCardChapters[i].desc = response.data[i].chapterTitle;
                $scope.flashCardChapters[i].index = response.data[i].chapterID;
                $scope.flashCardChapters[i].checked = false;
                

                $scope.allChapterSections[i] = {};
                $scope.allChapterSections[i].name = "CH. " + (i+1);
                $scope.allChapterSections[i].desc = chapter.chapterTitle;
                $scope.allChapterSections[i].index = chapter.chapterID;

                var j = 0;
                $scope.allChapterSections[i].sections = [];
                chapter.sections.forEach(function(section)
                  {
                    $scope.allChapterSections[i].sections[j] = {};
                    $scope.allChapterSections[i].sections[j].sectionID = section.sectionID;
                    $scope.allChapterSections[i].sections[j].sectionNumber = section.sectionNumber;
                    $scope.allChapterSections[i].sections[j].sectionTitle = section.sectionTitle;
                    j++;
                  });

                i++;
              });

              $localstorage.setObject('flashCardChapters', $scope.flashCardChapters);
              $localstorage.setObject('allChapterSections', $scope.allChapterSections);
          }
            else
            {
              alert("Result is not JSON type");
            }
      });
  }

  $scope.selectRank = function(rankid)
  {
    $scope.user.userRankID = rankid;
    $localstorage.setObject('user', $scope.user);
    $scope.navigateToView('home');
  }

  // SKIP LOGIN - testing
  $scope.skipLogin = function()
  {
    $scope.user.userID = 100;
    $scope.user.userLoggedIn = true;
    $scope.user.userName = "Skippy";
    $scope.user.userRankID = 1;
    $scope.user.userRole = 1;
    $scope.user.userProgress = 0;
    $scope.user.userLastView = "login";
    $scope.user.userBookMarks = {};
    $scope.user.userNotes = {};
    $scope.user.userFlashCardsMax = 25;
    $scope.user.userFlashCardFlagged = [];
    $scope.user.userHightlights = [];
    $scope.user.userSession = '1118721c-15df-475a-815c-799ddbcba264';
    $scope.user.userReadHandbook = 0;
    $scope.user.flashCardSelectedAmount = 25;
    $scope.user.chaptersSelected = [];

    $scope.navigateToView('rankselection');
  }

  // Spit out data to console
  $scope.consoleLogData = function()
  {
    console.log("User : " + JSON.stringify($scope.user, null, 4));
  }


  // Init
  if ( !$scope.intialized )
    {
      $scope.testData = "blah";
      $scope.flashCardisFlipped = false;
      $scope.pageBookmarked = false;
      $scope.flashCardFlagged = false;
      $scope.savedflashCardFlagged = false;
      $scope.pageNotes = "";
      $scope.pageNotesSaved = true;
      $scope.alertMessage = "";
      $scope.alertMessageClass = "bold-text";
      $scope.flashCardSelectedAmount = 25;
      $scope.notesOpen = false;
      $scope.navMenuMainOpen = [false,false,false,false,false];
      $scope.lastMenuItem = '';
      $scope.lastSubMenuItem = '';
      $scope.navSubMenuOpen = [false,false,false,false,false];
      $scope.lastGreenText = 0;
      $scope.loginLoading = false;
      $scope.navChapterMenuOpen = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
      

      // Value Objects
      $scope.user = mainModel.getUser();
      $scope.ranks = mainModel.getRanks();
      $scope.viewTitles = mainModel.getViewtitles();
      // $scope.flashCardChapters = mainModel.getFlashCardChapters();
      
      if ( $localstorage.getObject('user') != null)
      {
        $scope.user = $localstorage.getObject('user');
        // console.log("User : " + JSON.stringify($scope.user, null, 4)); // debug
        if ( $scope.user.userLoggedIn )
        {
          $scope.navigateToView($scope.user.userLastView);
        }
        else
        {
          $scope.navigateToView('login');
        }
      }
      $scope.intialized = true;
    }
});

// Local Storage
mainApp.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);

// Footer and Header
mainApp.directive('header', function () {
  return {
      restrict: 'A',
      transclude: true,
      scope: {},
      // replace: true,
      templateUrl: "View/headerView.html",
      controller: 'MainController'
  }
});

mainApp.directive('footer', function () {
  return {
      restrict: 'A',
      replace: true,
      templateUrl: "View/footerView.html",
      controller: 'MainController'
  }
});

// Range filter for progress bar
mainApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});