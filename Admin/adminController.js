var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate'] );
mainApp.controller('AdminController', function($scope,$sce) 
    {
        // $scope.previewContent = $sce.trustAsHtml("<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>");
        //init
        // $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage(0).content);

        $scope.selectedPage = 0;
        $scope.textAreaData = "";
        $scope.version = "Version 0.326";

        $scope.addHTMLTage = function(type)
        {
            var textArea = document.getElementById( 'textAreaID' );
            var position = textArea.selectionStart;  
            
            var firstPart = $scope.textAreaData.substring(0, position);
            var secondPart = $scope.textAreaData.substring(position, $scope.textAreaData.length);

            if ( type == "title")
            {
                $scope.textAreaData = firstPart + "<div class='col hb-section-title'>Title text</div>" + secondPart;
            }

            if ( type == "image")
            {
                $scope.textAreaData = firstPart + "<div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Caption Text</div></div>" + secondPart;
            }

            if ( type == "subtitle")
            {
                $scope.textAreaData = firstPart + "<div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>Sub title</div></div>" + secondPart;
            }

            if ( type == "paragraph")
            {
                $scope.textAreaData = firstPart + "<p class='hb-p'>Add paragraph text here</p>" + secondPart;
            }

            
            $scope.setPreview($scope.textAreaData);
        }

        $scope.setPreview = function(content)
        {

            $scope.previewContent = $sce.trustAsHtml(content);
        }

        $scope.getBookPage = function(page)
        {
            console.log(page);
            // TODO change to switch case
            if ( page == 1 )
            {
                $scope.previewContent = $sce.trustAsHtml("<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>");
                $scope.textAreaData = "<div class='col hb-section-title'>Section 1A—Overview</div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic1.jpg' class='col p-0'><div class='col hb-image-caption'>Flying Tiger P-40</div></div><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.1. Introduction</div></div><p class='hb-p'>As preparation for your entry into the Air Force, this section will introduce the Air Force mission and their evolution, the machines and technology associated with air and space flight and most importantly, the legacy of the men and women of the United States Air Force. By surveying the history of aviation, you will discover our heritage, appreciate Air Force traditions, and understand your role in our nation’s defense. This United States Air Force Historical Perspective is by Dr. John T. Farquhar from the United States Air Force Academy Department of History and contributing editor George W. Bradley III, the Air Force Space Command Historian. The enlisted portions of this document were provided by the Air Force Enlisted Heritage Research Institute’s historian, Mr. William I. Chivalette. Dr. John Q. Smith, Senior Air Force Historian, assisted with additional editing.</p>";
            }
            else if ( page == 2)
            {
                $scope.previewContent = $sce.trustAsHtml("<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>");
                $scope.textAreaData = "<p class='hb-p'><span class='hb-bold-text'>1.2.8.</span> On 13 August 1907, Ward and Barrett were ordered to report to Camp John Smith outside Norfolk, Virginia, to participate in the Jamestown Exposition celebrating the 300th anniversary of the first settlement of Virginia. Over the next few years, the detachment participated in numerous air shows and moved from location to location. Barrett left the Army to complete a career in the Navy, but the enlisted detachment was soon expanded to include eight others. These nine men were the nucleus from which America’s enlisted air arm grew. They were the first of a small band of enlisted Airmen who, during the decade before World War I, shared in the experimental and halting first steps to establish military aviation as a permanent part of the Nation’s defense. Never numbering more than a few hundred individuals, the enlisted crews of the Signal Corps’ Aeronautical Division provided day-to-day support for a handful of officer pilots, learned the entirely new skills of airplane “mechanician”—and later, mechanic, rigger, and fitter—met daunting transportation and logistical challenges, and contributed mightily to the era’s seat-of-the-pants technological advances.</p><p class='hb-p'><span class='hb-bold-text'>1.2.9.</span> A few enlisted men, against official and semi-official military prejudice, learned to fly. The majority of enlisted men were absorbed in the tasks of getting the fragile balloons and even flimsier planes of the day into the air and keeping them there. Of necessity flexible and innovative, early crews often had to rebuild aircraft from the ground up after every crash—and, in those early days of flight; crashes were the rule rather than the exception. Enlisted crews not only repaired the planes, they labored to make some of the more ill-designed craft airworthy in the first place.</p><div class='row hb-title-container'><div class='col-0 hb-title-square'></div><div class='col hb-title'>1.3. The Early Days of the United States Army Aviation (1907-1917):</div></div><div class='hb-image-wrap-left shadow'><img src='/Assets/images/handbook/handbook-pic4.jpg' class='col p-0'><div class='col hb-image-caption'>Wright brothers ay Kitty Hawk</div></div><p class='hb-p'><span class='hb-bold-text'>1.3.1.</span> By December 1907, the new Aeronautical Division of the Signal Corps established specifications for an American military aircraft. The flying machine had to carry two people (with a combined weight of 350 pounds or less), and fly for 125 miles at an average speed of 40 miles per hour (mph). The Army received 41 bids, but only one, submitted by the Wright brothers, produced a flyable aircraft. By September 1908, the Wright Type “A” Military Flyer flew for more than an hour at a maximum altitude of 310 feet, carrying the first military observer, Lieutenant Frank P. Lahm. A subsequent test on                  17 September 1908 resulted in the first military aviation fatality: Lieutenant Thomas E. Selfridge. On 30 July 1909, pilot Orville Wright and Lieutenant Benjamin D. Foulois flew from Fort Myer to Alexandria, Virginia, at an average speed of 42.6 mph. The Army accepted the plane 2 August 1909 and awarded the Wrights $25,000 and a $5,000 bonus.</p>";
            }
        }
  });