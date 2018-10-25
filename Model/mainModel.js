mainApp.factory('mainModel',function()
{
    var valObjects = {}; 

    // User
    var user = {
        userID:0,
        userLoggedIn:false,
        userName:'Anon',
        userRankID:0,
        userRole:0,
        userLastView:'login'
        };
    valObjects.getUser = function()
    {
        return user;
    }

    // Ranks
    var ranks = [
        {rankID:0,rankAbrv:'SSgt',rankName:'Staff Sergeant'},
        {rankID:1,rankAbrv:'TSgt',rankName:'Technical Sergeant'},
        {rankID:2,rankAbrv:'MSgt',rankName:'Master Sergeant'},
        {rankID:3,rankAbrv:'SMSgt',rankName:'Senior Master Sergeant'},
        {rankID:4,rankAbrv:'CMSgt',rankName:'Chief Master Sergeant'}
        ];
    valObjects.getRanks = function()
    {
        return ranks;
    }
    
    // Test Flash Cards
    var flashCards = [
        {
            question:"This is the first question : Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies dictum ipsum vel, feugiat scelerisque, arcu nullam.",
            answers:['Answer 1-1','Answer 1-2','Answer 1-3 - correct','Answer 1-4'],
            correctAnswer:3
        },
        {
            question:"This is the second question : Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 2-1','Answer 2-2 - correct','Answer 2-3','Answer 2-4'],
            correctAnswer:2
        },
        {
            question:"This is the third question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        }
      ];
    valObjects.getFlashCards = function()
    {
        return flashCards;
    }

  return valObjects;
})