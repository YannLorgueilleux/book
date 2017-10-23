
//UTILITARE : manipule  les clasqs
//suivant ->  https://jaketrent.com/post/addremove-classes-raw-javascript/


var website = website || {};

var website = (function (publics) {

    "use strict";
    //var privates = {};


    publics.hasClass = function(ele,cls){
      console.log(ele);
      return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }

    publics.addClass =  function (ele,cls) {
      if (!publics.hasClass(ele,cls)) ele.className += " "+cls;
    }

    publics.removeClass = function (ele,cls) {
      if (publics.hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
      }
    }


    return publics;

  })( website || {} );
