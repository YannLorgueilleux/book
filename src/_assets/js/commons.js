var website = website || {};

var website = (function (publics) {
    "use strict";
    var privates = {};




    publics.prepare_home = function(){
        //website.checkScript('_assets/js/home.min.js');
        //  privates.destroyClone();
        website.chargeScript('_assets/js/home.min.js');
    };


    publics.prepare_projets = function(){
        //website.checkScript('_assets/js/home.min.js');
        //privates.destroyClone();
        website.chargeScript('_assets/js/projets.min.js');
    };




    publics.init = function () {

        //website.lazy();
        website.barba();

        Menu.init();

        //website.pageHome.init();
        //pageProjets.init();
    };


    // On execute le code commun sur la page courante.
    website.init();


    return publics;

})( website || {} );




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
