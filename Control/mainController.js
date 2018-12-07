var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate'] );

mainApp.controller('MainController', function($scope,$location,$window,$localstorage,$document,mainModel,dataService) {
 
  $scope.version = "Version 0.52";

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
  // ********************

  $scope.toggleMainMenu = function()
  {
    $scope.navMenuMainOpen[0] = !$scope.navMenuMainOpen[0];
  }

  $scope.closeMainMenu = function()
  {
    $scope.navMenuMainOpen[0] = false;
  }


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
      // confirmPasswordInput.setCustomValidity("Match!");
   
      // TODO  - Disable submit button and add loader
      dataService.registerUser(thisUser)
      .then(function(response) 
      {
          if (response != undefined && typeof response == "object") 
          {
              console.log("Controller : "  + JSON.stringify(response.data) );
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
      $scope.changeHeaderText($scope.viewTitles[viewPage] + " - " + $scope.user.userName);
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
    console.log("Logout User : " + JSON.stringify($scope.user, null, 4)); // debug
    $window.location.reload();
  }

  $scope.authenticateUser = function(thisUser)
  {
    if ( thisUser.userEmail == 'email@email.com' )
    {
      $scope.user.userName = thisUser.userName;
      $scope.user.userLoggedIn = true;
      $scope.navigateToView('rankselection');
    }
    else
    {
      $scope.user.userName = "Anon";
      $scope.user.userLoggedIn = false;
    };

    $localstorage.setObject('user', $scope.user); // TODO  Create seperate method for saving objects
  }

  $scope.selectRank = function(rankid)
  {
    $scope.user.userRankID = rankid;
    $localstorage.setObject('user', $scope.user);
    $scope.navigateToView('home');
  }

  // Init
  if ( !$scope.intialized )
    {
      $scope.testData = "blah";
      $scope.flashCardisFlipped = false;
      $scope.pageBookmarked = false;
      $scope.flashCardFlagged = false;
      $scope.pageNotes = "";
      $scope.pageNotesSaved = true;
      $scope.alertMessage = "";
      $scope.alertMessageClass = "bold-text";
      $scope.flashCardSelectedAmount = 25;
      $scope.notesOpen = false;
      $scope.navMenuMainOpen = [false,false,false,false,false];;
      $scope.lastMenuItem = '';
      $scope.lastSubMenuItem = '';
      $scope.navSubMenuOpen = [false,false,false,false,false];
      $scope.lastGreenText = 0;

      // Value Objects
      $scope.user = mainModel.getUser();
      $scope.ranks = mainModel.getRanks();
      $scope.viewTitles = mainModel.getViewtitles();
      $scope.flashCardChapters = mainModel.getFlashCardChapters();
      
      if ( $localstorage.getObject('user') != null)
      {
        $scope.user = $localstorage.getObject('user');
        console.log("User : " + JSON.stringify($scope.user, null, 4)); // debug
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