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
        scrollBar : true,
        lazyLoading: false
      });
     };
    /* Destructruction de fullpage.js */
     publics.destroy_fullpage = function() {
        $.fn.fullpage.destroy('all');
     };

     publics.init_smartscroll = function() {
       var options = {
         mode: "vp", // "vp", "set"
         autoHash: true,
         sectionScroll: true,
         initialScroll: true,
         keepHistory: true,
         sectionWrapperSelector: ".section-wrapper",
         sectionClass: "section",
         animationSpeed: 600,
         headerHash: "header",
         breakpoint: null,
         eventEmitter: null,
         dynamicHeight: false
       };
       $.smartscroll(options);
     };

    publics.init = function () {
        //website.home.init_fullpage();
    };
}(website.home = {}));
