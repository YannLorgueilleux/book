


/*
$(function() {
  //alert ('barba');
  // =====================================================
  // BARBA.JS -> Transition inter-pages
  // Initialise les views
  //Sections.init();
  pageHome.init();
  pageProjets.init();


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

  // The new container has been loaded and injected in the wrapper.
    Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
      //your listener
      //alert ('newPageReady + HTMLElementContainer'+container);
      $(container).addClass('newContainer');
    });


  // The transition has just finished and the old Container has been removed from the DOM.
    Barba.Dispatcher.on('transitionCompleted', function(currentStatus) {
      //your listener
      //alert ('newPageReady + HTMLElementContainer'+container);
      $('body').removeClass();
      $('.barba-container').removeClass('newContainer');
    });


});


*/


// ====================================
// VIEWS
// =====================================

/*
  var Sections = Barba.BaseView.extend({
    namespace: 'section',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        console.log ('VIEWS ->  onEnter() // The new Container is ready and attached to the DOM.');
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        console.log  ('VIEWS ->  onEnterCompleted()   // The Transition has just finished..');
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
        console.log  ('VIEWS ->  onLeave()  // A new Transition toward a new page has just started.');
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
        console.log ('VIEWS ->  onLeaveCompleted() // The Container has just been removed from the DOM.');
    }
  });
*/
/*
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
        // The new Container is ready and attached to the DOM.
        console.log ('PROJETS | VIEWS ->  onEnter() // The new Container is ready and attached to the DOM.');
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        console.log  ('PROJETS | VIEWS ->  onEnterCompleted()   // The Transition has just finished..');
        website.projets.init();

    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
        console.log  ('PROJETS | VIEWS ->  onLeave()  // A new Transition toward a new page has just started.');
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
        console.log ('PROJETS | VIEWS ->  onLeaveCompleted() // The Container has just been removed from the DOM.');
    }
  });
*/


//  ====================================
// TRANSITIONS
// =====================================
/*
var SectionsTransition = Barba.BaseTransition.extend({
  start: function() {

  console.log ('TRANSITION -> start()');


  //  * This function is automatically called as soon the Transition starts
  //  * this.newContainerLoading is a Promise for the loading of the new container
  //  * (Barba.js also comes with an handy Promise polyfill!)

	  //alert ('start');
    //Promise that will indicate the loading of the next container.
    //this.newContainerLoading.then(this.finish.bind(this));
    Promise
         .all([this.newContainerLoading, this.step1()])
         .then(this.step2.bind(this));

  },


  step1: function() {
    console.log ('TRANSITION -> step1()');

     //* this.oldContainer is the HTMLElement of the old Container

     $('body').addClass('SectionTransitionStep1');
     return $(this.oldContainer).addClass('oldContainer').delay( 800 ).promise();
  },


  step2: function() {
    console.log ('TRANSITION -> step2()');

     //* this.oldContainer is the HTMLElement of the old Container

     $('body').removeClass('SectionTransitionStep1');

     document.body.scrollTop = 0;
     this.done();

  },

});
*/



var CvTransition = Barba.BaseTransition.extend({
  start: function() {

  console.log ('TRANSITION -> start()');
    Promise
         .all([this.newContainerLoading, this.step1() ])
         .then(this.step3.bind(this));

  },


  step1: function() {
    console.log ('TRANSITION -> step1()');
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
     $('body').addClass('SectionTransitionStep1');




     return $(this.oldContainer).addClass('oldContainer').delay( 30000 ).promise();
  },


  step2: function() {
    console.log ('TRANSITION -> step2()');
      /**
     * this.oldContainer is the HTMLElement of the old Container
     */
     $('body').removeClass('SectionTransitionStep1');



  },


  step3: function() {
    console.log ('TRANSITION -> step3()');
      /**
     * this.oldContainer is the HTMLElement of the old Container
     */
     $('body').removeClass('SectionTransitionStep1');

     document.body.scrollTop = 0;
     this.done();

  },


});
