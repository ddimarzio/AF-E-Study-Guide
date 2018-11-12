mainApp.service('dataService', ['$http', function ($http) {

    var urlBase = 'https://powertrainafttest.azurewebsites.net/';
    // var urlBase = 'http://rest-service.guides.spring.io/';

    this.registerUser = function()
    {
        
    }

    this.loginUser = function()
    {
        return $http({
            method: 'POST',
            url: 'https://powertrainafttest.azurewebsites.net/Account/Login',
            data: {
                'username': 'Don1',
                'password': 'test'
                }
            });
    }

    this.getGreeting = function () 
    {
        return $http({
            method:'GET',
            url: 'https://rest-service.guides.spring.io/greeting'
        });
    }

    this.getFlashCards = function()
    {
        // return $http.get(urlBase + 'greeting');
    }
}]);
