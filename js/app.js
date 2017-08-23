function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 12.34215, lng: 76.578827},
            scrollwheel: false,
            zoom: 15,
            styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]

        });

        var marker = new google.maps.Marker({
            position: {lat: 12.34215, lng: 76.578827},
            map: map,
            title: 'My location'
        });

        var infowindow = new google.maps.InfoWindow({
            content: "I live somewhere here"
          });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

        var myLatLng = new google.maps.LatLng(12.34215,76.578827);
        map.setCenter(myLatLng);


    } // close function here

//scrollspy 
$('body').scrollspy({
 target: '.navbar',
 offset: 200 
});
        
 // smooth scrolling
$('nav a, .down-button a').bind('click', function () {
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 103
    }, 2000, 'easeInOutExpo');
    event.preventDefault();
});

//WOW js
new WOW().init();