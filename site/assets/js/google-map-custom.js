


// ******************************************************************************************
// Configuration Start
// ******************************************************************************************

//*********************Google MAP *********************/

var color = "#BB1616" // google map background colour
var saturation = 112 //
var mapLatitude=53.234467
var mapLongitude=50.262109//(Fist Value Latitude, Second Value ), get YOUR coordenates here!: http://itouchmap.com/latlong.html
var mapZoom_value=12 // Map zoom level parameter only numeric


// Google map marker example 2 locations
//map-marker #1
var marker1_Latitude=53.189771
var marker1_Longitude=50.090406
var marker1_content="<h2>Блинари, кафе-бистро</h2> Куйбышева, 98, Самара, Самарская обл., 443099" // marker or  on click content (Info Window)
var marker1_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!

//map-marker #2
var marker2_Latitude=53.232982
var marker2_Longitude=50.188669
var marker2_content="<h2>Блинари, кафе-бистро</h2>ул. Советской Армии, 235, Самара, Самарская обл., 443011" // marker or  on click content (Info Window)
var marker2_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!

/*//map-marker #3
var marker3_Latitude=53.186612
var marker3_Longitude=50.094169
var marker3_content="<h2>Блинари, кафе-бистро</h2> Ленинградская, 51, Самара, Самарская обл., 443099" // marker or  on click content (Info Window)
var marker3_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!

//map-marker #4
var marker4_Latitude=53.198381
var marker4_Longitude=50.104597
var marker4_content="<h2>Блинари, кафе-бистро</h2> Молодогвардейская, 131, Самара, Самарская обл., 443001" // marker or  on click content (Info Window)
var marker4_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!*/

//********************* Google MAP END *********************/



//****************************************************************************
// Google map
//****************************************************************************
//dragable mobile
var drag;
if($(window).width()<796){drag=false;}else{drag=true;}

/* googleMaps */

function map_canvas_loaded() {
	var latlng = new google.maps.LatLng(mapLatitude,mapLongitude);

	// setting styles here
	var styles = [
		{
			"featureType": "landscape",
			"stylers": [
				{"hue": "#000"},
				{"saturation": -100},
				{"lightness": 40},
				{"gamma": 1}
			]
		},
		{
			"featureType": "road.highway",
			"stylers": [
				{"hue": color},
				{"saturation": saturation},
				{"lightness": 20},
				{"gamma": 1}
			]
		},
		{
			"featureType": "road.arterial",
			"stylers": [
				{"hue": color},
				{"saturation": saturation},
				{"lightness": -10},
				{"gamma": 1}
			]
		},
		{
			"featureType": "road.local",
			"stylers": [
				{"hue": color},
				{"saturation": saturation},
				{"lightness": 20},
				{"gamma": 1}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{"hue": "#000"},
				{"saturation": -100},
				{"lightness": 15},
				{"gamma": 1}
			]
		},
		{
			"featureType": "poi",
			"stylers": [
				{"hue": "#000"},
				{"saturation": -100},
				{"lightness": 25},
				{"gamma": 1}
			]
		}
	];
	var options = {
		center : latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom : mapZoom_value,
		styles: styles
	};
	var map_canvas = new google.maps.Map(document.getElementById('map_canvas'), options);

	$('.mapone').click(function() {
		var location = new google.maps.LatLng('53.190255','50.094060');
		console.log(map_canvas);
		map_canvas.setCenter(location);
		map_canvas.setZoom(17);
	});

	$('.maptwo').click(function() {
        var location = new google.maps.LatLng('53.233511','50.192093');
        console.log(map_canvas);
        map_canvas.setCenter(location);
        map_canvas.setZoom(17);
    });

/*    $('.mapthree').click(function() {
        var location = new google.maps.LatLng('53.187273','50.098256');
        console.log(map_canvas);
        map_canvas.setCenter(location);
        map_canvas.setZoom(17);
    });

    $('.mapfour').click(function() {
        var location = new google.maps.LatLng('53.198171','50.108012');
        console.log(map_canvas);
        map_canvas.setCenter(location);
        map_canvas.setZoom(17);
    });*/

//	map_canvas.setCenter("53.233910,50.191160");
//	map_canvas.setPosition("53.23315402,50.18831328");
/*
	 $('#testMap').click(function() { //test_get Center map
	 	var myLat = map_canvas.getCenter().lat();
	 	var myLng = map_canvas.getCenter().lng();

	 	console.log("myLat: " + myLat);
	 	console.log("myLng: " + myLng);
	 });

     google.maps.event.addListener(map_canvas, "click", function (event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        console.log( latitude + ', ' + longitude );
    }); //end addListener*/

	//****************************************************************************
	// marker 1 content
	//****************************************************************************
	var pointer1 = new google.maps.LatLng(marker1_Latitude,marker1_Longitude);

	var marker1= new google.maps.Marker({
		position : pointer1,
		map : map_canvas,
		icon: marker1_pointerUrl //Custom Pointer URL
	});

	google.maps.event.addListener(marker1,'click',
		function() {
			var infowindow = new google.maps.InfoWindow(
				{content:marker1_content });
			infowindow.open(map_canvas,marker1);
		});
	//marker 1 END

	var infowindow = new google.maps.InfoWindow(
		{content:marker1_content });
	infowindow.open(map_canvas,marker1);

	//****************************************************************************
	// marker 2 content
	//****************************************************************************
	var pointer2 = new google.maps.LatLng(marker2_Latitude,marker2_Longitude);

	var marker2= new google.maps.Marker({
		position : pointer2,
		map : map_canvas,
		icon: marker2_pointerUrl //Custom Pointer URL
	});

	google.maps.event.addListener(marker2,'click',
		function() {
			var infowindow = new google.maps.InfoWindow(
				{content:marker2_content });
			infowindow.open(map_canvas,marker2);
		});
	// marker 2 END

	var infowindow = new google.maps.InfoWindow(
		{content:marker2_content });
	infowindow.open(map_canvas,marker2);

    //****************************************************************************
    // marker 3 content
    //****************************************************************************
   /* var pointer3 = new google.maps.LatLng(marker3_Latitude,marker3_Longitude);

    var marker3= new google.maps.Marker({
        position : pointer3,
        map : map_canvas,
        icon: marker3_pointerUrl //Custom Pointer URL
    });

    google.maps.event.addListener(marker3,'click',
        function() {
            var infowindow = new google.maps.InfoWindow(
                {content:marker3_content });
            infowindow.open(map_canvas,marker3);
        });
    //marker 3 END

    var infowindow = new google.maps.InfoWindow(
        {content:marker3_content });
    infowindow.open(map_canvas,marker3);*/

    //****************************************************************************
    // marker 4 content
    //****************************************************************************
    /*var pointer4 = new google.maps.LatLng(marker4_Latitude,marker4_Longitude);

    var marker4= new google.maps.Marker({
        position : pointer4,
        map : map_canvas,
        icon: marker4_pointerUrl //Custom Pointer URL
    });

    google.maps.event.addListener(marker4,'click',
        function() {
            var infowindow = new google.maps.InfoWindow(
                {content:marker4_content });
            infowindow.open(map_canvas,marker4);
        });
    //marker 4 END

    var infowindow = new google.maps.InfoWindow(
        {content:marker4_content });
    infowindow.open(map_canvas,marker4);*/
}

window.onload = function() {
	map_canvas_loaded();
};

/* End */

//map click






//Google map end 