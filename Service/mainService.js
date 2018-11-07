mainApp.service('dataService', ['$http', function ($http) {

//     POST http://powertrainafttest.azurewebsites.net/Account/Login HTTP/1.1
// content-type: application/json

// {
//   "username":"Don1",
//   "password":"test"
// }
        var urlBase = 'https://powertrainafttest.azurewebsites.net/';
        // var urlBase = 'http://rest-service.guides.spring.io/';

        this.registerUser = function()
        {
            
        }

        this.loginUser = function()
        {
            return $http({
                method: 'POST',
                url: urlBase + 'Account/Login',
                data: {
                  username: 'Don1',
                  password: 'test'
                }
              });
            // return $http.post(urlBase + 'Account/Login');
        }

        this.getGreeting = function () 
        {
            return $http.get('http://rest-service.guides.spring.io/greeting');
        }

        this.getFlashCards = function()
        {
            // return $http.get(urlBase + 'greeting');
        }
    }]);
