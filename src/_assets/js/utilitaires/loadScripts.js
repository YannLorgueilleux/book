//  UTILITAIRE -> detect et load script
var website = website || {};

var website = (function (publics) {

    "use strict";
    var privates = {};








    //TODO: verifier que le script n'est pas deja present
    /* VERIFIER PRESENCE D'UN SCRIPT */
   privates.isMyScriptLoaded = function (url) {

      var scripts = document.getElementsByTagName('script');
      for (var i = scripts.length; i--;) {
          if (scripts[i].src == url) return true;
      }
      return false;
    }



    publics.chargeScript = function(url){
      if( !privates.isMyScriptLoaded(url) ){
        var script = document.createElement('script');
        script.src = url
        script.onload = privates.fileOnLoad;
        website.body.appendChild(script);
      }
    }




// https://stackoverflow.com/questions/8718303/javascript-to-detect-when-external-javascripts-are-loading
/*
    var file = [];
    var loaded = [];
    var head = document.getElementsByTagName('head')[0];

    privates.fileOnLoad =
    // Pass the arrays to your function
    (function(file, loaded){ return function(){

      loaded.push(true);

      // Print the number of files loaded
      document.getElementById("demo").innerHTML +=
       "<br>"+loaded.length+" files loaded";

      if(file.length == loaded.length){

        alert("All files are loaded!");

        callback;
      }
    }})(file, loaded  );


    ////////////////////////////////////////////////
    ////                                        ////
    ////   Add the external files dynamically   ////
    ////                                        ////
    ////////////////////////////////////////////////

    file[0] = document.createElement('script');
    file[0].src =
    "https://maps.googleapis.com/maps/api/js?v=3.exp";
    file[0].onload = privates.fileOnLoad;
    head.appendChild(file[0]);

    file[1] = document.createElement('script');
    file[1].src =
    "http://code.jquery.com/jquery-latest.js";
    file[1].onload = privates.fileOnLoad;
    head.appendChild(file[1]);

    file[2] = document.createElement('script');
    file[2].src =
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js";
    file[2].onload = privates.fileOnLoad;
    head.appendChild(file[2]);

    file[3] = document.createElement('link');
    file[3].rel = "stylesheet";
    file[3].href =
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css";
    file[3].onload = privates.fileOnLoad;
    head.appendChild(file[3]);

    file[4] = document.createElement('link');
    file[4].rel = "stylesheet";
    file[4].href =
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css";
    file[4].onload = privates.fileOnLoad;
    head.appendChild(file[4]);

*/










        /* VERIFIER PRESENCE D'UN SCRIPT */
        publics.checkScript = function(scriptLocationAndName) {








          //great suggestion @Jasper
          // https://stackoverflow.com/questions/9521298/verify-external-script-is-loaded
          //var len = $('script[src*="'+scriptLocationAndName+'"]').length;

          var len = document.querySelector('script[src="'+scriptLocationAndName+'"]');
          alert(len.length);


          if (len === 0) {
                  console.log ("script "+scriptLocationAndName+"not loaded");

                  privates.loadScript(scriptLocationAndName);

                  if ($('script[src*="'+scriptLocationAndName+'"]').length === 0) {
                      //alert('still not loaded');
                  }
                  else {
                      //alert('loaded now');
                  }
              }
              else {
                  console.log ('script '+scriptLocationAndName+' loaded');
              }

        };







        /* CHARGEMENT DE SCRIPTS */
        privates.loadScript = function(scriptLocationAndName) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptLocationAndName;
            head.appendChild(script);
        }




    return publics;

})( website || {} );
