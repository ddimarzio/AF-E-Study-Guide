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

    // this.getUserFlaggedCards = function(userSession,)

    this.saveFlashCardMark = function(userSession,flashcardID)
    {
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/FlashCard/BookmarkFlashcard',
            data : {
                "SessionID":userSession,
                "FlashcardID":flashcardID
                }

        });
    }

    this.deleteFlashCardMark = function(userSession,flashcardID)
    {
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/FlashCard/DeleteFlashcardBookmark',
            data : {
                "SessionID":userSession,
                "FlashcardID":flashcardID
                }

        });
    }

    this.getFlashCardStack = function(userSession,amount, chapters, rank)
    {
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/Flashcard/GetStack',
            data: {
                'SessionID' : userSession,
                "amount" : amount,
                "chapters" : chapters,
                "rank" : rank
                }
        });
    }

    this.getUserFlaggedCards = function(userSession,userid)
    {
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/Flashcard/GetUserFlagged',
            data: {
                'SessionID' : userSession,
                "userID" : userid
                }
        });
    }

    this.getChapterSections = function(userSession,booktype)
    {
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/EReader/GetChapterSectionTitles',
            data: {
                'SessionID' : userSession,
                "booktype" : booktype
                }
        });
    }

    this.getEReaderPages = function(userSession,booktype,chapterid,sectionid)
    {
        return $http({
            method : 'POST',
            url : 'https://powertrainafttest.azurewebsites.net/EReader/GetSectionContent',
            data: {
                "SessionID" : userSession,
                "bookType" : booktype,
                "chapterID" : chapterid,
                "sectionID" : sectionid
                }
        });
    }

}]);
