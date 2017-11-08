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
            //$('body').addClass('SectionTransition');
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
            //website.home.destroy_fullpage();
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
          var nouveau = this.newContainer;
          var ancien = this.oldContainer;

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

        },

        step2: function() {

            var _this = this;
            var nouveau = this.newContainer;
            var ancien = this.oldContainer;

            //https://stackoverflow.com/questions/16302045/finding-child-element-of-parent-pure-javascript
            var children = ancien.querySelectorAll( '.titre-principal');

            var arrayLength = children.length;
            for (var i = 0; i < arrayLength; i++) {
                //alert(children[i]);
                //Do something
                classies.addClass (children[i],'animated zoomOutLeft');
            }

            console.log(children);

            setTimeout(function(){
              //ancien.hide();
            }, 1000);


            setTimeout(function(){
            //  nouveau.css({
            //    visibility : 'visible'
            //  });
                _this.done();
            }, 1200);


        }
      });
      //  ====================================
      // Initialise les views
      //  ====================================
      pageHome.init();
      pageProjets.init();

    };


    return publics;

})( website || {} );
