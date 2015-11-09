function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(42.055712, -87.674393),
          zoom: 16 
        };
        var markerInfo = [[42.056001, -87.686838,'./listing_page.html'],
                          [42.058438, -87.684585,'./listing2_page.html'],
                          [42.052289, -87.681774,'./listing_page.html'],
                          [42.055746, -87.681602,'./listing_page.html'],
                          [42.050201, -87.684799,'./listing_page.html']]
                                             
        
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var myLatlng;
        var marker;
        for(i=0;i<markerInfo.length;i++) {

          myLatlng = new google.maps.LatLng(markerInfo[i][0],
                                            markerInfo[i][1]);
          marker = new google.maps.Marker({
                          position: myLatlng,
                          map: map,
                          title: 'Click to view listing',
                          url: markerInfo[i][2]
                        });
          
          google.maps.event.addListener(marker, 'click', function() {
                            window.location.href = marker.url;
                            });
        }
      }
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(
        function() {

          $("#search-btn").click( function() {
            $( "#results-row" ).accordion( "option", "active", 0 );
          });


          $(function() {
            $("#results-row").accordion({
              collapsible: true,
              heightStyle: "content",
              alwaysOpen: false,
              active: false
              });
          });
      }); 

