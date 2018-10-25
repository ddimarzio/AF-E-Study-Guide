// View config
mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {
       templateUrl: '../Views/homeView.html', controller: 'MainController'
    })
      .when('/login', {
       templateUrl: '../Views/loginView.html', controller: 'MainController'
    })
    .when('/flashcards', {
      templateUrl: '../Views/flashcardsView.html', controller: 'MainController'
    })
      .otherwise({
       redirectTo: '/login'
    });
  }]);