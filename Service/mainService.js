mainApp.service('dataService', ['$http', function ($http) {

    var urlBase = 'https://powertrainafttest.azurewebsites.net/';
    // var urlBase = 'http://rest-service.guides.spring.io/';

    this.registerUser = function(thisUser)
    {
        return $http({
            method: 'POST',
            url: 'https://powertrainafttest.azurewebsites.net/Account/Register',
            data: {
                'email': thisUser.userEmail,
                'username': thisUser.userName,
                'password': thisUser.userPassword
                }
            });

    }

    this.loginUser = function(thisUser)
    {
        return $http({
            method: 'POST',
            url: 'https://powertrainafttest.azurewebsites.net/Account/Login',
            data: {
                'username': thisUser.userEmail,
                'password': thisUser.userPassword
                }
            });
    }

    this.getUserData = function(userSession,userID)
    {
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/Account/GetData',
            data: {
                'SessionID' : userSession,
                'UserID' : userID
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

    this.getFlashCardStack = function(userSession,amount, chapters)
    {
        console.log("Request : " + userSession + " | " + amount + " | " + chapters );
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/Flashcard/GetStack',
            data: {
                'SessionID' : userSession,
                "amount" : amount,
                "chapters" : chapters
                }
        });
    }
}]);
