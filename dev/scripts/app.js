// // Initialize and add the map
// function initMap() {
//    // The location of Uluru
//    var uluru = {lat: 43.655604, lng: -79.385946};
//    // The map, centered at Uluru
//    var map = new google.maps.Map(
//        document.getElementById('map'), {zoom: 15, center: uluru});
//    // The marker, positioned at Uluru
//    var marker = new google.maps.Marker({position: uluru, map: map});
//  }

'use strict';

//smooth scroll starts
// Select all links with hashes
$('a[href*="#"]').click(function (event) {
  {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  }
});
//smooth scroll ends


//Scroll Magic code
var controller = new ScrollMagic.Controller();

var scrollMagicScene = function scrollMagicScene(elementID, classToAdd) {
  var newScene = new ScrollMagic.Scene({
    triggerElement: elementID,
    offset: -200
  }).setClassToggle(elementID, classToAdd).addTo(controller);
};

scrollMagicScene("#serviceBoxInfo", "piece-fade-in");
