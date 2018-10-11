<script>
 function modifyTextBox(type, header, text) {
   $("#POITextBox").show();
   $("#POITextBox h5").html(header);
   $("#POITextBox p").html(text);
   $("#POITextBox").css("padding","5px 25px 15px 25px");
   if(type == 0){
    //physical space/yellow
    $("#POITextBox").css("border-left", "5px solid #fdb913");
    $("#POITextBox h5").css("color", "#333333");
   }
	//services/green
	if(type == 1){
	$("#POITextBox").css("border-left", "5px solid #55b31b");
    $("#POITextBox h5").css("color", "#333333");
	}
	if(type == 2){
    //involvement/red
    $("#POITextBox").css("border-left", "5px solid #aa0000");
    $("#POITextBox h5").css("color", "#aa0000");
   }
	if(type == 3){
    //food/blue
    $("#POITextBox").css("border-left", "5px solid #003282");
    $("#POITextBox h5").css("color", "#003282");
   }
   var margin = ($("#POITextBox").height() * -1) - 30;
   $("#POITextBox").css("margin", (margin + "px auto 10px auto"));
 }

 function initialize() {
   var seattleu = {
     lat: 47.610399,
     lng: -122.318070
   }
   var map = new google.maps.Map(document.getElementById('SeattlePOIMap'), {
     center: seattleu,
     streetViewControl: false,
     mapTypeControl: false,
     fullscreenControl: false,
     zoom: 16,
     //Map style from Snazzy Maps (Blue Water) start
     styles: [{
       "featureType": "administrative.land_parcel",
       "elementType": "labels",
       "stylers": [{
         "visibility": "off"
       }],
     }, {
       "featureType": "poi",
       "elementType": "labels.text",
       "stylers": [{
         "visibility": "off"
       }],
     }, {
       "featureType": "poi.business",
       "stylers": [{
         "visibility": "off"
       }],
     }, {
       "featureType": "road",
       "elementType": "labels.icon",
       "stylers": [{
         "visibility": "off"
       }],
     }, {
       "featureType": "road.local",
       "elementType": "labels",
       "stylers": [{
         "visibility": "off"
       }],
     }, {
       "featureType": "transit",
       "stylers": [{
         "visibility": "off"
       }],
     }, {
       "featureType": "water",
       "elementType": "all",
       "stylers": [{
         "color": "#04A9C5"
       }, {
         "visibility": "on"
       }],
     }],
   });
   map.addListener('click', function() {
     $("#POITextBox").hide();
   });

   //Map style end
   //Map markers start
   //Map marker url list start
   var icons = {
       seattleUIcon: {
         icon: '/media/graduate-admissions/images/graduate-viewbook/sulogo.png'
       },
	   physicalSpacesIcon: {
         icon: '/media/graduate-admissions/images/graduate-viewbook/location_yellow.png'
       },
       servicesIcon: {
         icon: '/media/graduate-admissions/images/graduate-viewbook/location_green.png'
       },
       involvementIcon: {
         icon: '/media/graduate-admissions/images/graduate-viewbook/location_red.png'
       },
	   foodIcon: {
         icon: '/media/graduate-admissions/images/graduate-viewbook/location_blue.png'
       },
     };
     //Map marker url list end
     //Seattle University marker
   var seattleuMarker = new google.maps.Marker({
     position: seattleu,
     icon: icons['seattleUIcon'].icon,
     map: map,
     optimized: false,
     zIndex: 100,
   });
   seattleuMarker.addListener('click', function() {
     modifyTextBox(2, "Seattle University", "Seattle University, founded in 1891, is a Jesuit Catholic university located on 50 acres in Seattle's Capitol Hill neighborhood.");
   });
   //Physical Space/yellow Markers start, alphabetized

   var commuterShowersMarker = new google.maps.Marker({
     position: {
       lat: 47.608307,
       lng: -122.318693
     },
     icon: icons['physicalSpacesIcon'].icon,
     map: map,
   });
   commuterShowersMarker.addListener('click', function() {
     modifyTextBox(0, "Commuter Showers", "If you are a bicycle commuter, or just want to take a shower after running the track before class, there is a locker room with showers available on campus specifically for commuter students. These showers are located at the west end of the first floor of the Student Center. Bring your campus card and swipe for entry. Find out more on the <a href='https://www.seattleu.edu/student-outreach/commuter-students/commuter-resources/' target='_blank'>commuter students resources webpage</a>.");
   });

   var lemieuxLibraryMarker = new google.maps.Marker({
     position: {
       lat: 47.608881,
       lng: -122.318842
     },
     icon: icons['physicalSpacesIcon'].icon,
     map: map,
   });
   lemieuxLibraryMarker.addListener('click', function() {
     modifyTextBox(0, "Lemieux Library and McGoldrick Learning Commons", "The library offers many study areas, quiet reading rooms, and research assistance to all students. Visit the <a href='http://libguides.seattleu.edu/libraryhours' target='_blank'>Library's website</a> to find out their hours. Group study rooms can be reserved using <a href='http://libguides.seattleu.edu/gsr' target='_blank'>these instructions</a>. <a href='https://www.seattleu.edu/library/library-services/study-spaces/' target='_blank'>Check out the full list of the Library's study spaces</a>.");
   });

   var mcgoldrickCollegiumMarker = new google.maps.Marker({
     position: {
       lat: 47.611974,
       lng: -122.318442
     },
     icon: icons['physicalSpacesIcon'].icon,
     map: map,
   });
   mcgoldrickCollegiumMarker.addListener('click', function() {
     modifyTextBox(0, "McGoldrick Collegium", "<a href='https://www.seattleu.edu/student-outreach/adult-learners/mcgoldrick-collegium/' target='_blank'>McGoldrick Collegium</a>, located in Hunthausen Hall, is the home for graduate students and adult learners over the age of 25. The space is staffed by current SU students and offers a comfortable study space and multiple events and programs throughout the year. For a list of events and to stay connected please visit our <a href='https://www.facebook.com/SUcollegia/' target='_blank'>Facebook</a> and <a href='https://orgsync.com/161729/chapter' target='_blank'>ConnectSU</a> pages.");
   });

var outreachCenterMarker = new google.maps.Marker({
     position: {
       lat: 47.608326,
       lng: -122.317791
     },
     icon: icons['physicalSpacesIcon'].icon,
     map: map,
   });
   outreachCenterMarker.addListener('click', function() {
     modifyTextBox(0, "The Outreach Center", "Located in STCN 110, <a href='https://www.seattleu.edu/student-outreach/resource-spaces/outreach-center/' target='_blank'>The Outreach Center</a> is a community and resource space for members of the Seattle University community who identify with the first-generation college student experience and the student veteran experience.");
   });

//Services/green markers start, alphabetized
   var campusStoreMarker = new google.maps.Marker({
     position: {
       lat: 47.612568,
       lng: -122.316990
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   campusStoreMarker.addListener('click', function() {
     modifyTextBox(1, "Campus Store", "Located at 12th and Madison, you can buy, rent, and sell your textbooks, and get all your Seattle U swag, at the <a href='https://www.seattleu.edu/campus-store/' target='_blank'>Campus Store</a>.");
   });

   var careerEngagementOfficeMarker = new google.maps.Marker({
     position: {
       lat: 47.608874,
       lng: -122.317831
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   careerEngagementOfficeMarker.addListener('click', function() {
     modifyTextBox(1, "Career Engagement Office", "The <a href='https://www.seattleu.edu/careerservices' target='_blank'>Career Engagement Office</a>, located in PAVL 110, works with students at every stage of the career and job process. Career advisors are available to discuss career exploration, job and internship searches, resumes, cover letters, conduct mock interviews, and more.");
   });

   var capsMarker = new google.maps.Marker({
     position: {
       lat: 47.608874,
       lng: -122.317710
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   capsMarker.addListener('click', function() {
     modifyTextBox(1, "Counseling & Psychological Services", "<a href='https://www.seattleu.edu/caps' target='_blank'>Counseling and Psychological Services (CAPS)</a> is committed to helping students meet the challenges of life during college, graduate and professional school by encouraging healthy personal choices and balanced perspectives. CAPS provides affirmative therapy that values diversity and respects the individual.");
   });

   var learningAssistanceProgramsMarker = new google.maps.Marker({
     position: {
       lat: 47.609005,
       lng: -122.319060
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   learningAssistanceProgramsMarker.addListener('click', function() {
     modifyTextBox(1, "Learning Assistance Programs & the Writing Center", "Both located on the second floor of the Lemieux Library, the <a href='https://www.seattleu.edu/writingcenter/' target='_blank'>Writing Center</a> and <a href='https://www.seattleu.edu/learning-assistance/' target='_blank'>Learning Assistance Programs</a> offer one-on-one sessions and workshops to help you become a better writer and learner.");
   });

   var mpcMarker = new google.maps.Marker({
     position: {
       lat: 47.608938,
       lng: -122.318696
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   mpcMarker.addListener('click', function() {
     modifyTextBox(1, "Media Production Center", "Located on the first floor of the Lemieux Library, the <a href='https://www.seattleu.edu/library/library-services/media-production-center/' target='_blank'>Media Production Center</a> offers training, workshops, equipment check-out, and support so you can bring to life your original multimedia productions.");
   });

var publicSafetyMarker = new google.maps.Marker({
     position: {
       lat: 47.610168,
       lng: -122.317646
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   publicSafetyMarker.addListener('click', function() {
     modifyTextBox(1, "Public Safety", "Located in University Services 102, open 8:30am-4:30pm. 24-Hour Emergency Line:  (206) 296-5911; 24-Hour Non-Emergency Line:  (206) 296-5990; Business Line: (206) 296-5992; Email: <a href='mailto:publicsafety@seattleu.edu'>publicsafety@seattleu.edu</a>.");
   });

var redhawkAxisMarker = new google.maps.Marker({
     position: {
       lat: 47.610048,
       lng: -122.317233
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   redhawkAxisMarker.addListener('click', function() {
     modifyTextBox(1, "Redhawk Axis", "Located on the first floor of the University Services building, this desk allows students to drop and speak to a Registrar staff member or a Student Financial Services staff member. Extended hours are offered during registration!");
   });

var redhawkResourceHubDeskMarker = new google.maps.Marker({
     position: {
       lat: 47.608472,
       lng: -122.318108
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   redhawkResourceHubDeskMarker.addListener('click', function() {
     modifyTextBox(1, "Redhawk Resource Hub Desk", "Located on the first floor of the Student Center, this desk offers free daily ORCA passes, locker rentals, and sells tickets for major campus events.");
   });

   var supercopyMarker = new google.maps.Marker({
     position: {
       lat: 47.609141,
       lng: -122.317512
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   supercopyMarker.addListener('click', function() {
     modifyTextBox(1, "Supercopy", "Located in PAVL 010, Supercopy offers multiple services to students, such as printing, copying, mailing, and making your SU ID card. They also sell stamps and course packs. They take cash, check or card for payment. You can mail things from campus through this office! Perfect for when you need to mail back a rented textbook. Pick up time for USPS is 2pm Mon-Fri.");
   });

   var universityRecreationMarker = new google.maps.Marker({
     position: {
       lat: 47.606994,
       lng: -122.313798
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   universityRecreationMarker.addListener('click', function() {
     modifyTextBox(1, "William F. Eisiminger Fitness Center", "Located in the Redhawk Center, the Rec Center offers fitness classes, a weight room, cardio floor and studios. Check out their <a href='https://www.seattleu.edu/recreation'>website</a> for quarterly hours, as well as pool hours.");
   });

   //Services Markers end
   //Involvement Opportunities/red Markers, alphabetized

   var centerStudentInvolvementMarker = new google.maps.Marker({
     position: {
       lat: 47.608330,
       lng: -122.318610
     },
     icon: icons['involvementIcon'].icon,
     map: map,
   });
   centerStudentInvolvementMarker.addListener('click', function() {
     modifyTextBox(2, "Center for Student Involvement", "Located in Student Center 350 and 360. Get involved through this office! Whether you join a club or organization, create a new one, or partake in a <a href='https://www.seattleu.edu/seac'>SEAC</a> event - there are many way to get connected!");
   });

   var intramuralMarker = new google.maps.Marker({
     position: {
       lat: 47.607561,
       lng: -122.313441
     },
     icon: icons['involvementIcon'].icon,
     map: map,
   });
   intramuralMarker.addListener('click', function() {
     modifyTextBox(2, "Intramural Sports", "Happening throughout the school year and open to all students! Visit the <a href='https://www.seattleu.edu/recreation/intramural-sports/' target='_blank'>UREC Website</a> for more information.");
   });

   var internationalStudentCenterMarker = new google.maps.Marker({
     position: {
       lat: 47.608640,
       lng: -122.317589
     },
     icon: icons['involvementIcon'].icon,
     map: map,
   });
   internationalStudentCenterMarker.addListener('click', function() {
     modifyTextBox(2, "International Student Center", "Located in PAVL 160, the <a href='https://www.seattleu.edu/isc/' target='_blank'>ISC</a> works closely with campus partners in supporting over 865 international students from 60 countries around the world. Some major events and programs include: International Dinner and International Education Week.");
   });

   var omaMarker = new google.maps.Marker({
     position: {
       lat: 47.608678,
       lng: -122.317747
     },
     icon: icons['involvementIcon'].icon,
     map: map,
   });
   omaMarker.addListener('click', function() {
     modifyTextBox(2, "Office of Multicultural Affairs", "Located in PAVL 180, OMA encourages students to increase their awareness of and engagement with diversity by creating an environment that promotes inclusion and advocacy. This is done through a variety of programs, services, and resources focused on historically marginalized experiences, dynamics of privilege, and social justice.");
   });

   var sgsuMarker = new google.maps.Marker({
     position: {
       lat: 47.608348,
       lng: -122.318603
     },
     icon: icons['involvementIcon'].icon,
     map: map,
   });
   sgsuMarker.addListener('click', function() {
     modifyTextBox(2, "Student Government of SU", "Stop by Student Center 360 and involved with student government. There are roles specific to non-traditional students on <a href='https://www.seattleu.edu/sgsu/' target='_blank_'>SGSU</a>. If you are a graduate student, the <a href='https://www.seattleu.edu/gsc/' target='_blank'>Graduate Student Council</a> is here to support you.");
   });

   var wellnessHealthPromotionMarker = new google.maps.Marker({
     position: {
       lat: 47.608348,
       lng: -122.318603
     },
     icon: icons['involvementIcon'].icon,
     map: map,
   });
   wellnessHealthPromotionMarker.addListener('click', function() {
     modifyTextBox(2, "Wellness and Health Promotion", "Through online screenings, individual consultations and large events this office offers education and support for the following areas: mental health, alcohol and other drugs, healthy relationships and physical wellness. Get involved with <a href='https://www.seattleu.edu/wellness/hawc/'>HAWC</a>.");
   });
   //Markers for Involvement Opportunities end
   //Food/blue markers begin, alphabetically

   var cupcakeRoyaleMarker = new google.maps.Marker({
     position: {
       lat: 47.614058,
       lng: -122.317592
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   cupcakeRoyaleMarker.addListener('click', function() {
     modifyTextBox(3, "Cupcake Royale", "Just off campus, at 1111 E Pike St, be sure to visit <a href='https://www.cupcakeroyale.com/' target='_blank'>Cupcake Royale</a> to enjoy fresh baked cupcakes, Stumptown espresso, and Seattle's Best ice cream scoops, sundaes, shakes, and pints! They are open late (to 10am Sun-Thurs and 11pm Fri-Sat) and offer a 10% student discount for SU students.");
   });

   var mrSaigonMarker = new google.maps.Marker({
     position: {
       lat: 47.609314,
       lng: -122.316544
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   mrSaigonMarker.addListener('click', function() {
     modifyTextBox(3, "Mr. Saigon", "Right on the corner of 12th and Columbia, visit Mr. Saigon to enjoy awesome bahn mi, bubble tea and Vietnamese iced coffee. For more info check out their <a href='https://www.mrsaigonbanhmi.com/' target='_blank'>website</a>. They also offer a student discount of 10%, so remember to bring your SU ID.");
   });

   var southPawMarker = new google.maps.Marker({
     position: {
       lat: 47.611189,
       lng: -122.316465
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   southPawMarker.addListener('click', function() {
     modifyTextBox(3, "Southpaw", "Located at 926 12th Ave, for great pizza, a great lunch special, and a family friendly atmosphere, this is a great place to eat near campus. Check out their <a href='http://www.southpawpizza.com/' target='_blank'>website</a> for details about their menu and upcoming events. They also offer a student discount of 10%, so remember to bring your SU ID.");
   });

   var theBottomLineMarker = new google.maps.Marker({
     position: {
       lat: 47.640784,
       lng: -122.318706
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   theBottomLineMarker.addListener('click', function() {
     modifyTextBox(3, "The Bottom Line", "If you have a class in Pigott, stop by The Bottom Line for coffee, baked goods, or a hot sandwich. Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu.");
   });

   var theByteMarker = new google.maps.Marker({
     position: {
       lat: 47.609070,
       lng: -122.318612
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   theByteMarker.addListener('click', function() {
     modifyTextBox(3, "The Byte", "Located on the second floor of the Lemieux Library, The Byte offers a great place to grab a coffee or snack while studying. Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu.");
   });

   var theSideBarMarker = new google.maps.Marker({
     position: {
       lat: 47.609461,
       lng: -122.317788
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   theSideBarMarker.addListener('click', function() {
     modifyTextBox(3, "The Side Bar", "While located in the Law School, this café is open to all at SU. Known for their grilled cheeses, be sure to check out The Side Bar. Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu.");
   });

   var stcnDiningMarker = new google.maps.Marker({
     position: {
       lat: 47.608299,
       lng: -122.318402
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   stcnDiningMarker.addListener('click', function() {
     modifyTextBox(3, "Student Center Dining Options", "On the second floor of the Student Center, you will find the <strong>Cherry Street Market</strong>, our main dining hall location on campus; serving a variety of breakfast, lunch, and dinner options every day. On the third floor of the Student Center, check out the <strong>Hawk's Nest Bistro</strong>-a great place to grab a late night meal! Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu.");
   });

 }

</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAl51bxzHfJlGn9--0VhBtEMpDHknYu6sI&callback=initialize" async defer></script>
