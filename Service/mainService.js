mainApp.service('dataService', ['$http', function ($http) {

        var urlBase = 'http://rest-service.guides.spring.io/';

        this.getGreeting = function () 
        {
            return $http.get(urlBase + 'greeting');
        }

        this.getFlashCards = function()
        {
            // return $http.get(urlBase + 'greeting');
        }
    }]);
