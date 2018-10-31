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
        userProgress:75,
        userLastView:'login'
        };
    valObjects.getUser = function()
    {
        return user;
    }
    valObjects.resetUser = function()
    {
        user.userID = 0;
        user.userLoggedIn = false;
        user.userName = "anon";
        user.userRankID = 0;
        user.userRole = 0;
        user.userProgress = 75;
        user.userLastView = "login";

        return user;
    }

    // Ranks
    var ranks = [
        {rankID:0,rankAbrv:'SSgt',rankName:'Staff Sergeant',iconFile:'rankIcon-ssgt.png'},
        {rankID:1,rankAbrv:'TSgt',rankName:'Technical Sergeant',iconFile:'rankIcon-tsgt.png'},
        {rankID:2,rankAbrv:'MSgt',rankName:'Master Sergeant',iconFile:'rankIcon-msgt.png'},
        {rankID:3,rankAbrv:'SMSgt',rankName:'Senior Master Sergeant',iconFile:'rankIcon-smsgt.png'},
        {rankID:4,rankAbrv:'CMSgt',rankName:'Chief Master Sergeant',iconFile:'rankIcon-cmsgt.png'}
        ];
    valObjects.getRanks = function()
    {
        return ranks;
    }
    
    // View titles 
    var viewtitles = {
            login:'My Dashboard', 
            home:'My Dashboard',
            flashcards:'My Flashcards',
            rankselection:'Rank Selection',
            learningtools:'Learning Tools',
            resources:'Resources',
            handbook:'The Airman Handbook 1'
    };
    valObjects.getViewtitles = function()
    {
        return viewtitles;
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

    var handbook = {};
    // Test handbook pages
    var hbPages = [
        {
            chapter:1,
            page:1,
            content:"<div class='col hb-section-title'>Section  1B—Dawn  of  Flight,  Early  Days  of  Aviation,  First  Air  War  and  the  1920s  and  1930s  Airpower</div><div class='hb-image-wrap-left shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><div class='row'>        <div class='col-0 hb-title-square'></div>        <div class='col hb-title'>Air War in the Pacific</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.1</span>         Lorem ipsum dolor sit amet, eget tempor nec et sed, a aenean, eget cras vehicula cras neque orci, fusce sem luctus neque elit. Sapien volutpat odio elit, consectetuer massa excepteur velit nec, convallis placerat suspendisse vestibulum erat porta, placerat duis dui dui placerat, vestibulum sit. Volutpat porta pellentesque non, dui etiam integer quisque arcu, scelerisque id porttitor wisi id ipsum. Urna sodales urna, nulla praesent ipsa vestibulum. Aenean aliquip vel, neque sapien ultricies arcu quam risus, sed dolor ipsum mattis vivamus aliquam. Pellentesque rutrum aptent convallis, nullam eget metus pharetra etiam, at a urna morbi, montes vitae amet. Pellentesque litora odio iaculis ullamcorper blandit, eu enim nullam justo eget congue, orci purus vel et sagittis ipsum. Euismod dui lacus sit et, lorem in auctor convallis, nibh placerat auctor. Tempus felis massa, sed dictum potenti sit, nulla luctus elit, magna venenatis velit, fringilla adipiscing gravida est magnis nulla. Donec consectetuer elementum lacus diam vestibulum nascetur. Amet nec ac sem blandit ut, lacus volutpat rhoncus sapien similique, leo sed parturient in.</p><div class='hb-image-wrap-right shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.2</span>               Arcu cras sagittis eleifend erat, quam nonummy elementum, pede est ac pretium ipsum neque, iaculis morbi in condimentum ut. Volutpat pede, blandit non, lectus sollicitudin natoque, leo quis nullam nibh mauris tempus dolor. Augue porttitor fermentum proin tristique mattis, est et sed. Sed wisi donec congue vulputate neque sodales, vestibulum ut, tristique orci aliquam massa donec, arcu in nam, tortor duis. Gravida mollis, nullam pede molestiae pretium vestibulum, non parturient. Cum fringilla sit odio lobortis pretium, porttitor elit rutrum sollicitudin nisl donec.</p>"
                      
        },
        {
            chapter:1,
            page:2,
            content:"<div class='col hb-section-title'>Section  2B—Dawn  of  Flight,  Early  Days  of  Aviation,  First  Air  War  and  the  1920s  and  1930s  Airpower</div><div class='hb-image-wrap-left shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><div class='row'>        <div class='col-0 hb-title-square'></div>        <div class='col hb-title'>Air War in the Pacific</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.1</span>         Lorem ipsum dolor sit amet, eget tempor nec et sed, a aenean, eget cras vehicula cras neque orci, fusce sem luctus neque elit. Sapien volutpat odio elit, consectetuer massa excepteur velit nec, convallis placerat suspendisse vestibulum erat porta, placerat duis dui dui placerat, vestibulum sit. Volutpat porta pellentesque non, dui etiam integer quisque arcu, scelerisque id porttitor wisi id ipsum. Urna sodales urna, nulla praesent ipsa vestibulum. Aenean aliquip vel, neque sapien ultricies arcu quam risus, sed dolor ipsum mattis vivamus aliquam. Pellentesque rutrum aptent convallis, nullam eget metus pharetra etiam, at a urna morbi, montes vitae amet. Pellentesque litora odio iaculis ullamcorper blandit, eu enim nullam justo eget congue, orci purus vel et sagittis ipsum. Euismod dui lacus sit et, lorem in auctor convallis, nibh placerat auctor. Tempus felis massa, sed dictum potenti sit, nulla luctus elit, magna venenatis velit, fringilla adipiscing gravida est magnis nulla. Donec consectetuer elementum lacus diam vestibulum nascetur. Amet nec ac sem blandit ut, lacus volutpat rhoncus sapien similique, leo sed parturient in.</p><div class='hb-image-wrap-right shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.2</span>               Arcu cras sagittis eleifend erat, quam nonummy elementum, pede est ac pretium ipsum neque, iaculis morbi in condimentum ut. Volutpat pede, blandit non, lectus sollicitudin natoque, leo quis nullam nibh mauris tempus dolor. Augue porttitor fermentum proin tristique mattis, est et sed. Sed wisi donec congue vulputate neque sodales, vestibulum ut, tristique orci aliquam massa donec, arcu in nam, tortor duis. Gravida mollis, nullam pede molestiae pretium vestibulum, non parturient. Cum fringilla sit odio lobortis pretium, porttitor elit rutrum sollicitudin nisl donec.</p>"
                      
        }, {
            chapter:1,
            page:3,
            content:"<div class='col hb-section-title'>Section  3B—Dawn  of  Flight,  Early  Days  of  Aviation,  First  Air  War  and  the  1920s  and  1930s  Airpower</div><div class='hb-image-wrap-left shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><div class='row'>        <div class='col-0 hb-title-square'></div>        <div class='col hb-title'>Air War in the Pacific</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.1</span>         Lorem ipsum dolor sit amet, eget tempor nec et sed, a aenean, eget cras vehicula cras neque orci, fusce sem luctus neque elit. Sapien volutpat odio elit, consectetuer massa excepteur velit nec, convallis placerat suspendisse vestibulum erat porta, placerat duis dui dui placerat, vestibulum sit. Volutpat porta pellentesque non, dui etiam integer quisque arcu, scelerisque id porttitor wisi id ipsum. Urna sodales urna, nulla praesent ipsa vestibulum. Aenean aliquip vel, neque sapien ultricies arcu quam risus, sed dolor ipsum mattis vivamus aliquam. Pellentesque rutrum aptent convallis, nullam eget metus pharetra etiam, at a urna morbi, montes vitae amet. Pellentesque litora odio iaculis ullamcorper blandit, eu enim nullam justo eget congue, orci purus vel et sagittis ipsum. Euismod dui lacus sit et, lorem in auctor convallis, nibh placerat auctor. Tempus felis massa, sed dictum potenti sit, nulla luctus elit, magna venenatis velit, fringilla adipiscing gravida est magnis nulla. Donec consectetuer elementum lacus diam vestibulum nascetur. Amet nec ac sem blandit ut, lacus volutpat rhoncus sapien similique, leo sed parturient in.</p><div class='hb-image-wrap-right shadow'>        <img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'>        <div class='col hb-image-caption'>Inflating  the  Civil  War  balloon  Intrepid,  1862</div></div><p class='hb-p'>        <span class='hb-bold-text'>1.11.2</span>               Arcu cras sagittis eleifend erat, quam nonummy elementum, pede est ac pretium ipsum neque, iaculis morbi in condimentum ut. Volutpat pede, blandit non, lectus sollicitudin natoque, leo quis nullam nibh mauris tempus dolor. Augue porttitor fermentum proin tristique mattis, est et sed. Sed wisi donec congue vulputate neque sodales, vestibulum ut, tristique orci aliquam massa donec, arcu in nam, tortor duis. Gravida mollis, nullam pede molestiae pretium vestibulum, non parturient. Cum fringilla sit odio lobortis pretium, porttitor elit rutrum sollicitudin nisl donec.</p>"
                      
        }
    ];
    valObjects.handbookGetHBPage = function(num)
    {
        return hbPages[num];
    }

  return valObjects;
})