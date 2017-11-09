
/*******************/
/* website.projets */
/*******************/


(function (publics) {
    "use strict";

    document.getElementById('frame').onmousedown = function() {
        //alert('Click just happened');

        $( ".slidee" ).addClass('scrolling');

        $( ".slidee li" ).each(function( index ) {
          var _this = $(this);
          _this.addClass('scrolling');
        });
    };


    document.getElementById('frame').onmouseup = function() {
        //alert('Click just happened');

        $( ".slidee" ).removeClass('scrolling');

        $( ".slidee li" ).each(function( index ) {
          var _this = $(this);
          _this.removeClass('scrolling');
        });
    };


        publics.init_sly = function() {
          //alert ('sly');

          var sly = new Sly(
            //frame
            document.getElementById('frame'),
            //options
            {
          	slidee:     null,  // Selector, DOM element, or jQuery object with DOM element representing SLIDEE.
          	horizontal: true, // Switch to horizontal mode.

          	// Item based navigation
          	itemNav:        'centered',  // Item navigation type. Can be: 'basic', 'centered', 'forceCentered'.
          	itemSelector:   null,  // Select only items that match this selector.
          	smart:          false, // Repositions the activated item to help with further navigation.
          	activateOn:     'mouseenter',  // Activate an item on this event. Can be: 'click', 'mouseenter', ...
          	activateMiddle: true, // Always activate the item in the middle of the FRAME. forceCentered only.

          	// Scrolling
          	scrollSource: 'body',  // Element for catching the mouse wheel scrolling. Default is FRAME.
          	scrollBy:     1,     // Pixels or items to move per one mouse scroll. 0 to disable scrolling.
          	scrollHijack: 300,   // Milliseconds since last wheel event after which it is acceptable to hijack global scroll.
          	scrollTrap:   false, // Don't bubble scrolling when hitting scrolling limits.

          	// Dragging
          	dragSource:    null,  // Selector or DOM element for catching dragging events. Default is FRAME.
          	mouseDragging: true, // Enable navigation by dragging the SLIDEE with mouse cursor.
          	touchDragging: true, // Enable navigation by dragging the SLIDEE with touch events.
          	releaseSwing:  true, // Ease out on dragging swing release.
          	swingSpeed:    0.2,   // Swing synchronization speed, where: 1 = instant, 0 = infinite.
          	elasticBounds: true, // Stretch SLIDEE position limits when dragging past FRAME boundaries.
          	interactive:   null,  // Selector for special interactive elements.

          	// Scrollbar
          	scrollBar:     document.getElementById('scrollbar'),  // Selector or DOM element for scrollbar container.
          	dragHandle:    true, // Whether the scrollbar handle should be draggable.
          	dynamicHandle: true, // Scrollbar handle represents the ratio between hidden and visible content.
          	minHandleSize: 50,    // Minimal height or width (depends on sly direction) of a handle in pixels.
          	clickBar:      true, // Enable navigation by clicking on scrollbar.
          	syncSpeed:     0.5,   // Handle => SLIDEE synchronization speed, where: 1 = instant, 0 = infinite.

          	// Pagesbar
          	pagesBar:       null, // Selector or DOM element for pages bar container.
          	activatePageOn: null, // Event used to activate page. Can be: click, mouseenter, ...
          	pageBuilder:          // Page item generator.
          		function (index) {
          			return '<li>' + (index + 1) + '</li>';
          		},

          	// Navigation buttons
          	forward:  null, // Selector or DOM element for "forward movement" button.
          	backward: null, // Selector or DOM element for "backward movement" button.
          	prev:     null, // Selector or DOM element for "previous item" button.
          	next:     null, // Selector or DOM element for "next item" button.
          	prevPage: null, // Selector or DOM element for "previous page" button.
          	nextPage: null, // Selector or DOM element for "next page" button.

          	// Automated cycling
          	cycleBy:       null,  // Enable automatic cycling by 'items' or 'pages'.
          	cycleInterval: 5000,  // Delay between cycles in milliseconds.
          	pauseOnHover:  false, // Pause cycling when mouse hovers over the FRAME.
          	startPaused:   false, // Whether to start in paused sate.

          	// Mixed options
          	moveBy:        300,     // Speed in pixels per second used by forward and backward buttons.
          	speed:         100,       // Animations speed in milliseconds. 0 to disable animations.
          	easing:        'swing', // Easing for duration based (tweening) animations.
          	startAt:       '200',    // Starting offset in pixels or items.
          	keyboardNavBy: null,    // Enable keyboard navigation by 'items' or 'pages'.

          	// Classes
          	draggedClass:  'dragged', // Class for dragged elements (like SLIDEE or scrollbar handle).
          	activeClass:   'active',  // Class for active items and pages.
          	disabledClass: 'disabled' // Class for disabled navigation elements.
          }
          //  ,

          //Callbacks
          // load: function () { alert ('load') ; },
        	// move: [
        	// 	function () {},
        	// 	function () {}
        	// ]

          );


          sly.on('load', function (eventName) {
            console.log(eventName); // 'load'
            console.log(this.pos);  // Sly position object
            // affiche SLIDEE
            $('.slidee').css('visibility', 'visible');


            $( ".slidee li" ).each(function( index ) {
              console.log( index + ": " + $( this ).text() );

              var _this = $(this);

              setTimeout(function () {
                _this.addClass('animated').addClass('fadeInRight');



              }, 200 * index);




            });


            setTimeout(function(){
              $('.slidee li').removeClass('animated').removeClass('fadeInRight').css('visibility','visible')
          }, 1500);



          });

          sly.on('move', function (eventName) {
            console.log(eventName); // 'load'
            console.log(this.pos);  // Sly position object
            // affiche SLIDEE
            //$('.slidee').css('visibility', 'visible');
            //$('.slidee img').addClass('animated').addClass('fadeInRight')
          });

          sly.init();
        };


    publics.init = function () {

      website.projets.init_sly();
        //website.lazy();
    };


}(website.projets = {}));

//website.projets.init();
