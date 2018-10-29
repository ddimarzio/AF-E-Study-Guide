// View config
mainApp.config(['$routeProvider', function($routeProvider, $scope) {
    $routeProvider
      .when('/home', {
       templateUrl: 'View/homeView.html', controller: 'MainController'
    })
      .when('/login', {
       templateUrl: 'View/loginView.html', controller: 'MainController'
    })
    .when('/flashcards', {
      templateUrl: 'View/flashcardsView.html', controller: 'MainController'
    })
    .when('/rankselection', {
      templateUrl: 'View/rankSelectionView.html', controller: 'MainController'
    })
      .otherwise({
       redirectTo: '/login'
    });
  }]);