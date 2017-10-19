var website = website || {};

(function (publics) {
    "use strict";
    var privates = {};
    //TODO: revoir l'init

    publics.barba = function () {

      // Initialise Barba : transition inter-pages
    	Barba.Pjax.start();
      // Ecoute les liens cliquer et lui associé une transition
      Barba.Dispatcher.on('linkClicked', function(element, event) {
        //recupere le type de transition à appliquer (data-transition du link);
        var transition = ($(element).attr("data-transition"));
        console.log('LISTENER -> linkClicked :  ' +transition);
        switch (transition)
        {
           case 'section':
            $('body').addClass('SectionTransition');
            console.log("add body class");
             Barba.Pjax.getTransition = function() {
               return SectionsTransition;
             };
           break;

           case 'projet':
              privates.cloneElement(element);

             Barba.Pjax.getTransition = function(clone) {
               return ProjetTransition;
             };
           break;

           //default: statement(s)
        }

      });


      // ------ HOME --------------
      var pageHome = Barba.BaseView.extend({
        namespace: 'home',
        onEnter: function() {
          // The new Container is ready and attached to the DOM.
            console.log ('HOME | VIEWS ->  onEnter() // The new Container  is ready and attached to the DOM.');
            website.prepare_home();

        },
        onEnterCompleted: function() {
          // The Transition has just finished.
          console.log  ('HOME | VIEWS ->  onEnterCompleted()  pageHome // The Transition has just finished..');
          //alert ('toto');
          // TODO: promesse d'avoir le fichier script chargé pour lancer l'init
          website.home.init()
        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
            console.log  ('HOME | VIEWS ->  onLeave()  // A new Transition toward a new page has just started.');


        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
            console.log ('HOME | VIEWS ->  onLeaveCompleted() // The Container has just been removed from the DOM.');
            //$.fn.fullpage.destroy();
            website.home.destroy_fullpage();
        }
      });



      //------- PROJETS ------------
      var pageProjets = Barba.BaseView.extend({
        namespace: 'projets',
        onEnter: function() {
            console.log ('PROJETS | VIEWS ->  onEnter() // The new Container is ready and attached to the DOM.');
            //alert ('The new Container is ready and attached to the DOM');
        },
        onEnterCompleted: function() {
            console.log  ('PROJETS | VIEWS ->  onEnterCompleted()   // The Transition has just finished..');
            //alert (' The Transition has just finished..');
            website.projets.init();
        },
        onLeave: function() {
            console.log  ('PROJETS | VIEWS ->  onLeave()  // A new Transition toward a new page has just started.');
        },
        onLeaveCompleted: function() {
            console.log ('PROJETS | VIEWS ->  onLeaveCompleted() // The Container has just been removed from the DOM.');
        }
      });

      //------- PROJET ------------
      var pageProjet = Barba.BaseView.extend({
        namespace: 'projet',
        onEnter: function() {
            console.log ('PROJET | VIEWS ->  onEnter() // The new Container is ready and attached to the DOM.');
            //alert ('The new Container is ready and attached to the DOM');
        },
        onEnterCompleted: function() {
            console.log  ('PROJET | VIEWS ->  onEnterCompleted()   // The Transition has just finished..');
            //alert (' The Transition has just finished..');
            //website.projets.init();
        },
        onLeave: function() {
            console.log  ('PROJET | VIEWS ->  onLeave()  // A new Transition toward a new page has just started.');
        },
        onLeaveCompleted: function() {
            console.log ('PROJET | VIEWS ->  onLeaveCompleted() // The Container has just been removed from the DOM.');
        }
      });

      //  ====================================
      // TRANSITIONS
      // =====================================
      var ProjetTransition = Barba.BaseTransition.extend({
        start: function() {
          Promise
               .all([this.newContainerLoading])
               .then(this.step1.bind(this));
        },
        step1:function() {
          var _this = this;
          var $nouveau = $(this.newContainer);
          var $ancien = $(this.oldContainer);

          $ancien.find('.projets__item').addClass('animated fadeOutLeftBig');
          $ancien.find('.projets__item').addClass('animated fadeOutRightBig');

          setTimeout(function(){
            //$ancien.hide();
          }, 1000);


          setTimeout(function(){
            $nouveau.css({
              visibility : 'visible'
            });
              _this.done();
          }, 1200);


        },


      });


      var SectionsTransition = Barba.BaseTransition.extend({

        start: function() {
        console.log ('TRANSITION -> start()');
          //Promise that will indicate the loading of the next container.
          //this.newContainerLoading.then(this.finish.bind(this));
          Promise
               .all([this.newContainerLoading, this.step1() ])
               .then(this.step2.bind(this));

        },

        step1: function() {
          console.log ('TRANSITION -> step1()');

          //$('.titre-principal').addClass('animated zoomOutLeft');

          // $("body").css('border' , '2px solid red');


          // this.oldContainer is the HTMLElement of the old Container
          //$('body').addClass('SectionTransitionStep1');
          //$('.titre-principal').removeClass('zoomInLeft animated').delay( 1800 ).addClass('animated zoomOutLeft');


          //return $(this.oldContainer).animate({ opacity: 0 }).promise();
          //return $(this.oldContainer).addClass('oldContainer').delay( 800 ).promise();


          //  function sleep(miliseconds) {
          //     var currentTime = new Date().getTime();
          //
          //     while (currentTime + miliseconds >= new Date().getTime()) {
          //     }
          //  }
          //  //
          // sleep(2000);

        },

        step2: function() {

            var _this = this;
            var $nouveau = $(this.newContainer);
            var $ancien = $(this.oldContainer);

            console.log($ancien);


            $ancien.find('.titre-principal').addClass('animated zoomOutLeft');




            setTimeout(function(){
              $ancien.hide();
            }, 1000);


            setTimeout(function(){
              $nouveau.css({
                visibility : 'visible'
              });
                _this.done();
            }, 1200);


        },

        step3: function() {
          console.log ('TRANSITION -> step2()');


           // this.oldContainer is the HTMLElement of the old Container
           $('body').removeClass('SectionTransitionStep1');
           $('body').addClass('SectionTransitionStep2');
           //document.body.scrollTop = 0;
           //this.done();
           //
          //  function sleep(miliseconds) {
          //     var currentTime = new Date().getTime();
           //
          //     while (currentTime + miliseconds >= new Date().getTime()) {
          //     }
          //  }
          //  //
          //   sleep(2000);





           var _this = this;
             var $el = $(this.newContainer);

             $(this.oldContainer).hide();

             $el.css({
               visibility : 'visible',
               opacity : 0
             });

             $el.animate({ opacity: 1 }, 400, function() {
               /**
                * Do not forget to call .done() as soon your transition is finished!
                * .done() will automatically remove from the DOM the old Container
                */
                _this.done();

             });



        },
      });
      //  ====================================
      // Initialise les views
      //  ====================================
      pageHome.init();
      pageProjets.init();

    };



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
        privates.checkScript('_assets/js/home.min.js');
    };




    /* VERIFIER PRESENCE D'UN SCRIPT */
    privates.checkScript = function(scriptLocationAndName) {
      //great suggestion @Jasper
      // https://stackoverflow.com/questions/9521298/verify-external-script-is-loaded
      var len = $('script[src*="'+scriptLocationAndName+'"]').length;

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

    /* AJOUT EFFET ANIMATE;CSS aux elements LAZY */
    $.extend($.lazyLoadXT, {
      edgeY:  100,
      srcAttr: 'data-src',
      scrollContainer : '.fp-scrollable'
    });




     publics.effet_lazy =  function() {

       $.lazyLoadXT.onload = function() {

           var $el = $(this);
           $el
               .removeClass('lazy-hidden')
               .addClass('animated fadeInUp delayEffect' );
       };
     };



    /* Aperçu des produits */
    privates.initOverview = function ($component) { /* ... */ };
    privates.defilOverview = function ($component) { /* ... */ };
    privates.manageOverviewArrows = function ($component) { /* ... */ };
    publics.overview = function ($component) { /* ... */ };
    // Le validateur de formulaire va nous resservir pour la page de contact. Il est donc commun à tout le site.
    // Cependant le JavaScript spécifique à la newsletter est déporté dans « home.js ».
    // Pour que « validateForm » soit accessible maintenant en dehors de la zone commune, il passe publique.
    /* Validateur de formulaire */
    //publics.validateForm = function (/* formulaire */, callback) { /* ... */ };






    /* Retour en haut de page */
    publics.backToTop = function () { alert('backtotop')/* ... */ };
    // On initialise les fonction que l'on souhaite utiliser.
    publics.init = function () {

        website.barba();
        //website.effet_lazy();
        Menu.init();
        //website.pageHome.init();
        //pageProjets.init();
    };
}(website));
// On execute le code commun sur la page courante.
//website.init();


/*******************/
/* website.projets */
/*******************/
(function (publics) {
    "use strict";
    /* Initialisation de fullpage.js */
    publics.init_page = function () {
      console.log('/* Initialisation de page projets */');
      //alert ('projet');
      jQuery('body').addClass('page-projets');
     };
    publics.init = function () {
        website.projets.init_page();
    };
}(website.projets = {}));


/*******/
/* Run */
/*******/
$(function () {
    "use strict";
    //$.lazyLoadXT.onload.addClass = 'animated bounceOutLeft';
    var specific = $("body").attr("class").split(" ")[0].replace(/-/g, "");
    website.init();
    if (website[specific] !== undefined) {
        website[specific].init();
    }
});
