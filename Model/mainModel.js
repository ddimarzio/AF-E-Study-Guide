mainApp.factory('mainModel',function()
{
    var valObjects = {}; 

    // TODO : Change arrays to objects!
    // User
    var user = {
        userID:0,
        userLoggedIn:false,
        userName:'Anon',
        userRankID:0,
        userRole:0,
        userProgress:0,
        userLastView:'login',
        userBookMarks:[],
        userNotes:{},
        userFlashCardsMax:25,
        userFlashCardFlagged:[],
        userHightlights:[],
        userSession:'',
        userReadHandbook:0,
        flashCardSelectedAmount:25,
        chaptersSelected:[]
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
        user.userProgress = 0;
        user.userLastView = "login";
        user.userBookMarks = [];
        user.userNotes = {};
        user.userFlashCardsMax = 25;
        user.userFlashCardFlagged = [];
        user.userHightlights = [];
        user.userSession = '';
        user.userReadHandbook = 0;
        flashCardSelectedAmount = 25;
        chaptersSelected = [];
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
            handbook:'The Air Force Handbook 1',
            practicetest:'Practice Test',
            register:'Register',
            forgotPassword:'Forgot Password',
            thanksForRegister:'Thanks for registering',
            flashcardselection:'Flashcards Selection',
            brownbook:'Little Brown Book',
            bluebook:'Little Blue Book',
            savedBookmarks:'Saved Bookmarks',
            savedNotes:'Saved Notes',
            savedFlashcards:'Saved Flashcards'
    };
    valObjects.getViewtitles = function()
    {
        return viewtitles;
    }

    // Test Questions
    var testQuestions = [
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
        },
        {
            question:"This is the forth question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        },
        {
            question:"This is the fith question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        },
        {
            question:"This is the sixth question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        },
        {
            question:"This is the 7 question : Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies dictum ipsum vel, feugiat scelerisque, arcu nullam.",
            answers:['Answer 1-1','Answer 1-2','Answer 1-3 - correct','Answer 1-4'],
            correctAnswer:3
        },
        {
            question:"This is the 8 question : Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 2-1','Answer 2-2 - correct','Answer 2-3','Answer 2-4'],
            correctAnswer:2
        },
        {
            question:"This is the 9 question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        },
        {
            question:"This is the 10 question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        },
        {
            question:"This is the 11 question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        },
        {
            question:"This is the 12 question :  Lorem ipsum dolor sit amet, laoreet etiam convallis metus,tristique sed placerat consequat, purus vestibulum at magna pede vivamus,  mauris pellentesque, pellentesque eget tortor. Aliquam pharetra, et sed ultricies mauris  adipiscing amet. Nulla nunc feugiat ornare sit eu nulla. Ac vestibulum enim fermentum a 4quisque feugiat, volutpat amet ultricies",
            answers:['Answer 3-1','Answer 3-2','Answer 3-3','Answer 3-4 - correct'],
            correctAnswer:4
        }
      ];
    valObjects.getTestQuestions = function()
    {
        return testQuestions;
    }

    var handbook = {
        maxPages:4
    };
    valObjects.getMaxPages = function()
    {
        return hbPages.length;
    };

    // Test handbook pages
    var hbPages = [
        {
            indx:'hb1',
            chapter:1,
            section:1,
            page:1,
            title:'Overview',
            content:"<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>"
        },
        {
            indx:'hb2',
            chapter:1,
            section:1,
            page:2,
            title:'Dawn of Flight',
            content:"<div class='col hb-section-title'>Section 1B—Dawn of Flight, Early Days of Aviation, First Air War and the 1920s and 1930s Airpower</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic2.jpg' class='col p-0'><div class='col hb-image-caption'>Inflating the Civil War balloon Intrepid, 1862</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.2 The Dawn of Flight:</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.1</span>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p><p class='hb-p'><span class='hb-bold-text'>1.2.2</span>In September 1861, a “Balloon Corps” provided aerial observation for the Union Army during the American Civil War. However, the early balloons proved fragile, vulnerable to weather, and of limited value.</p><p class='hb-p'><span class='hb-bold-text'>1.2.3</span>Aviation languished in the United States, but in Europe, balloons, gliders, and aerodynamics advanced rapidly. By 1853, Britain’s Sir George Cayley created a glider with fixed wings, cambered airfoil, and horizontal and vertical stabilizers. Continuing Cayley’s work, German engineer Otto Lilienthal produced flying machines similar to today’s hang gliders. From 1891 until his death five years later, Lilienthal greatly advanced aerodynamic theory. The publicity generated by Lilienthal spurred on imaginative people on both sides of the Atlantic, including Orville and Wilbur Wright.</p>"
        }, 
        {
            indx:'hb3',
            chapter:1,
            section:1,
            page:3,
            title:'Dawn of Flight',
            content:"<p class='hb-p'><span class='hb-bold-text'>1.2.4.</span>The Wrights furthered Lilienthal’s experiments with the assistance of American Octave Chanute, whose book, Progress in Flying Machines, provided their foundation in aeronautics. From 1900 to 1902, the Wrights conducted more than 1,000 glides from Kill Devil Hills near Kitty Hawk, North Carolina. After perfecting wing warping, elevators and rudders, and a water-cooled engine, they attempted the first powered flight on 14 December 1903. On that try, the aircraft stalled upon takeoff and crashed three seconds later. Success came at 10:35, on 17 December 1903, when Orville Wright flew 120 feet in 12 seconds. Alternating pilot duties, the brothers made three more flights with Wilbur flying 852 feet and staying aloft 59 seconds on the fourth attempt.</p><div class='hb-image-wrap-right shadow'><img src='/Assets/images/handbook/handbook-pic3.jpg' class='col p-0'><div class='col hb-image-caption'>The enlisted men of the 1908 Aeronautical Division Left to right (back row), Pfc. Vernon L. Bridge. Pfc. Charles De Kim, Pvt. Eldred O. Eldred; (middle row) Pvt. Stewart K. Rosenburger, Corporal Edward Ward, Pvt. Cecil R. Colle, Pvt. William E. McConnell.  Seated are Pvt. John Crotty (left) and Pvt. Benjamin Schmidt.</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.5.</span>American military authorities rejected the Wrights’ flyer, reacting in part to the highly publicized failure of Samuel P. Langley’s steam-powered Aerodrome in October 1903. Although a highly respected scientist and Secretary of the Smithsonian Institution, Langley and the Army were subjected to public ridicule and Congressional criticism for the “waste” of a $50,000 government grant. Only when President Theodore Roosevelt intervened was an aeronautical division established in the United States Army’s Signal Corps on 1 August 1907.</p><p class='hb-p'><span class='hb-bold-text'>1.2.6.</span>With the establishment of an aeronautical division the army was in possession of several balloons. The Army required trained enlisted men to conduct balloon inflations and effect necessary repairs. Effective 2 July 1907, Eddy Ward and Jason Barrett reported to the Leo Stevens’ balloon factory in New York City. They would become the first enlisted men assigned to the Signal Corps’ small Aeronautical Division, which in time evolved into the United States Air Force enlisted corps.</p><p class='hb-p'><span class='hb-bold-text'>1.2.7.</span>When Ward and Barrett reported, the division did not officially exist. The Army had disbanded the minuscule Civil War balloon service in 1863, and the corps’ attempts to revive military aviation met with little success. At the balloon factory, the two men were schooled in the rudiments of fabric handling, folding, and stitching; in the manufacturing of buoyant gases; and in the inflation and control of the Army’s “aircraft.”</p>"
        }, 
        {
            indx:'hb4',
            chapter:1,
            section:1,
            page:4,
            title:'The Early Days of the United States Army Aviation (1907-1917)',
            content:"<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>"
        },
        {
            indx:'hb5',
            chapter:1,
            section:1,
            page:5,
            title:'Overview',
            content:"<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>"
        },
        {
            indx:'hb6',
            chapter:1,
            section:1,
            page:6,
            title:'Dawn of Flight',
            content:"<div class='col hb-section-title'>Section 1B—Dawn of Flight, Early Days of Aviation, First Air War and the 1920s and 1930s Airpower</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic2.jpg' class='col p-0'><div class='col hb-image-caption'>Inflating the Civil War balloon Intrepid, 1862</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.2 The Dawn of Flight:</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.1</span>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p><p class='hb-p'><span class='hb-bold-text'>1.2.2</span>In September 1861, a “Balloon Corps” provided aerial observation for the Union Army during the American Civil War. However, the early balloons proved fragile, vulnerable to weather, and of limited value.</p><p class='hb-p'><span class='hb-bold-text'>1.2.3</span>Aviation languished in the United States, but in Europe, balloons, gliders, and aerodynamics advanced rapidly. By 1853, Britain’s Sir George Cayley created a glider with fixed wings, cambered airfoil, and horizontal and vertical stabilizers. Continuing Cayley’s work, German engineer Otto Lilienthal produced flying machines similar to today’s hang gliders. From 1891 until his death five years later, Lilienthal greatly advanced aerodynamic theory. The publicity generated by Lilienthal spurred on imaginative people on both sides of the Atlantic, including Orville and Wilbur Wright.</p>"
        }, 
        {
            indx:'hb7',
            chapter:1,
            section:1,
            page:7,
            title:'Dawn of Flight',
            content:"<p class='hb-p'><span class='hb-bold-text'>1.2.4.</span>The Wrights furthered Lilienthal’s experiments with the assistance of American Octave Chanute, whose book, Progress in Flying Machines, provided their foundation in aeronautics. From 1900 to 1902, the Wrights conducted more than 1,000 glides from Kill Devil Hills near Kitty Hawk, North Carolina. After perfecting wing warping, elevators and rudders, and a water-cooled engine, they attempted the first powered flight on 14 December 1903. On that try, the aircraft stalled upon takeoff and crashed three seconds later. Success came at 10:35, on 17 December 1903, when Orville Wright flew 120 feet in 12 seconds. Alternating pilot duties, the brothers made three more flights with Wilbur flying 852 feet and staying aloft 59 seconds on the fourth attempt.</p><div class='hb-image-wrap-right shadow'><img src='/Assets/images/handbook/handbook-pic3.jpg' class='col p-0'><div class='col hb-image-caption'>The enlisted men of the 1908 Aeronautical Division Left to right (back row), Pfc. Vernon L. Bridge. Pfc. Charles De Kim, Pvt. Eldred O. Eldred; (middle row) Pvt. Stewart K. Rosenburger, Corporal Edward Ward, Pvt. Cecil R. Colle, Pvt. William E. McConnell.  Seated are Pvt. John Crotty (left) and Pvt. Benjamin Schmidt.</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.5.</span>American military authorities rejected the Wrights’ flyer, reacting in part to the highly publicized failure of Samuel P. Langley’s steam-powered Aerodrome in October 1903. Although a highly respected scientist and Secretary of the Smithsonian Institution, Langley and the Army were subjected to public ridicule and Congressional criticism for the “waste” of a $50,000 government grant. Only when President Theodore Roosevelt intervened was an aeronautical division established in the United States Army’s Signal Corps on 1 August 1907.</p><p class='hb-p'><span class='hb-bold-text'>1.2.6.</span>With the establishment of an aeronautical division the army was in possession of several balloons. The Army required trained enlisted men to conduct balloon inflations and effect necessary repairs. Effective 2 July 1907, Eddy Ward and Jason Barrett reported to the Leo Stevens’ balloon factory in New York City. They would become the first enlisted men assigned to the Signal Corps’ small Aeronautical Division, which in time evolved into the United States Air Force enlisted corps.</p><p class='hb-p'><span class='hb-bold-text'>1.2.7.</span>When Ward and Barrett reported, the division did not officially exist. The Army had disbanded the minuscule Civil War balloon service in 1863, and the corps’ attempts to revive military aviation met with little success. At the balloon factory, the two men were schooled in the rudiments of fabric handling, folding, and stitching; in the manufacturing of buoyant gases; and in the inflation and control of the Army’s “aircraft.”</p>"
        }, 
        {
            indx:'hb8',
            chapter:1,
            section:1,
            page:8,
            title:'The Early Days of the United States Army Aviation (1907-1917)',
            content:"<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>"
        },
        {
            indx:'hb9',
            chapter:1,
            section:1,
            page:9,
            title:'Dawn of Flight',
            content:"<p class='hb-p'><span class='hb-bold-text'>1.2.4.</span>The Wrights furthered Lilienthal’s experiments with the assistance of American Octave Chanute, whose book, Progress in Flying Machines, provided their foundation in aeronautics. From 1900 to 1902, the Wrights conducted more than 1,000 glides from Kill Devil Hills near Kitty Hawk, North Carolina. After perfecting wing warping, elevators and rudders, and a water-cooled engine, they attempted the first powered flight on 14 December 1903. On that try, the aircraft stalled upon takeoff and crashed three seconds later. Success came at 10:35, on 17 December 1903, when Orville Wright flew 120 feet in 12 seconds. Alternating pilot duties, the brothers made three more flights with Wilbur flying 852 feet and staying aloft 59 seconds on the fourth attempt.</p><div class='hb-image-wrap-right shadow'><img src='/Assets/images/handbook/handbook-pic3.jpg' class='col p-0'><div class='col hb-image-caption'>The enlisted men of the 1908 Aeronautical Division Left to right (back row), Pfc. Vernon L. Bridge. Pfc. Charles De Kim, Pvt. Eldred O. Eldred; (middle row) Pvt. Stewart K. Rosenburger, Corporal Edward Ward, Pvt. Cecil R. Colle, Pvt. William E. McConnell.  Seated are Pvt. John Crotty (left) and Pvt. Benjamin Schmidt.</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.5.</span>American military authorities rejected the Wrights’ flyer, reacting in part to the highly publicized failure of Samuel P. Langley’s steam-powered Aerodrome in October 1903. Although a highly respected scientist and Secretary of the Smithsonian Institution, Langley and the Army were subjected to public ridicule and Congressional criticism for the “waste” of a $50,000 government grant. Only when President Theodore Roosevelt intervened was an aeronautical division established in the United States Army’s Signal Corps on 1 August 1907.</p><p class='hb-p'><span class='hb-bold-text'>1.2.6.</span>With the establishment of an aeronautical division the army was in possession of several balloons. The Army required trained enlisted men to conduct balloon inflations and effect necessary repairs. Effective 2 July 1907, Eddy Ward and Jason Barrett reported to the Leo Stevens’ balloon factory in New York City. They would become the first enlisted men assigned to the Signal Corps’ small Aeronautical Division, which in time evolved into the United States Air Force enlisted corps.</p><p class='hb-p'><span class='hb-bold-text'>1.2.7.</span>When Ward and Barrett reported, the division did not officially exist. The Army had disbanded the minuscule Civil War balloon service in 1863, and the corps’ attempts to revive military aviation met with little success. At the balloon factory, the two men were schooled in the rudiments of fabric handling, folding, and stitching; in the manufacturing of buoyant gases; and in the inflation and control of the Army’s “aircraft.”</p>"
        }, 
        {
            indx:'hb10',
            chapter:1,
            section:1,
            page:10,
            title:'The Early Days of the United States Army Aviation (1907-1917)',
            content:"<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>"
        }
    ];
    
    valObjects.handbookGetHBPage = function(num)
    {
        return hbPages[num];
    };

   // Test brownBook pages
    var brownBookPages = [
    {
        indx:'brb1',
        chapter:1,
        section:1,
        page:1,
        title:'Overview',
        content:"<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>"
    },
    {
        indx:'brb2',
        chapter:1,
        section:1,
        page:2,
        title:'Dawn of Flight',
        content:"<div class='col hb-section-title'>Section 1B—Dawn of Flight, Early Days of Aviation, First Air War and the 1920s and 1930s Airpower</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic2.jpg' class='col p-0'><div class='col hb-image-caption'>Inflating the Civil War balloon Intrepid, 1862</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.2 The Dawn of Flight:</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.1</span>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p><p class='hb-p'><span class='hb-bold-text'>1.2.2</span>In September 1861, a “Balloon Corps” provided aerial observation for the Union Army during the American Civil War. However, the early balloons proved fragile, vulnerable to weather, and of limited value.</p><p class='hb-p'><span class='hb-bold-text'>1.2.3</span>Aviation languished in the United States, but in Europe, balloons, gliders, and aerodynamics advanced rapidly. By 1853, Britain’s Sir George Cayley created a glider with fixed wings, cambered airfoil, and horizontal and vertical stabilizers. Continuing Cayley’s work, German engineer Otto Lilienthal produced flying machines similar to today’s hang gliders. From 1891 until his death five years later, Lilienthal greatly advanced aerodynamic theory. The publicity generated by Lilienthal spurred on imaginative people on both sides of the Atlantic, including Orville and Wilbur Wright.</p>"
    }, 
    {
        indx:'brb3',
        chapter:1,
        section:1,
        page:3,
        title:'Dawn of Flight',
        content:"<p class='hb-p'><span class='hb-bold-text'>1.2.4.</span>The Wrights furthered Lilienthal’s experiments with the assistance of American Octave Chanute, whose book, Progress in Flying Machines, provided their foundation in aeronautics. From 1900 to 1902, the Wrights conducted more than 1,000 glides from Kill Devil Hills near Kitty Hawk, North Carolina. After perfecting wing warping, elevators and rudders, and a water-cooled engine, they attempted the first powered flight on 14 December 1903. On that try, the aircraft stalled upon takeoff and crashed three seconds later. Success came at 10:35, on 17 December 1903, when Orville Wright flew 120 feet in 12 seconds. Alternating pilot duties, the brothers made three more flights with Wilbur flying 852 feet and staying aloft 59 seconds on the fourth attempt.</p><div class='hb-image-wrap-right shadow'><img src='/Assets/images/handbook/handbook-pic3.jpg' class='col p-0'><div class='col hb-image-caption'>The enlisted men of the 1908 Aeronautical Division Left to right (back row), Pfc. Vernon L. Bridge. Pfc. Charles De Kim, Pvt. Eldred O. Eldred; (middle row) Pvt. Stewart K. Rosenburger, Corporal Edward Ward, Pvt. Cecil R. Colle, Pvt. William E. McConnell.  Seated are Pvt. John Crotty (left) and Pvt. Benjamin Schmidt.</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.5.</span>American military authorities rejected the Wrights’ flyer, reacting in part to the highly publicized failure of Samuel P. Langley’s steam-powered Aerodrome in October 1903. Although a highly respected scientist and Secretary of the Smithsonian Institution, Langley and the Army were subjected to public ridicule and Congressional criticism for the “waste” of a $50,000 government grant. Only when President Theodore Roosevelt intervened was an aeronautical division established in the United States Army’s Signal Corps on 1 August 1907.</p><p class='hb-p'><span class='hb-bold-text'>1.2.6.</span>With the establishment of an aeronautical division the army was in possession of several balloons. The Army required trained enlisted men to conduct balloon inflations and effect necessary repairs. Effective 2 July 1907, Eddy Ward and Jason Barrett reported to the Leo Stevens’ balloon factory in New York City. They would become the first enlisted men assigned to the Signal Corps’ small Aeronautical Division, which in time evolved into the United States Air Force enlisted corps.</p><p class='hb-p'><span class='hb-bold-text'>1.2.7.</span>When Ward and Barrett reported, the division did not officially exist. The Army had disbanded the minuscule Civil War balloon service in 1863, and the corps’ attempts to revive military aviation met with little success. At the balloon factory, the two men were schooled in the rudiments of fabric handling, folding, and stitching; in the manufacturing of buoyant gases; and in the inflation and control of the Army’s “aircraft.”</p>"
    }, 
    {
        indx:'brb4',
        chapter:1,
        section:1,
        page:4,
        title:'The Early Days of the United States Army Aviation (1907-1917)',
        content:"<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>"
    },
    {
        indx:'brb5',
        chapter:1,
        section:1,
        page:5,
        title:'Overview',
        content:"<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>"
    },
    {
        indx:'brb6',
        chapter:1,
        section:1,
        page:6,
        title:'Dawn of Flight',
        content:"<div class='col hb-section-title'>Section 1B—Dawn of Flight, Early Days of Aviation, First Air War and the 1920s and 1930s Airpower</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic2.jpg' class='col p-0'><div class='col hb-image-caption'>Inflating the Civil War balloon Intrepid, 1862</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.2 The Dawn of Flight:</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.1</span>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p><p class='hb-p'><span class='hb-bold-text'>1.2.2</span>In September 1861, a “Balloon Corps” provided aerial observation for the Union Army during the American Civil War. However, the early balloons proved fragile, vulnerable to weather, and of limited value.</p><p class='hb-p'><span class='hb-bold-text'>1.2.3</span>Aviation languished in the United States, but in Europe, balloons, gliders, and aerodynamics advanced rapidly. By 1853, Britain’s Sir George Cayley created a glider with fixed wings, cambered airfoil, and horizontal and vertical stabilizers. Continuing Cayley’s work, German engineer Otto Lilienthal produced flying machines similar to today’s hang gliders. From 1891 until his death five years later, Lilienthal greatly advanced aerodynamic theory. The publicity generated by Lilienthal spurred on imaginative people on both sides of the Atlantic, including Orville and Wilbur Wright.</p>"
    }, 
    {
        indx:'brb7',
        chapter:1,
        section:1,
        page:7,
        title:'Dawn of Flight',
        content:"<p class='hb-p'><span class='hb-bold-text'>1.2.4.</span>The Wrights furthered Lilienthal’s experiments with the assistance of American Octave Chanute, whose book, Progress in Flying Machines, provided their foundation in aeronautics. From 1900 to 1902, the Wrights conducted more than 1,000 glides from Kill Devil Hills near Kitty Hawk, North Carolina. After perfecting wing warping, elevators and rudders, and a water-cooled engine, they attempted the first powered flight on 14 December 1903. On that try, the aircraft stalled upon takeoff and crashed three seconds later. Success came at 10:35, on 17 December 1903, when Orville Wright flew 120 feet in 12 seconds. Alternating pilot duties, the brothers made three more flights with Wilbur flying 852 feet and staying aloft 59 seconds on the fourth attempt.</p><div class='hb-image-wrap-right shadow'><img src='/Assets/images/handbook/handbook-pic3.jpg' class='col p-0'><div class='col hb-image-caption'>The enlisted men of the 1908 Aeronautical Division Left to right (back row), Pfc. Vernon L. Bridge. Pfc. Charles De Kim, Pvt. Eldred O. Eldred; (middle row) Pvt. Stewart K. Rosenburger, Corporal Edward Ward, Pvt. Cecil R. Colle, Pvt. William E. McConnell.  Seated are Pvt. John Crotty (left) and Pvt. Benjamin Schmidt.</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.5.</span>American military authorities rejected the Wrights’ flyer, reacting in part to the highly publicized failure of Samuel P. Langley’s steam-powered Aerodrome in October 1903. Although a highly respected scientist and Secretary of the Smithsonian Institution, Langley and the Army were subjected to public ridicule and Congressional criticism for the “waste” of a $50,000 government grant. Only when President Theodore Roosevelt intervened was an aeronautical division established in the United States Army’s Signal Corps on 1 August 1907.</p><p class='hb-p'><span class='hb-bold-text'>1.2.6.</span>With the establishment of an aeronautical division the army was in possession of several balloons. The Army required trained enlisted men to conduct balloon inflations and effect necessary repairs. Effective 2 July 1907, Eddy Ward and Jason Barrett reported to the Leo Stevens’ balloon factory in New York City. They would become the first enlisted men assigned to the Signal Corps’ small Aeronautical Division, which in time evolved into the United States Air Force enlisted corps.</p><p class='hb-p'><span class='hb-bold-text'>1.2.7.</span>When Ward and Barrett reported, the division did not officially exist. The Army had disbanded the minuscule Civil War balloon service in 1863, and the corps’ attempts to revive military aviation met with little success. At the balloon factory, the two men were schooled in the rudiments of fabric handling, folding, and stitching; in the manufacturing of buoyant gases; and in the inflation and control of the Army’s “aircraft.”</p>"
    }, 
    {
        indx:'brb8',
        chapter:1,
        section:1,
        page:8,
        title:'The Early Days of the United States Army Aviation (1907-1917)',
        content:"<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>"
    }
];

valObjects.brownBookGetPage = function(num)
{
    return brownBookPages[num];
};

valObjects.getMaxBBPages = function()
{
    return brownBookPages.length;
};

// Test blueBook pages
var blueBookPages = [
    {
        indx:'blb1',
        chapter:1,
        section:1,
        page:1,
        title:'Overview',
        content:"<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>"
    },
    {
        indx:'blb2',
        chapter:1,
        section:1,
        page:2,
        title:'Dawn of Flight',
        content:"<div class='col hb-section-title'>Section 1B—Dawn of Flight, Early Days of Aviation, First Air War and the 1920s and 1930s Airpower</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic2.jpg' class='col p-0'><div class='col hb-image-caption'>Inflating the Civil War balloon Intrepid, 1862</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.2 The Dawn of Flight:</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.1</span>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p><p class='hb-p'><span class='hb-bold-text'>1.2.2</span>In September 1861, a “Balloon Corps” provided aerial observation for the Union Army during the American Civil War. However, the early balloons proved fragile, vulnerable to weather, and of limited value.</p><p class='hb-p'><span class='hb-bold-text'>1.2.3</span>Aviation languished in the United States, but in Europe, balloons, gliders, and aerodynamics advanced rapidly. By 1853, Britain’s Sir George Cayley created a glider with fixed wings, cambered airfoil, and horizontal and vertical stabilizers. Continuing Cayley’s work, German engineer Otto Lilienthal produced flying machines similar to today’s hang gliders. From 1891 until his death five years later, Lilienthal greatly advanced aerodynamic theory. The publicity generated by Lilienthal spurred on imaginative people on both sides of the Atlantic, including Orville and Wilbur Wright.</p>"
    }, 
    {
        indx:'blb3',
        chapter:1,
        section:1,
        page:3,
        title:'Dawn of Flight',
        content:"<p class='hb-p'><span class='hb-bold-text'>1.2.4.</span>The Wrights furthered Lilienthal’s experiments with the assistance of American Octave Chanute, whose book, Progress in Flying Machines, provided their foundation in aeronautics. From 1900 to 1902, the Wrights conducted more than 1,000 glides from Kill Devil Hills near Kitty Hawk, North Carolina. After perfecting wing warping, elevators and rudders, and a water-cooled engine, they attempted the first powered flight on 14 December 1903. On that try, the aircraft stalled upon takeoff and crashed three seconds later. Success came at 10:35, on 17 December 1903, when Orville Wright flew 120 feet in 12 seconds. Alternating pilot duties, the brothers made three more flights with Wilbur flying 852 feet and staying aloft 59 seconds on the fourth attempt.</p><div class='hb-image-wrap-right shadow'><img src='/Assets/images/handbook/handbook-pic3.jpg' class='col p-0'><div class='col hb-image-caption'>The enlisted men of the 1908 Aeronautical Division Left to right (back row), Pfc. Vernon L. Bridge. Pfc. Charles De Kim, Pvt. Eldred O. Eldred; (middle row) Pvt. Stewart K. Rosenburger, Corporal Edward Ward, Pvt. Cecil R. Colle, Pvt. William E. McConnell.  Seated are Pvt. John Crotty (left) and Pvt. Benjamin Schmidt.</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.5.</span>American military authorities rejected the Wrights’ flyer, reacting in part to the highly publicized failure of Samuel P. Langley’s steam-powered Aerodrome in October 1903. Although a highly respected scientist and Secretary of the Smithsonian Institution, Langley and the Army were subjected to public ridicule and Congressional criticism for the “waste” of a $50,000 government grant. Only when President Theodore Roosevelt intervened was an aeronautical division established in the United States Army’s Signal Corps on 1 August 1907.</p><p class='hb-p'><span class='hb-bold-text'>1.2.6.</span>With the establishment of an aeronautical division the army was in possession of several balloons. The Army required trained enlisted men to conduct balloon inflations and effect necessary repairs. Effective 2 July 1907, Eddy Ward and Jason Barrett reported to the Leo Stevens’ balloon factory in New York City. They would become the first enlisted men assigned to the Signal Corps’ small Aeronautical Division, which in time evolved into the United States Air Force enlisted corps.</p><p class='hb-p'><span class='hb-bold-text'>1.2.7.</span>When Ward and Barrett reported, the division did not officially exist. The Army had disbanded the minuscule Civil War balloon service in 1863, and the corps’ attempts to revive military aviation met with little success. At the balloon factory, the two men were schooled in the rudiments of fabric handling, folding, and stitching; in the manufacturing of buoyant gases; and in the inflation and control of the Army’s “aircraft.”</p>"
    }, 
    {
        indx:'blb4',
        chapter:1,
        section:1,
        page:4,
        title:'The Early Days of the United States Army Aviation (1907-1917)',
        content:"<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>"
    },
    {
        indx:'blb5',
        chapter:1,
        section:1,
        page:5,
        title:'Overview',
        content:"<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>"
    },
    {
        indx:'blb6',
        chapter:1,
        section:1,
        page:6,
        title:'Dawn of Flight',
        content:"<div class='col hb-section-title'>Section 1B—Dawn of Flight, Early Days of Aviation, First Air War and the 1920s and 1930s Airpower</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic2.jpg' class='col p-0'><div class='col hb-image-caption'>Inflating the Civil War balloon Intrepid, 1862</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.2 The Dawn of Flight:</div></div><p class='hb-p'><span class='hb-bold-text'>1.2.1</span>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p><p class='hb-p'><span class='hb-bold-text'>1.2.2</span>In September 1861, a “Balloon Corps” provided aerial observation for the Union Army during the American Civil War. However, the early balloons proved fragile, vulnerable to weather, and of limited value.</p><p class='hb-p'><span class='hb-bold-text'>1.2.3</span>Aviation languished in the United States, but in Europe, balloons, gliders, and aerodynamics advanced rapidly. By 1853, Britain’s Sir George Cayley created a glider with fixed wings, cambered airfoil, and horizontal and vertical stabilizers. Continuing Cayley’s work, German engineer Otto Lilienthal produced flying machines similar to today’s hang gliders. From 1891 until his death five years later, Lilienthal greatly advanced aerodynamic theory. The publicity generated by Lilienthal spurred on imaginative people on both sides of the Atlantic, including Orville and Wilbur Wright.</p>"
    }
];

valObjects.blueBookGetPage = function(num)
{
    return blueBookPages[num];
};

valObjects.getMaxBlueBookPages = function()
{
    return blueBookPages.length;
};

    // Flash Cards
    var flashCards = [
        {
            ID:"1D_1",
            chapter:1,
            paragraph:'1.11.1',
            section:"1D",
            question:"<p class='flashCard-title-text'>Bold title</p><div class='fc-image-wrap-right shadow'><img src='/Assets/images/flashcardsIcon-black.png' class='p-0'></img></div><p>Paragraph and image right : Which President announced an end to United States combat in Southeast Asia as a primary goal of his administration and charged the Secretary of Defense with making Vietnamization of the war a top priority?</p><ul class='flashCard-listed-text'><li>Bullet one</li><li>Bullet two</li><li>Bullet three</li>",
            answer:"<p>The Flying Tigers were famous for shark mouths painted on their Curtis P-40 Warhawks.</p><ol class='flashCard-listed-text'><li>Numbered item one</li><li>Numbered item two</li><li>Numbered item three</li></ol>",
            level:'A',
            importance:'3',
            category:'A'
        
        },
        {
            ID:"1D_2",
            chapter:1,
            section:"1D",
            paragraph:'1.11.5',
            question:"The primary United States Army Air Forces contribution to the Pacific counterattack was made by the _____, attached to the Southwest Pacific Theater under _____’s command.",
            answer:"Fifth Air Force; General Douglas MacArthur",
            level:'A',
            importance:'3',
            category:'A'
        },
        {
            ID:"1D_3",
            chapter:1,
            section:"1D",
            paragraph:'1.12.1',
            question:"Which Act, signed by Harry S. Truman on 26 July 1947, provided for a separate Department of the Air Force?",
            answer:"The National Security Act of 1947",
            level:'A',
            importance:'3',
            category:'A'
        },
        {
            ID:"7D_4",
            chapter:7,
            section:"7D",
            paragraph:'7.10.6',
            question:"<p>Letters of counseling, admonishment, or reprimand require six parts. Identify the missing parts:</p><ol class='flashCard-listed-text'><li>What the member did or failed to do, citing incidents and dates</li><li>_____</li><li>_____</li><li>That the individual has three duty days to respond and provide rebuttal matters</li><li>_____</li><li>That the person who initiates the letter has three duty days to advise the individual of their decision regarding any comments submitted by the individual.</li></ol>",
            answer:"<p>Letters of counseling, admonishment, or reprimand require six parts.</p><ol class='flashCard-listed-text'><li>What the member did or failed to do, citing incidents and dates</li><li>What improvement is expected</li><li>That further deviation may result in more severe action</li><li>That the individual has three duty days to respond and provide rebuttal matters</li><li>That all supporting documents become part of the record</li><li>That the person who initiates the letter has three duty days to advise the individual of their decision regarding any comments submitted by the individual</li></ol>",
            level:'B',
            importance:'1',
            category:'B'
        },
        {
            ID:"4D_9",
            chapter:4,
            section:"4D",
            paragraph:'4.15.5',
            question:"<p>Joint operation planning process consists of seven steps. Identify the missing steps:</p><ol class='flashCard-listed-text'><li>Planning Initiation</li><li>Mission Analysis</li><li>_____</li><li>_____</li><li>Course of Action Comparison</li><li>_____</li><li>Plan or Order Development</li></ol>",
            answer:"<ol class='flashCard-listed-text'><li>Planning Initiation</li><li>Mission Analysis</li><li>Course of Action Development</li><li>Course of Action Analysis</li><li>Course of Action Comparison</li><li>Course of Action Approval</li><li>Plan or Order Development</li></ol>",
            level:'A',
            importance:'3',
            category:'A'
        }
    ];
    valObjects.getFlashCards = function()
    {
        return flashCards;
    };
    valObjects.getFlashCardQuestion = function(num)
    {
        return flashCards[num].question;
    };
    valObjects.getFlashCardAnswer = function(num)
    {
        return flashCards[num].answer;
    };

// Convert object to vertical col array - Needs work
    var columizeData = function(input, cols) 
    {
        var arr = [];
        var lng = input.length;
        for(i = 0; i < (lng/2); i++) 
        {
            arr[i] = arr[i] || [];
            arr[i].push(input[i]);
            arr[i].push(input[i+(lng/2)]);

            // arr[1] = arr[1] || [];
            // arr[1].push(input[i+(lng/2)]);
            // var colIdx = i % cols;
            // arr[colIdx] = arr[colIdx] || [];
            // arr[colIdx].push(input[i]);
        }

        return arr;
    };

    var flashCardChapters = [
        {name:"The Airman's Creed",desc:"",index:'0',checked:'false'},
        {name:"Chapter 1",desc:"AIR FORCE HERITAGE",index:'1',checked:'false'},
        {name:"Chapter 2",desc:"ENLISTED HISTORY",index:'2',checked:'false'},
        {name:"Chapter 3",desc:"ORGANIZATION",index:'3',checked:'false'},
        {name:"Chapter 4",desc:"AIR FORCE DOCTRINE, AIR EXPEDITIONARY FORCE (AEF) AND JOINT FORCE",index:'4',checked:'false'},
        {name:"Chapter 5",desc:"EMERGANCY MANAGEMENT",index:'5',checked:'false'},
        {name:"Chapter 6",desc:"STANDARDS OF CONDUCT",index:'6',checked:'false'},
        {name:"Chapter 7",desc:"ENFORCING STANDARDS AND LEGAL ISSUES",index:'7',checked:'false'},
        {name:"Chapter 8",desc:"MILITARY CUSTOMS, COURSIES, AND PROTOCOL FOR SPECIAL EVENTS",index:'8',checked:'false'},
        {name:"Chapter 9",desc:"THE NON COMMISSIONED OFFICER",index:'9',checked:'false'},
        {name:"Chapter 10",desc:"MORE CHAPTERS...",index:'10',checked:'false'},
        {name:"Chapter 11",desc:"MORE CHAPTERS...",index:'11',checked:'false'},
        {name:"Chapter 12",desc:"MORE CHAPTERS...",index:'12',checked:'false'},
        {name:"Chapter 13",desc:"MORE CHAPTERS...",index:'13',checked:'false'},
        {name:"Chapter 14",desc:"MORE CHAPTERS...",index:'14',checked:'false'},
        {name:"Chapter 15",desc:"MORE CHAPTERS...",index:'15',checked:'false'},
        {name:"Chapter 16",desc:"MORE CHAPTERS...",index:'16',checked:'false'},
        {name:"Chapter 17",desc:"MORE CHAPTERS...",index:'17',checked:'false'},
        {name:"Chapter 18",desc:"MORE CHAPTERS...",index:'18',checked:'false'},
        {name:"Chapter 19",desc:"MORE CHAPTERS...",index:'19',checked:'false'}
    ];

    
    valObjects.getFlashCardChapters = function()
    {
        // var chapterCols = columizeData(flashCardChapters,2);
        return flashCardChapters;
    };


    var bookChapters = [
        {name:"Chapter 1", desc:"AIR FORCE HERITAGE", chapterIndx:"C1",
            sections:[
              {section:"1.1",desc:"Introduction",sectIndx:"S1.1"},
            //   {section:"1.2.",desc:"The Dawn of Flight",sectIndx:"S1.2"},
            //   {section:"1.3.",desc:"The Early Days of the United States Army Aviation (1907-1917)",sectIndx:"S1.3"}, 
            //   {section:"1.4.",desc:"The First Air War",sectIndx:"S1.4"},
            //   {section:"1.5.",desc:"Controversy and Records, 1920s Airpower",sectIndx:"S1.5"},
              {section:"1.6.",desc:"Air Corps Tactical School and the Rise of the Bomber (1930s Air Corps)",sectIndx:"S1.6"},
              {section:"1.7.",desc:"General Headquarters Air Force (1935-1939)",sectIndx:"S1.7"}, 
            //   {section:"1.8.",desc:"The Air Corps Prepares for War",sectIndx:"S1.8"}, 
              {section:"1.9.",desc:"Airpower in World War II : The European Theater",sectIndx:"S1.9"}, 
            //   {section:"1.10",desc:"The Tuskegee Airmen",sectIndx:"S1.10"},
            //   {section:"1.11",desc:"Air War in the Pacific",sectIndx:"S1.11"},
            //   {section:"1.12",desc:"Air Force Independence and the Cold War",sectIndx:"S1.12"},
              {section:"1.13",desc:"Cuban Missile Crisis(1962)",sectIndx:"S1.13"},
              {section:"1.14.",desc:"Vietnam, 1961-1973",sectIndx:"S1.14"}, 
              {section:"1.15.",desc:"The Post-Vietnam Era and the end of the Cold War",sectIndx:"S1.15"} 
            ]},
        {name:"Chapter 2", desc:"ENLISTED HISTORY", chapterIndx:"C1",
        sections:[
            {section:"2.1",desc:"Introduction",sectIndx:"S2.1"},
            {section:"2.2.",desc:"Milestones of World War I(1917-1918)",sectIndx:"S2.2"},
            // {section:"2.3.",desc:"Milestones of World War II(1939-1945)",sectIndx:"S2.3"}, 
            // {section:"2.4",desc:"The Cold War (1948-1991)",sectIndx:"S2.4"},
            {section:"2.5",desc:"The Berlin Airlift (1948-1949)",sectIndx:"S2.5"},
            // {section:"2.6",desc:"The KoreanWar (1950-1953)",sectIndx:"S2.6"},
            // {section:"2.7.",desc:"The War in Southeast Asia (1950-1975)",sectIndx:"S2.7"}, 
            {section:"2.8.",desc:"The Air War Expands (1965-1968)",sectIndx:"S2.8"}, 
            {section:"2.9.",desc:"Vietnamization and Withdrawal (1969-1973)",sectIndx:"S2.9"}, 
            // {section:"2.10",desc:"Humanitarian Airlift",sectIndx:"S2.10"},
            // {section:"2.11",desc:"Post-Vietnam Conflicts",sectIndx:"S2.11"},
            // {section:"2.12",desc:"Gulf War I (1990)",sectIndx:"S2.12"},
            // {section:"2.13",desc:"Operations PROVIDE COMFORTand NORTHERN WATCH, Iraq (1991-2003)",sectIndx:"S2.13"},
            {section:"2.14.",desc:"Operation SOUTHERN WATCH, Iraq (1992-2003)",sectIndx:"S2.14"}, 
            {section:"2.15.",desc:"Operations PROVIDE RELIEF, IMPRESSIVE LIFT, and RESTORE HOPE—Somalia (1992-1994).",sectIndx:"S2.15"} 
            ]},
        {name:"Chapter 3", desc:"ENLISTED HISTORY", chapterIndx:"C1",
        sections:[
            {section:"2.1",desc:"Introduction",sectIndx:"S2.1"},
            // {section:"2.2.",desc:"Milestones of World War I(1917-1918)",sectIndx:"S2.2"},
            // {section:"2.3.",desc:"Milestones of World War II(1939-1945)",sectIndx:"S2.3"}, 
            // {section:"2.4",desc:"The Cold War (1948-1991)",sectIndx:"S2.4"},
            // {section:"2.5",desc:"The Berlin Airlift (1948-1949)",sectIndx:"S2.5"},
            {section:"2.6",desc:"The KoreanWar (1950-1953)",sectIndx:"S2.6"},
            {section:"2.7.",desc:"The War in Southeast Asia (1950-1975)",sectIndx:"S2.7"}, 
            {section:"2.8.",desc:"The Air War Expands (1965-1968)",sectIndx:"S2.8"}, 
            {section:"2.9.",desc:"Vietnamization and Withdrawal (1969-1973)",sectIndx:"S2.9"}, 
            // {section:"2.10",desc:"Humanitarian Airlift",sectIndx:"S2.10"},
            // {section:"2.11",desc:"Post-Vietnam Conflicts",sectIndx:"S2.11"},
            // {section:"2.12",desc:"Gulf War I (1990)",sectIndx:"S2.12"},
            // {section:"2.13",desc:"Operations PROVIDE COMFORTand NORTHERN WATCH, Iraq (1991-2003)",sectIndx:"S2.13"},
            // {section:"2.14.",desc:"Operation SOUTHERN WATCH, Iraq (1992-2003)",sectIndx:"S2.14"}, 
            {section:"2.15.",desc:"Operations PROVIDE RELIEF, IMPRESSIVE LIFT, and RESTORE HOPE—Somalia (1992-1994).",sectIndx:"S2.15"} 
            ]},
        {name:"Chapter 4", desc:"ENLISTED HISTORY", chapterIndx:"C1",
        sections:[
            {section:"2.1",desc:"Introduction",sectIndx:"S2.1"},
            {section:"2.2.",desc:"Milestones of World War I(1917-1918)",sectIndx:"S2.2"},
            {section:"2.3.",desc:"Milestones of World War II(1939-1945)",sectIndx:"S2.3"}, 
            {section:"2.4",desc:"The Cold War (1948-1991)",sectIndx:"S2.4"},
            {section:"2.5",desc:"The Berlin Airlift (1948-1949)",sectIndx:"S2.5"},
            {section:"2.6",desc:"The KoreanWar (1950-1953)",sectIndx:"S2.6"},
            {section:"2.7.",desc:"The War in Southeast Asia (1950-1975)",sectIndx:"S2.7"}, 
            {section:"2.8.",desc:"The Air War Expands (1965-1968)",sectIndx:"S2.8"}, 
            {section:"2.9.",desc:"Vietnamization and Withdrawal (1969-1973)",sectIndx:"S2.9"}, 
            {section:"2.10",desc:"Humanitarian Airlift",sectIndx:"S2.10"},
            {section:"2.11",desc:"Post-Vietnam Conflicts",sectIndx:"S2.11"},
            {section:"2.12",desc:"Gulf War I (1990)",sectIndx:"S2.12"},
            {section:"2.13",desc:"Operations PROVIDE COMFORTand NORTHERN WATCH, Iraq (1991-2003)",sectIndx:"S2.13"},
            {section:"2.14.",desc:"Operation SOUTHERN WATCH, Iraq (1992-2003)",sectIndx:"S2.14"}, 
            {section:"2.15.",desc:"Operations PROVIDE RELIEF, IMPRESSIVE LIFT, and RESTORE HOPE—Somalia (1992-1994).",sectIndx:"S2.15"} 
            ]},
        {name:"Chapter 5", desc:"ENLISTED HISTORY", chapterIndx:"C1",
        sections:[
            {section:"2.1",desc:"Introduction",sectIndx:"S2.1"},
            {section:"2.2.",desc:"Milestones of World War I(1917-1918)",sectIndx:"S2.2"},
            {section:"2.3.",desc:"Milestones of World War II(1939-1945)",sectIndx:"S2.3"}, 
            // {section:"2.4",desc:"The Cold War (1948-1991)",sectIndx:"S2.4"},
            // {section:"2.5",desc:"The Berlin Airlift (1948-1949)",sectIndx:"S2.5"},
            // {section:"2.6",desc:"The KoreanWar (1950-1953)",sectIndx:"S2.6"},
            // {section:"2.7.",desc:"The War in Southeast Asia (1950-1975)",sectIndx:"S2.7"}, 
            // {section:"2.8.",desc:"The Air War Expands (1965-1968)",sectIndx:"S2.8"}, 
            // {section:"2.9.",desc:"Vietnamization and Withdrawal (1969-1973)",sectIndx:"S2.9"}, 
            // {section:"2.10",desc:"Humanitarian Airlift",sectIndx:"S2.10"},
            // {section:"2.11",desc:"Post-Vietnam Conflicts",sectIndx:"S2.11"},
            // {section:"2.12",desc:"Gulf War I (1990)",sectIndx:"S2.12"},
            {section:"2.13",desc:"Operations PROVIDE COMFORTand NORTHERN WATCH, Iraq (1991-2003)",sectIndx:"S2.13"},
            {section:"2.14.",desc:"Operation SOUTHERN WATCH, Iraq (1992-2003)",sectIndx:"S2.14"}, 
            {section:"2.15.",desc:"Operations PROVIDE RELIEF, IMPRESSIVE LIFT, and RESTORE HOPE—Somalia (1992-1994).",sectIndx:"S2.15"} 
            ]},
        {name:"Chapter 6", desc:"ENLISTED HISTORY", chapterIndx:"C1",
        sections:[
            // {section:"2.1",desc:"Introduction",sectIndx:"S2.1"},
            // {section:"2.2.",desc:"Milestones of World War I(1917-1918)",sectIndx:"S2.2"},
            // {section:"2.3.",desc:"Milestones of World War II(1939-1945)",sectIndx:"S2.3"}, 
            // {section:"2.4",desc:"The Cold War (1948-1991)",sectIndx:"S2.4"},
            // {section:"2.5",desc:"The Berlin Airlift (1948-1949)",sectIndx:"S2.5"},
            {section:"2.6",desc:"The KoreanWar (1950-1953)",sectIndx:"S2.6"},
            {section:"2.7.",desc:"The War in Southeast Asia (1950-1975)",sectIndx:"S2.7"}, 
            // {section:"2.8.",desc:"The Air War Expands (1965-1968)",sectIndx:"S2.8"}, 
            {section:"2.9.",desc:"Vietnamization and Withdrawal (1969-1973)",sectIndx:"S2.9"}, 
            {section:"2.10",desc:"Humanitarian Airlift",sectIndx:"S2.10"},
            // {section:"2.11",desc:"Post-Vietnam Conflicts",sectIndx:"S2.11"},
            // {section:"2.12",desc:"Gulf War I (1990)",sectIndx:"S2.12"},
            // {section:"2.13",desc:"Operations PROVIDE COMFORTand NORTHERN WATCH, Iraq (1991-2003)",sectIndx:"S2.13"},
            // {section:"2.14.",desc:"Operation SOUTHERN WATCH, Iraq (1992-2003)",sectIndx:"S2.14"}, 
            {section:"2.15.",desc:"Operations PROVIDE RELIEF, IMPRESSIVE LIFT, and RESTORE HOPE—Somalia (1992-1994).",sectIndx:"S2.15"} 
            ]},
        {name:"Chapter 7", desc:"ENLISTED HISTORY", chapterIndx:"C1",
        sections:[
            {section:"2.1",desc:"Introduction",sectIndx:"S2.1"},
            {section:"2.2.",desc:"Milestones of World War I(1917-1918)",sectIndx:"S2.2"},
            // {section:"2.3.",desc:"Milestones of World War II(1939-1945)",sectIndx:"S2.3"}, 
            // {section:"2.4",desc:"The Cold War (1948-1991)",sectIndx:"S2.4"},
            // {section:"2.5",desc:"The Berlin Airlift (1948-1949)",sectIndx:"S2.5"},
            {section:"2.6",desc:"The KoreanWar (1950-1953)",sectIndx:"S2.6"},
            {section:"2.7.",desc:"The War in Southeast Asia (1950-1975)",sectIndx:"S2.7"}, 
            {section:"2.8.",desc:"The Air War Expands (1965-1968)",sectIndx:"S2.8"}, 
            {section:"2.9.",desc:"Vietnamization and Withdrawal (1969-1973)",sectIndx:"S2.9"}, 
            {section:"2.10",desc:"Humanitarian Airlift",sectIndx:"S2.10"},
            // {section:"2.11",desc:"Post-Vietnam Conflicts",sectIndx:"S2.11"},
            // {section:"2.12",desc:"Gulf War I (1990)",sectIndx:"S2.12"},
            {section:"2.13",desc:"Operations PROVIDE COMFORTand NORTHERN WATCH, Iraq (1991-2003)",sectIndx:"S2.13"},
            {section:"2.14.",desc:"Operation SOUTHERN WATCH, Iraq (1992-2003)",sectIndx:"S2.14"}, 
            {section:"2.15.",desc:"Operations PROVIDE RELIEF, IMPRESSIVE LIFT, and RESTORE HOPE—Somalia (1992-1994).",sectIndx:"S2.15"} 
            ]},
        {name:"Chapter 8", desc:"ENLISTED HISTORY", chapterIndx:"C1",
        sections:[
            {section:"2.1",desc:"Introduction",sectIndx:"S2.1"},
            {section:"2.2.",desc:"Milestones of World War I(1917-1918)",sectIndx:"S2.2"},
            {section:"2.3.",desc:"Milestones of World War II(1939-1945)",sectIndx:"S2.3"}, 
            {section:"2.4",desc:"The Cold War (1948-1991)",sectIndx:"S2.4"},
            // {section:"2.5",desc:"The Berlin Airlift (1948-1949)",sectIndx:"S2.5"},
            // {section:"2.6",desc:"The KoreanWar (1950-1953)",sectIndx:"S2.6"},
            {section:"2.7.",desc:"The War in Southeast Asia (1950-1975)",sectIndx:"S2.7"}, 
            {section:"2.8.",desc:"The Air War Expands (1965-1968)",sectIndx:"S2.8"}, 
            {section:"2.9.",desc:"Vietnamization and Withdrawal (1969-1973)",sectIndx:"S2.9"}, 
            // {section:"2.10",desc:"Humanitarian Airlift",sectIndx:"S2.10"},
            // {section:"2.11",desc:"Post-Vietnam Conflicts",sectIndx:"S2.11"},
            // {section:"2.12",desc:"Gulf War I (1990)",sectIndx:"S2.12"},
            {section:"2.13",desc:"Operations PROVIDE COMFORTand NORTHERN WATCH, Iraq (1991-2003)",sectIndx:"S2.13"},
            {section:"2.14.",desc:"Operation SOUTHERN WATCH, Iraq (1992-2003)",sectIndx:"S2.14"}, 
            {section:"2.15.",desc:"Operations PROVIDE RELIEF, IMPRESSIVE LIFT, and RESTORE HOPE—Somalia (1992-1994).",sectIndx:"S2.15"} 
            ]}


    ];

    valObjects.getBookChapters = function()
    {
        return bookChapters;
    };

  return valObjects;
})