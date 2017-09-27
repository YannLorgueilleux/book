/*******************/
/* website.home */
/*******************/
(function (publics) {
    "use strict";
    /* Initialisation de fullpage.js */
    publics.init_fullpage = function () {
      console.log('/* Initialisation de fullpage.js */');
      $('#fullpage').fullpage({
        scrollOverflow:true,
        navigation: true,
        scrollBar : false
      });

     };
    /* Destructruction de fullpage.js */
     publics.destroy_fullpage = function() {
        $.fn.fullpage.destroy('all');
     };


    publics.init = function () {
        website.home.init_fullpage();
    };
}(website.home = {}));
