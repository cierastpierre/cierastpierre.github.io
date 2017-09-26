// Step 1: Initialize firebase

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDO375DkphyjV3qEZCDu9xsQSF314W6fqk",
    authDomain: "reservation-site-537d0.firebaseapp.com",
    databaseURL: "https://reservation-site-537d0.firebaseio.com",
    projectId: "reservation-site-537d0",
    storageBucket: "reservation-site-537d0.appspot.com",
    messagingSenderId: "140956828038"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

 // Step 2: Create empty object for reservationData

  var reservationData = {};

  // Step 3: Click event for the "day" data

  $('.reservation-day li').on('click',function(){
  	reservationData.day = $(this).text();
   });

  // Step 4: Update the 'name' property when the form is submitted
  $('.reservations').on('submit', function(e){
  	// don't reload the page
  	e.preventDefault();

  	reservationData.name = $('.reservation-name').val();


  // Step 5: Post reservation info to firebase

  	database.ref('reservations').push(reservationData);
    getReservations();

  });

  // Step 6: Update the reservation view using Handlebars. Create function getReservations

function getReservations(){
	database.ref('reservations').on('child_added',function(list){
		var reservationList = $('.reservation-list');
		var reservations = list.val();
		var source = $('#reservation-template').html();
		var template = Handlebars.compile(source);
		var reservationTemplate = template(reservations);
		reservationList.append(reservationTemplate);
	});
}

  // Step 7: Define the Google Maps API callback


  // Step 8: Create the map using constructor


  // Step 9: Use the Marker Constructor to add a marker



// Bonus: Errors on the form 


