var label = new Label({
  map: map
});
label.bindTo('position', marker, 'position');
label.bindTo('text', marker, 'position');
};


var service = new google.maps.places.PlacesService(map);


google.maps.event.addListener(polygon, 'mouseover', function (e) {
    injectTooltip(e, polygon.someRandomData);
});

google.maps.event.addListener(polygon, 'mousemove', function (e) {
    moveTooltip(e);
});

google.maps.event.addListener(polygon, 'mouseout', function (e) {
    deleteTooltip(e);
});


/********************************************************************
 * moveTooltip(e)
 * update the position of the tooltip based on the event data
 ********************************************************************/
function moveTooltip(event) {
    if (tipObj && event) {
        //position it
        tipObj.style.top = event.Ba.clientY + window.scrollY + offset.y + "px";
        tipObj.style.left = event.Ba.clientX + window.scrollX + offset.x + "px";
    }
}

/********************************************************************
 * deleteTooltip(e)
 * delete the tooltip if it exists in the DOM
 ********************************************************************/
function deleteTooltip(event) {
    if (tipObj) {
        //delete the tooltip if it exists in the DOM
        document.body.removeChild(tipObj);
        tipObj = null;
    }
}

//create a global variable that will point to the tooltip in the DOM
var tipObj = null;

//offset along x and y in px
var offset = {
   x: 20,
   y: 20
};

/********************************************************************
* injectTooltip(e,data)
* inject the custom tooltip into the DOM
********************************************************************/
function injectTooltip(event, data) {
   if (!tipObj && event) {
       //create the tooltip object
       tipObj = document.createElement("div");
       tipObj.style.width = '100px';
       tipObj.style.height = '40px';
       tipObj.style.background = "white";
       tipObj.style.borderRadius = "5px";
       tipObj.style.padding = "10px";
       tipObj.style.fontFamily = "Arial,Helvetica";
       tipObj.style.textAlign = "center";
       tipObj.innerHTML = data;

       //position it
       tipObj.style.position = "fixed";
       tipObj.style.top = event.Ba.clientY + window.scrollY + offset.y + "px";
       tipObj.style.left = event.Ba.clientX + window.scrollX + offset.x + "px";

       //add it to the body
       document.body.appendChild(tipObj);
   }
}

/********************************************************************
* moveTooltip(e)
* update the position of the tooltip based on the event data
********************************************************************/
function moveTooltip(event) {
   if (tipObj && event) {
       //position it
       tipObj.style.top = event.Ba.clientY + window.scrollY + offset.y + "px";
       tipObj.style.left = event.Ba.clientX + window.scrollX + offset.x + "px";
   }
}

/********************************************************************
* deleteTooltip(e)
* delete the tooltip if it exists in the DOM
********************************************************************/
function deleteTooltip(event) {
   if (tipObj) {
       //delete the tooltip if it exists in the DOM
       document.body.removeChild(tipObj);
       tipObj = null;
   }
}















var popup, Popup;

/** Initializes the map and the custom popup. */
function initMap() {
  definePopupClass();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.9, lng: 151.1},
    zoom: 10,
  });

  popup = new Popup(
      new google.maps.LatLng(-33.866, 151.196),
      document.getElementById('content'));
  popup.setMap(map);
}

/** Defines the Popup class. */
function definePopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  Popup = function(position, content) {
    this.position = position;

    content.classList.add('popup-bubble-content');

    var pixelOffset = document.createElement('div');
    pixelOffset.classList.add('popup-bubble-anchor');
    pixelOffset.appendChild(content);

    this.anchor = document.createElement('div');
    this.anchor.classList.add('popup-tip-anchor');
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };
  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';

    if (display === 'block') {
      this.anchor.style.left = divPosition.x + 'px';
      this.anchor.style.top = divPosition.y + 'px';
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = 'auto';

    ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
     'pointerdown']
        .forEach(function(event) {
          anchor.addEventListener(event, function(e) {
            e.stopPropagation();
          });
        });
  };
}
