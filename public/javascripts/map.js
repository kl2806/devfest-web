
// function initialize() {
//     var mapCanvas = document.getElementById('map-canvas');
//     var mapOptions = {
//       center: new google.maps.LatLng(44.5403, -78.5463),
//       zoom: 8,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     var map = new google.maps.Map(mapCanvas, mapOptions)
//   }

// google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, 'load', init);
    var latitude = 40.807536;
    var longitude = -73.962573;

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 17,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(latitude, longitude), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative",
                      "elementType":"all",
                      "stylers":[{"visibility":"on"},
                      {"lightness":33}]},
                      {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},
                      {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},
                      {"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},
                      {"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},
                      {"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},
                      {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: 'Snazzy!'
        });
        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(40.807546, -73.962583),
            map: map,
            title: 'Snazzy2!'
        });

        var marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(41.807536, -73.962573),
            map: map,
            title: 'Snazzy2!'
        });
         

}
// $(document).ready(function(){
//  var map = new GMaps({
//     div: '#map',
//     lat: 40.807536,
//     lng: -73.962573
//   });
// });

