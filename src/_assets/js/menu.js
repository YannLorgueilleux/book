// MODULE MENU GLOBAL
// Dépendances -> utilitaires/classies.js


var Menu = ( function (self) {

  var menu = document.getElementById("menu");
  var burger = document.getElementById("burger");


  var afficheMenu = function () {
    setTimeout(function(){
      //$ancien.hide();
      console.log (menu);
      menu.classList.add('animated');
      menu.classList.add('slideInRight');
    }, 1500);
  }


  burger.addEventListener("click",function(e){

      if(classies.hasClass( website.body , 'js-menu' )){
        classies.removeClass( website.body , 'js-menu' );
      }else{
        classies.addClass( website.body , 'js-menu' );
      }

  },false);



  self.init = function () {
    afficheMenu();
  }



  return self;
} ) ( Menu || {} );
