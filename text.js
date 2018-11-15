var label = new Label({
  map: map
});
label.bindTo('position', marker, 'position');
label.bindTo('text', marker, 'position');
};


var service = new google.maps.places.PlacesService(map);
