/*****
*   Victor Chimenti
*   MSCS 2020
*   Campus Service Interactive Map
*   Last Modified 20191126
*
*
*/



 // *** Floating InfoWindow for Details ***  //
 function modifyTextBox(type, header, text) {
    $("#VenueTextBox").show();
    $("#VenueTextBox h5").html(header);
    $("#VenueTextBox p").html(text);
    $("#VenueTextBox").css("padding","5px 25px 15px 25px");

    // Food/Red-Orange
    if(type === 0) {
        $("#VenueTextBox").css("border-left", "5px solid #EF4135");
        $("#VenueTextBox h5").css("color", "#EF4135");
    }
	// Services/Green
	if(type === 1) {
        $("#VenueTextBox").css("border-left", "5px solid #55B31B");
        $("#VenueTextBox h5").css("color", "#55B31B");
    }
    // Event Venues/Blue
	if(type === 2) {
        $("#VenueTextBox").css("border-left", "5px solid #088099");
        $("#VenueTextBox h5").css("color", "#088099");
    }
    // SU Marker
    if(type === 3) {
        $("#VenueTextBox").css("border-left", "5px solid #AA0000");
        $("#VenueTextBox h5").css("color", "#AA0000");
    }
    // Text Box Margins
    var margin = ($("#VenueTextBox").height() * -1) - 30;
    $("#VenueTextBox").css("margin", (margin + "px auto 10px auto"));
}


 // *** Floating Pin Labels for Title Summary ***  //
 function modifyPinLabel(type, header, text) {
    $("#PinLabel").show();
    $("#PinLabel h5").html(header);
    $("#PinLabel p").html(text);
    $("#PinLabel").css("padding","5px 15px 15px 15px");

    // Food/Red-Orange
    if(type === 0) {
        $("#PinLabel").css("border-left", "5px solid #EF4135");
        $("#PinLabel h5").css("color", "#EF4135");
    }
    // Services/Green
    if(type === 1) {
        $("#PinLabel").css("border-left", "5px solid #55B31B");
        $("#PinLabel h5").css("color", "#55B31B");
    }
    // Event Venues/Blue
    if(type === 2) {
        $("#PinLabel").css("border-left", "5px solid #088099");
        $("#PinLabel h5").css("color", "#088099");
    }
    // SU Marker
    if(type === 3) {
        $("#PinLabel").css("border-left", "5px solid #AA0000");
        $("#PinLabel h5").css("color", "#AA0000");
    }
    // Pin Label Margins
    var margin = ($("#PinLabel").height() * -1) - 30;
    $("#PinLabel").css("margin", (margin + "px auto 10px auto"));
}



 //  *** Implementation of initialize function ***  //
 function initialize() {

   //  ***  Campus Primary Location  ***  //
   var seattleu = {
     lat: 47.610399,
     lng: -122.318070
   }

   //  ***  Campus Map Control Settings  ***  //
   var map = new google.maps.Map(document.getElementById('Campus-Services-Map'), {
     center: seattleu,
     scaleControl: true,
     zoomControl: true,
     mapTypeControl: true,
     fullscreenControl: false,
     mapTypeId: 'satellite',
     zoom: 16,
   });


   // Click Listener for Text Box
   map.addListener('click', function() {
     $("#VenueTextBox").hide();
   });
   // Click Listener for Text Box
   map.addListener('click', function() {
     $("#PinLabel").hide();
   });


   //  *** Map marker url list start ***  //
   var icons = {
     // SU Icon
     seattleUIcon: {
       icon: '/media/graduate-admissions/images/graduate-viewbook/sulogo.png'
     },
     // Food Icon
     foodIcon: {
       icon: '/media/campus-services/images/redorangepin.png'
     },
     // Services Icon
     servicesIcon: {
       icon: '/media/campus-services/images/greenpin.png'
     },
     // Venue Icon
     venueIcon: {
       icon: '/media/campus-services/images/bluepin.png'
     }
   };


   //  *** Seattle University Main Campus Marker ***  //
   var seattleuMarker = new google.maps.Marker({
     position: seattleu,
     icon: icons['seattleUIcon'].icon,
     map: map,
     // optimized: false,
     zIndex: 100,
   });
   seattleuMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(seattleuMarker.getPosition());
     modifyTextBox(3, "Seattle University", "Seattle University, founded in 1891, is a Jesuit Catholic university located on 50 acres in Seattle's Capitol Hill neighborhood.");
   });
   // create mouseover listener for marker label
   seattleuMarker.addListener('mouseover', function() {
     modifyTextBox(3, "Seattle University", "Seattle University, founded in 1891, is a Jesuit Catholic university located on 50 acres in Seattle's Capitol Hill neighborhood.");
   });
   // Click Listener for Pin Labels
   seattleuMarker.addListener('mouseout', function() {
     $("#VenueTextBox").hide();
   });



   //  *** Services/Green Markers start, alphabetized listings ***  //

   //  ***  Campus Store  ***  //
   var campusStoreMarker = new google.maps.Marker({
     position: {
       lat: 47.612600,
       lng: -122.316988
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var campusStoreLink = document.getElementById('campusStore');
   // create object to store Info Box attributes
   var campusStoreObj = {linkId: campusStoreLink, linkName: 'Campus Store', linkDesc: "Located at 12th and Madison, you can buy, rent, and sell your textbooks, and get all your Seattle U swag, at the <a href='https://www.seattleu.edu/campus-store/' target='_blank'>Campus Store</a>."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(campusStoreLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(campusStoreMarker.getPosition());
     modifyTextBox(1, campusStoreObj.linkName, campusStoreObj.linkDesc);
   });
   // create click listener for marker
   campusStoreMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(campusStoreMarker.getPosition());
     modifyTextBox(1, campusStoreObj.linkName, campusStoreObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   campusStoreMarker.addListener('mouseover', function() {
     modifyPinLabel(1, "Student Services", campusStoreObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   campusStoreMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });




   //  ***  Public Safety  ***  //
   var publicSafetyMarker = new google.maps.Marker({
     position: {
       lat: 47.6090,
       lng: -122.3145
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var publicSafetyLink = document.getElementById('publicSafety');
   // create object to store Info Box attributes
   var publicSafetyObj = {linkId: publicSafetyLink, linkName: 'Public Safety', linkDesc: "Located in University Services 102, open 8:30am-4:30pm. 24-Hour Emergency Line:  (206) 296-5911; 24-Hour Non-Emergency Line:  (206) 296-5990; Business Line: (206) 296-5992; Email: <a href='mailto:publicsafety@seattleu.edu'>publicsafety@seattleu.edu</a>."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(publicSafetyLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(publicSafetyMarker.getPosition());
     modifyTextBox(1, publicSafetyObj.linkName, publicSafetyObj.linkDesc);
   });
   // create click listener for marker
   publicSafetyMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(publicSafetyMarker.getPosition());
     modifyTextBox(1, publicSafetyObj.linkName, publicSafetyObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   publicSafetyMarker.addListener('mouseover', function() {
     modifyPinLabel(1, "Student Services", publicSafetyObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   publicSafetyMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });


   //  ***  Redhawk Resource Desk  ***  //
   var redhawkResourceHubDeskMarker = new google.maps.Marker({
     position: {
       lat: 47.608555,
       lng: -122.317994
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var redhawkResourceHubDeskLink = document.getElementById('redhawkResourceHubDesk');
   // create object to store Info Box attributes
   var redhawkResourceHubDeskObj = {linkId: redhawkResourceHubDeskLink, linkName: 'Redhawk Resource Hub Desk', linkDesc: "Located on the first floor of the Student Center, this desk offers free daily ORCA passes, locker rentals, and sells tickets for major campus events."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(redhawkResourceHubDeskLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(redhawkResourceHubDeskMarker.getPosition());
     modifyTextBox(1, redhawkResourceHubDeskObj.linkName, redhawkResourceHubDeskObj.linkDesc);
   });
   // create click listener for marker
   redhawkResourceHubDeskMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(redhawkResourceHubDeskMarker.getPosition());
     modifyTextBox(1, redhawkResourceHubDeskObj.linkName, redhawkResourceHubDeskObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   redhawkResourceHubDeskMarker.addListener('mouseover', function() {
     modifyPinLabel(1, "Student Services", redhawkResourceHubDeskObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   redhawkResourceHubDeskMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });

   //  ***  SU Supercopy  ***  //
   var supercopyMarker = new google.maps.Marker({
     position: {
       lat: 47.608936,
       lng: -122.317423
     },
     icon: icons['servicesIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var superCopyLink = document.getElementById('superCopy');
   // create object to store Info Box attributes
   var superCopyObj = {linkId: superCopyLink, linkName: 'SUperCopy', linkDesc: "Located in PAVL 010, Supercopy offers multiple services to students, such as printing, copying, mailing, and making your SU ID card. They also sell stamps and course packs. They take cash, check or card for payment. You can mail things from campus through this office! Perfect for when you need to mail back a rented textbook. Pick up time for USPS is 2pm Mon-Fri."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(superCopyLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(supercopyMarker.getPosition());
     modifyTextBox(1, superCopyObj.linkName, superCopyObj.linkDesc);
   });
   // create click listener for marker
   supercopyMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(supercopyMarker.getPosition());
     modifyTextBox(1, superCopyObj.linkName, superCopyObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   supercopyMarker.addListener('mouseover', function() {
     modifyPinLabel(1, "Student Services", superCopyObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   supercopyMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });

   //  ***  Fitness Center  ***  //
   var universityRecreationMarker = new google.maps.Marker({
     position: {
       lat: 47.606994,
       lng: -122.313798
     },
     icon: icons['venueIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var universityRecreationLink = document.getElementById('universityRecreation');
   // create object to store Info Box attributes
   var universityRecreationObj = {linkId: universityRecreationLink, linkName: 'William F. Eisiminger Fitness Center', linkDesc: "Located in the Redhawk Center, the Rec Center offers fitness classes, a weight room, cardio floor and studios. Check out their <a href='https://www.seattleu.edu/recreation/' target='_blank'>website</a> for quarterly hours, as well as pool hours."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(universityRecreationLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(universityRecreationMarker.getPosition());
     modifyTextBox(2, universityRecreationObj.linkName, universityRecreationObj.linkDesc);
   });
   // create click listener for marker
   universityRecreationMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(universityRecreationMarker.getPosition());
     modifyTextBox(2, universityRecreationObj.linkName, universityRecreationObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   universityRecreationMarker.addListener('mouseover', function() {
     modifyPinLabel(2, "Student Services", universityRecreationObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   universityRecreationMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });
   //  *** Services Markers end ***  //


   //  ***  The Bottom Line  ***  //
   var theBottomLineMarker = new google.maps.Marker({
     position: {
       lat: 47.610729,
       lng: -122.318657
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var theBottomLineLink = document.getElementById('theBottomLine');
   // create object to store Info Box attributes
   var theBottomLineObj = {linkId: theBottomLineLink, linkName: 'The Bottom Line', linkDesc: "If you have a class in Pigott, stop by The Bottom Line for coffee, baked goods, or a hot sandwich. Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(theBottomLineLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(theBottomLineMarker.getPosition());
     modifyTextBox(0, theBottomLineObj.linkName, theBottomLineObj.linkDesc);
   });
   // create click listener for marker
   theBottomLineMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(theBottomLineMarker.getPosition());
     modifyTextBox(0, theBottomLineObj.linkName, theBottomLineObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   theBottomLineMarker.addListener('mouseover', function() {
     modifyPinLabel(0, "Food on or Near Campus", theBottomLineObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   theBottomLineMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });

   //  ***  The Byte  ***  //
   var theByteMarker = new google.maps.Marker({
     position: {
       lat: 47.608912,
       lng: -122.318623
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var theByteLink = document.getElementById('theByte');
   // create object to store Info Box attributes
   var theByteObj = {linkId: theByteLink, linkName: 'The Byte', linkDesc: "Located on the second floor of the Lemieux Library, The Byte offers a great place to grab a coffee or snack while studying. Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(theByteLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(theByteMarker.getPosition());
     modifyTextBox(0, theByteObj.linkName, theByteObj.linkDesc);
   });
   // create click listener for marker
   theByteMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(theByteMarker.getPosition());
     modifyTextBox(0, theByteObj.linkName, theByteObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   theByteMarker.addListener('mouseover', function() {
     modifyPinLabel(0, "Food on or Near Campus", theByteObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   theByteMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });

   //  ***  The Side Bar  ***  //
   var theSideBarMarker = new google.maps.Marker({
     position: {
       lat: 47.609565,
       lng: -122.317597
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var theSideBarLink = document.getElementById('theSideBar');
   // create object to store Info Box attributes
   var theSideBarObj = {linkId: theSideBarLink, linkName: 'The Sidebar', linkDesc: "While located in the Law School, this cafe is open to all at SU. Known for their grilled cheeses, be sure to check out The Side Bar. Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(theSideBarLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(theSideBarMarker.getPosition());
     modifyTextBox(0, theSideBarObj.linkName, theSideBarObj.linkDesc);
   });
   // create click listener for marker
   theSideBarMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(theSideBarMarker.getPosition());
     modifyTextBox(0, theSideBarObj.linkName, theSideBarObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   theSideBarMarker.addListener('mouseover', function() {
     modifyPinLabel(0, "Food on or Near Campus", theSideBarObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   theSideBarMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });


   //  ***  Student Center Dining Options  ***  //
   var stcnDiningMarker = new google.maps.Marker({
     position: {
       lat: 47.608298,
       lng: -122.318114
     },
     icon: icons['foodIcon'].icon,
     map: map,
   });
   // create variable to store b-coloumn link ID
   var stcnDiningLink = document.getElementById('stcnDining');
   // create object to store Info Box attributes
   var stcnDiningObj = {linkId: stcnDiningLink, linkName: 'Cherry Street Market and The Hawks Nest', linkDesc: "On the second floor of the Student Center, you will find the <strong>Cherry Street Market</strong>, our main dining hall location on campus; serving a variety of breakfast, lunch, and dinner options every day. On the third floor of the Student Center, check out the <strong>Hawk's Nest Bistro</strong>-a great place to grab a late night meal! Visit the <a href='https://www.dineoncampus.com/seattleu' target='_blank'>Redhawk Dining website</a> for hours and daily menu."};
   // create dom listener for b-coloumn anchor link
   google.maps.event.addDomListener(stcnDiningLink, 'click', function() {
     map.setZoom(19);
     map.setCenter(stcnDiningMarker.getPosition());
     modifyTextBox(0, stcnDiningObj.linkName, stcnDiningObj.linkDesc);
   });
   // create click listener for marker
   stcnDiningMarker.addListener('click', function() {
     map.setZoom(19);
     map.setCenter(stcnDiningMarker.getPosition());
     modifyTextBox(0, stcnDiningObj.linkName, stcnDiningObj.linkDesc);
     $("#PinLabel").hide();
   });
   // create mouseover listener for marker label
   stcnDiningMarker.addListener('mouseover', function() {
     modifyPinLabel(0, "Food on or Near Campus", stcnDiningObj.linkName);
     $("#VenueTextBox").hide();
   });
   // Click Listener for Pin Labels
   stcnDiningMarker.addListener('mouseout', function() {
     $("#PinLabel").hide();
   });
 }
//eof
