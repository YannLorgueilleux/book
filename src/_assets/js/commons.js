var website = website || {};

var website = (function (publics) {
    "use strict";
    var privates = {};

    //TODO: revoir l'init






    privates.cloneElement = function(element){

      // Determine la position relative au viewport de l'element d'origine
      var viewportOffset = element.getBoundingClientRect();
      var clone = element.cloneNode(true);

      clone.style.position = "fixed";
      clone.style.left = viewportOffset.left+'px';
      clone.style.top = viewportOffset.top+'px';
      clone.style.width = viewportOffset.width+'px';
      clone.style.height = viewportOffset.height+'px';
      clone.setAttribute('href', '#nogo');

      clone.className += " projet__lien__clone";

      // Append the cloned ;
      document.body.appendChild(clone);


      setTimeout(function(){

        clone.style.left = '0px';
        clone.style.top = '0px';
        clone.style.width = '100%';
        clone.style.height = '380px';

        //clone.style.position = "absolute";
      }, 100);

    };



    publics.prepare_home = function(){
        //website.checkScript('_assets/js/home.min.js');
        website.chargeScript('_assets/js/home.min.js');
    };




    publics.init = function () {

        website.lazy();
        website.barba();

        Menu.init();

        //website.pageHome.init();
        //pageProjets.init();
    };


    // On execute le code commun sur la page courante.
    website.init();


    return publics;

})( website || {} );




/*******************/
/* website.projets */
/*******************/


(function (publics) {
    "use strict";

    publics.init_page = function () {
      console.log(' Initialisation de page projets ');
      //alert ('projet');
      //jQuery('body').addClass('page-projets');
     };
    publics.init = function () {
        website.lazy();
        website.projets.init_page();
    };
}(website.projets = {}));


/*******/
/* Run */
/*******/
/*$(function () {
    "use strict";
    //$.lazyLoadXT.onload.addClass = 'animated bounceOutLeft';
    var specific = $("body").attr("class").split(" ")[0].replace(/-/g, "");
    website.init();
    if (website[specific] !== undefined) {
        website[specific].init();
    }
});
*/
