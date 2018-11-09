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
    .when('/practicetest', {
      templateUrl: 'View/practiceTestView.html', controller: 'MainController'
    })
    .when('/rankselection', {
      templateUrl: 'View/rankSelectionView.html', controller: 'MainController'
    })
    .when('/learningtools', {
      templateUrl: 'View/learningToolsView.html', controller: 'MainController'
    })
    .when('/resources', {
      templateUrl: 'View/resourcesView.html', controller: 'MainController'
    })
    .when('/handbook', {
      templateUrl: 'View/airmanHandbookView.html', controller: 'MainController'
    })
    .when('/register', {
      templateUrl: 'View/registerUserView.html', controller: 'MainController'
    })
    .when('/forgotPassword', {
      templateUrl: 'View/forgotPasswordView.html', controller: 'MainController'
    })
    .when('/thanksForRegister', {
      templateUrl: 'View/thanksForRegisteringView.html', controller: 'MainController'
    })
    
      .otherwise({
       redirectTo: '/login'
    });
  }]);