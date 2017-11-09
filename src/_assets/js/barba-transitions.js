// TRANSITIONS DE BARBA
// - Dépendance : barba.js
//              : utilitaires/classies.js

var website = website || {};

var website = (function (publics) {
    "use strict";
    var privates = {};


    publics.barba = function () {

      // Initialise Barba : transition inter-pages
    	Barba.Pjax.start();
      // Ecoute les liens cliquer et lui associé une transition
      Barba.Dispatcher.on('linkClicked', function(element, event) {
        //recupere le type de transition à appliquer (data-transition du link);
        var transition = element.getAttribute('data-transition');


        console.log('LISTENER -> linkClicked :  ' +transition);
        switch (transition)
        {
           case 'section':
             Barba.Pjax.getTransition = function() {
               return SectionsTransition;
             };
           break;

           case 'projet':
           // stock l'element cliquer en global
            publics.elementClic = element;
            //lance les transitions
             Barba.Pjax.getTransition = function() {
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
            //website.home.destroy_fullpage();
        }
      });



      //------- PROJETS ------------
      var pageProjets = Barba.BaseView.extend({
        namespace: 'projets',
        onEnter: function() {
            console.log ('PROJETS | VIEWS ->  onEnter() // The new Container is ready and attached to the DOM.');
            //alert ('The new Container is ready and attached to the DOM');
            website.prepare_projets();
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
               .all([this.newContainerLoading, , this.step1() ])
               .then(this.step2.bind(this));
        },
        step1:function() {
          var _this = this;
          var ancien = this.oldContainer;


          var elementClic = website.elementClic;
          //var image = elementClic.getElementsByTagName('img')[0];
          privates.cloneElement(elementClic);


          privates.masque_header();
          privates.masque_elements(ancien);

          setTimeout(function(){
            var clone = document.getElementById('clone');
            publics.addClass(clone , 'pleinePage');
          }, 200);

          setTimeout(function () {
            var body = document.getElementsByTagName('body')[0];
            publics.addClass( body ,'loading');
          }, 600 );


        },

        step2:function() {

          var _this = this;
          var nouveau = this.newContainer;
          var ancien = this.oldContainer;
          var body = document.getElementsByTagName('body')[0];

          publics.addClass(nouveau , 'nouvellePage');

          setTimeout(function(){
            // Cache l'ancienne Page
            ancien.style.display = 'none';
            // affiche la nouvelle Page
            nouveau.style.visibility = 'visible';
          }, 1600);


          setTimeout(function(){
            // Masque le panneau Loading
            publics.addClass(body , 'loadingComplete');
          }, 1800, body);


          setTimeout(function(){
            // Supprime le panneau Loading
            publics.removeClass( body ,'loading loadingComplete');

            privates.destroyClone();


            // Affiche le menu
            privates.affiche_header();

            _this.done();

          }, 2200 , body);

        }
      });

      //  ====================================
      // TRANSITIONS SECTIONS
      // =====================================

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

          var ancien = this.oldContainer;
          publics.addClass(ancien , 'anciennePage');


          privates.masque_header();
          privates.masque_elements(ancien);


          setTimeout(function () {
            var body = document.getElementsByTagName('body')[0];
            publics.addClass( body ,'loading');
          }, 400 );


        },

        step2: function() {

            var _this = this;
            var nouveau = this.newContainer;
            var ancien = this.oldContainer;
            var body = document.getElementsByTagName('body')[0];

            publics.addClass(nouveau , 'nouvellePage');

            setTimeout(function(){
              // Cache l'ancienne Page
              ancien.style.display = 'none';
              // affiche la nouvelle Page
              nouveau.style.visibility = 'visible';
            }, 1200);


            setTimeout(function(){
              // Masque le panneau Loading
              publics.addClass(body , 'loadingComplete');
            }, 1800, body);


            setTimeout(function(){
              // Supprime le panneau Loading
              publics.removeClass( body ,'loading loadingComplete');

              // Affiche le menu
              privates.affiche_header();

              _this.done();

            }, 2200 , body);


        }
      });
      //  ====================================
      // Initialise les views
      //  ====================================
      pageHome.init();
      pageProjets.init();

    };


    privates.affiche_header = function(){
      var header = document.querySelector('.header');
      publics.addClass(header,'fadeInDown');
      publics.removeClass(header,'fadeOutUp');
    }


    privates.masque_header = function(){
      var header = document.querySelector('.header');
      publics.addClass(header,'animated fadeOutUp');
    }


    privates.masque_elements = function(containerCible){

      //https://stackoverflow.com/questions/16302045/finding-child-element-of-parent-pure-javascript
      var sortieGauche = containerCible.querySelectorAll('.sortieGauche');
      var arraySortieGaucheLength = sortieGauche.length;

      for (var i = 0; i < arraySortieGaucheLength; i++) {
        //console.log(sortieDown[i]);
        setTimeout(function (ele) {
            console.log(ele);

            publics.addClass(ele,'animated fadeOutLeftBig');
        }, 50 * i, sortieGauche[i] );
      }



      //https://stackoverflow.com/questions/16302045/finding-child-element-of-parent-pure-javascript
      var sortieHaut = containerCible.querySelectorAll('.sortieHaut');
      var arraySortieHautLength = sortieHaut.length;

      for (var i = 0; i < arraySortieHautLength; i++) {
        //console.log(sortieDown[i]);
        setTimeout(function (ele) {
            console.log(ele);

            publics.addClass(ele,'animated fadeOutUp');
        }, 50 * i, sortieHaut[i] );
      }


      //https://stackoverflow.com/questions/16302045/finding-child-element-of-parent-pure-javascript
      var sortieBas = containerCible.querySelectorAll('.sortieBas');
      var arraySortieBasLength = sortieBas.length;

      for (var i = 0; i < arraySortieBasLength; i++) {
        //console.log(sortieDown[i]);
        setTimeout(function (ele) {
            console.log(ele);

            publics.addClass(ele,'animated fadeOutDown');
        }, 50 * i, sortieBas[i] );
      }



    }



      privates.cloneElement = function(element){

        // Determine la position relative au viewport de l'element d'origine
        var viewportOffset = element.getBoundingClientRect();
        //var clone = element.cloneNode(true);
        var clone = document.createElement('div');
        var image = element.getElementsByTagName('img')[0];
        var imageSrc = image.src;

        clone.id = "clone";
        clone.style.position = "fixed";
        clone.style.left = viewportOffset.left+'px';
        clone.style.top = viewportOffset.top+'px';
        clone.style.right = viewportOffset.right+'px';
        clone.style.bottom = viewportOffset.bottom+'px';


        clone.style.width = viewportOffset.width+'px';
        clone.style.height = viewportOffset.height+'px';




        // Creation du Div image
        var imageDiv = document.createElement('div');
        imageDiv.style.backgroundImage = "url("+imageSrc+")";
        imageDiv.className = 'imageClone';
        clone.appendChild(imageDiv);


        // Append the cloned ;
        document.body.appendChild(clone);


        // setTimeout(function(){
        //
        //    clone.style.left = '0px';
        //    //clone.style.right = '0px';
        //    clone.style.top = '0px';
        //    //clone.style.bottom = '0px';
        //    clone.style.width = 'auto';
        //    clone.style.height = '100%';
        //    clone.style.opacity = '0.1';
        //   //clone.style.position = "absolute";
        // }, 400);

      };



      privates.destroyClone = function () {

        var clone = document.getElementById('clone');


        if(clone){
          console.log(clone);

          //alert(clone);
          clone.parentNode.removeChild(clone);

        }
      };


      publics.coupe_loading = function () {
        window.history.back();
      }

    return publics;

})( website || {} );
