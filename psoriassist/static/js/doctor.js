timePicker = {};

(function (timePicker) {
    timePicker.init = function () {

        jQuery.datetimepicker.setLocale('en');

        jQuery('#datetimepicker').datetimepicker({

        });
    };

    timePicker.init1 = function() {
        jQuery.datetimepicker.setLocale('en');

        jQuery('#datetimepicker1').datetimepicker({})
    }
}(timePicker));

$(timePicker.init);
$(timePicker.init1);

function initialize() {
  var pyrmont = new google.maps.LatLng(32.061798, 34.770160);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 13,
    scrollwheel: false
  });

  // Specify location, radius and place types for your Places API search.
  var request = {
    location: pyrmont,
    radius: '2500',
    types: ['doctor']
  };

  // Create the PlaceService and send the request.
  // Handle the callback with an anonymous function.
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
      }
    }
  });
}

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initialize);