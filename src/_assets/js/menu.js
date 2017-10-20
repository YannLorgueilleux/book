// MODULE MENU GLOBAL
var Menu = ( function (self) {

  var menu = document.getElementById("menu-global");

  var afficheMenu = function () {
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
