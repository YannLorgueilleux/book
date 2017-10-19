// MODULE MENU GLOBAL
var Menu = ( function (self) {

  var menu = document.getElementById("menu-global");

  afficheMenu = function () {
    setTimeout(function(){
      //$ancien.hide();
      console.log (menu);
      menu.classList.add('animated');
      menu.classList.add('slideInLeft');
      }, 2000);
  }


  self.init = function () {
    afficheMenu();
  }



  return self;
} ) ( Menu || {} );
