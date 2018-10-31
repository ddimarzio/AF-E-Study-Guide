var mainApp = angular.module('mainApp', ['ngRoute'] );

mainApp.controller('MainController', function($scope,$location,$window,$localstorage,mainModel,$sce) {
 
  $scope.version = "Version 0.16";
  $scope.currentPageContent = $sce.trustAsHtml("<div class='col hb-section-title'>Section  1B—Dawn  of  Flight,  Early  Days  of  Aviation,  First  Air  War  and  the  1920s  and  1930s  Airpower</div><div class='hb-image-wrap-left shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><div class='row'>        <div class='col-0 hb-title-square'></div>        <div class='col hb-title'>Air War in the Pacific</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.1</span>         Lorem ipsum dolor sit amet, eget tempor nec et sed, a aenean, eget cras vehicula cras neque orci, fusce sem luctus neque elit. Sapien volutpat odio elit, consectetuer massa excepteur velit nec, convallis placerat suspendisse vestibulum erat porta, placerat duis dui dui placerat, vestibulum sit. Volutpat porta pellentesque non, dui etiam integer quisque arcu, scelerisque id porttitor wisi id ipsum. Urna sodales urna, nulla praesent ipsa vestibulum. Aenean aliquip vel, neque sapien ultricies arcu quam risus, sed dolor ipsum mattis vivamus aliquam. Pellentesque rutrum aptent convallis, nullam eget metus pharetra etiam, at a urna morbi, montes vitae amet. Pellentesque litora odio iaculis ullamcorper blandit, eu enim nullam justo eget congue, orci purus vel et sagittis ipsum. Euismod dui lacus sit et, lorem in auctor convallis, nibh placerat auctor. Tempus felis massa, sed dictum potenti sit, nulla luctus elit, magna venenatis velit, fringilla adipiscing gravida est magnis nulla. Donec consectetuer elementum lacus diam vestibulum nascetur. Amet nec ac sem blandit ut, lacus volutpat rhoncus sapien similique, leo sed parturient in.</p><div class='hb-image-wrap-right shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.2</span>               Arcu cras sagittis eleifend erat, quam nonummy elementum, pede est ac pretium ipsum neque, iaculis morbi in condimentum ut. Volutpat pede, blandit non, lectus sollicitudin natoque, leo quis nullam nibh mauris tempus dolor. Augue porttitor fermentum proin tristique mattis, est et sed. Sed wisi donec congue vulputate neque sodales, vestibulum ut, tristique orci aliquam massa donec, arcu in nam, tortor duis. Gravida mollis, nullam pede molestiae pretium vestibulum, non parturient. Cum fringilla sit odio lobortis pretium, porttitor elit rutrum sollicitudin nisl donec.</p>");
  

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

