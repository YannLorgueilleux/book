var website = website || {};

(function (publics) {
    "use strict";
    var privates = {};


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
             Barba.Pjax.getTransition = function() {
               return SectionsTransition;
             };
           break;

           case 'page':
             Barba.Pjax.getTransition = function() {
               return PagesTransition;
             };
           break;


           case 'date':
            $('body').addClass('CvTransition');
             Barba.Pjax.getTransition = function() {
               //alert ('clicDate');
               return CvTransition;
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

          // TODO : promesse d'avoir le fichier script chargé pour lancer l'init
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
        },
        onEnterCompleted: function() {
            console.log  ('PROJETS | VIEWS ->  onEnterCompleted()   // The Transition has just finished..');
            website.projets.init();
        },
        onLeave: function() {
            console.log  ('PROJETS | VIEWS ->  onLeave()  // A new Transition toward a new page has just started.');
        },
        onLeaveCompleted: function() {
            console.log ('PROJETS | VIEWS ->  onLeaveCompleted() // The Container has just been removed from the DOM.');
        }
      });


      //  ====================================
      // TRANSITIONS
      // =====================================
      var SectionsTransition = Barba.BaseTransition.extend({
        start: function() {
        console.log ('TRANSITION -> start()');
          //Promise that will indicate the loading of the next container.
          //this.newContainerLoading.then(this.finish.bind(this));
          Promise
               .all([this.newContainerLoading, this.step1()])
               .then(this.step2.bind(this));

        },
        step1: function() {
          console.log ('TRANSITION -> step1()');
           // this.oldContainer is the HTMLElement of the old Container
          // $('body').addClass('SectionTransitionStep1');
          return $(this.oldContainer).animate({ opacity: 0 }).promise();
           //return $(this.oldContainer).addClass('oldContainer').delay( 800 ).promise();
        },
        step2: function() {
          console.log ('TRANSITION -> step2()');
           // this.oldContainer is the HTMLElement of the old Container
          // $('body').removeClass('SectionTransitionStep1');
           //document.body.scrollTop = 0;
           //this.done();


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
        //website.openMenu();
        //website.search();
        website.barba();
        //website.Sections.init();
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
    var specific = $("body").attr("class").split(" ")[0].replace(/-/g, "");
    website.init();
    if (website[specific] !== undefined) {
        website[specific].init();
    }
});
