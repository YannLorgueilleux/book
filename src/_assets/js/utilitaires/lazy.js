// UTILITAIRE LazyLoad des image/frame/video/script
// Suivant -> http://dinbror.dk/blog/blazy/?ref=github#Callback
// - Dépendance : blazy-master
//                utilitaires/classies.js

var website = website || {};

var website = (function (publics) {
    "use strict";
    var privates = {};


      publics.lazy = function () {

        var bLazy = new Blazy({
          offset: 0,
          selector: 'img' , // all images
          // CALLBACK
          success: function(ele){
              // Image has loaded
              classies.addClass(ele, 'animated fadeInUp delayEffect');
          },

          error: function(ele, msg){
            if(msg === 'missing'){
                // Data-src is missing
            }
            else if(msg === 'invalid'){
                // Data-src is invalid
            }
          },
          breakpoints: [{
            width: 420 // max-width
          , src: 'data-src-small'
          }
            , {
              width: 768 // max-width
            , src: 'data-src-medium'
          }]

        });
      }

    return publics;

})( website || {} );
