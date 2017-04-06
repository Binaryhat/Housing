	/*!
 	* GM Google Maps
 	* 
 	* require: jQuery v1.12+
 	*/


        function initMap() {
          

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var uluru = {lat: 18.518137, lng: 73.942530}; // CHANGE COORDINATES HERE // // CHANGE COORDINATES HERE //        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },
          scrollwheel: false,
          draggable: true,
          center: uluru
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        var infowindow = new google.maps.InfoWindow({
               content:"We Are Here"
            });
        
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        var infowindow = new google.maps.InfoWindow({
               content:"We Are Here"
            });
        
            infowindow.open(map,marker);

      };


