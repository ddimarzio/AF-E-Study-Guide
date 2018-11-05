var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate'] );

mainApp.controller('MainController', function($scope,$location,$window,$localstorage,mainModel) {
 
  $scope.version = "Version 0.21";

  $scope.navigateToView = function(viewPage)
  {
    if ( viewPage != "")
    {
      $scope.user.userLastView = viewPage;
      // $scope.currentViewTitle = $scope.viewTitles[viewPage];
      $localstorage.setObject('user', $scope.user);
      $location.path(viewPage);

      // Forcing an update on an element. TODO:  Create a seperate method to updated needed elements
      var viewTitleSpan = angular.element( document.querySelector( '#viewTitleSpan' ) );
      viewTitleSpan.text($scope.viewTitles[viewPage] + " - " + $scope.user.userName);

      console.log("View Page = " + viewPage); // debug
    }
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

    $localstorage.setObject('user', $scope.user);
  }

  $scope.selectRank = function(rankid)
  {
    console.log("selected : " + rankid); // debug
    $scope.user.userRankID = rankid;
    $localstorage.setObject('user', $scope.user);
    $scope.navigateToView('home');
  }

  // Init
  if ( !$scope.intialized )
    {
      $scope.testData = "blah";
      $scope.flashCardisFlipped = false;
      // Value Objects
      $scope.user = mainModel.getUser();
      $scope.ranks = mainModel.getRanks();
      $scope.viewTitles = mainModel.getViewtitles();

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
      
      console.log("init"); //debug
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

