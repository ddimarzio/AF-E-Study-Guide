mainApp.service('dataService', ['$http', function ($http,$location) {

    var urlBase = window.location.host;

    this.registerUser = function(thisUser)
    {
        return $http({
            method: 'POST',
            url: 'https://' + urlBase + '/Account/Register',
            data: {
                'email': thisUser.userEmail,
                'username': thisUser.userName,
                'password': thisUser.userPassword
                }
            });

    }

    this.loginUser = function(thisUser)
    {
        console.log("host : " + window.location.host);

        return $http({
            method: 'POST',
            url: 'https://' + urlBase + '/Account/Login',
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
            url : 'https://' + urlBase + '/Account/GetData',
            data: {
                'SessionID' : userSession,
                'UserID' : userID
                }
        });
    }

    this.saveFlashCardMark = function(userSession,flashcardID)
    {
        return $http({
            method : 'POST',
            url : 'https://' + urlBase + '/FlashCard/BookmarkFlashcard',
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
            url : 'https://' + urlBase + '/FlashCard/DeleteFlashcardBookmark',
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
            url : 'https://' + urlBase + '/Flashcard/GetStack',
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
            url : 'https://' + urlBase + '/Flashcard/GetUserFlagged',
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
            url : 'https://' + urlBase + '/EReader/GetChapterSectionTitles',
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
            url : 'https://' + urlBase + '/EReader/GetSectionContent',
            data: {
                "SessionID" : userSession,
                "bookType" : booktype,
                "chapterID" : chapterid,
                "sectionID" : sectionid
                }
        });
    }

}]);
