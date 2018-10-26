var mainApp = angular.module('mainApp', ['ngRoute'] );

mainApp.controller('MainController', function($scope,$location,$window,$localstorage,mainModel) {
 
  $scope.version = "Version 0.05";
  
  $scope.navigateToView = function(viewPage)
  {
    $scope.user.userLastView = viewPage;
    $localstorage.setObject('user', $scope.user);
    $location.path(viewPage);
    console.log("View Page = " + viewPage); // debug
  }

  $scope.logout = function()
  {
    $scope.user = mainModel.resetUser();
    $localstorage.setObject('user', $scope.user);
    console.log("Logout User : " + JSON.stringify($scope.user, null, 4)); // debug
    $scope.navigateToView('login');
  }

  $scope.authenticateUser = function(thisUser)
  {
    if ( thisUser.userEmail == 'email@email.com' )
    {
      $scope.user.userName = thisUser.userName;
      $scope.user.userLoggedIn = true;
      $scope.navigateToView('home');
    }
    else
    {
      $scope.user.userName = "Anon";
      $scope.user.userLoggedIn = false;
    };

    $localstorage.setObject('user', $scope.user);
  }

  // Init
  if ( !$scope.intialized )
    {
      $scope.testData = "blah";

      // Value Objects
      $scope.user = mainModel.getUser();
      $scope.ranks = mainModel.getRanks();

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
      replace: true,
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