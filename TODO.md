### TODOs
| Filename | line # | TODO
|:------|:------:|:------
| _assets\js\barba-transitions.js | 121 | promesse d'avoir le fichier script chargé pour lancer l'init
| _assets\js\commons.js | 59 | promesse d'avoir le fichier script chargé pour lancer l'init
| _assets\css\book\projets.scss | 28 | mediaQueries
| _assets\_vendors\foundation-6.4.2\js\foundation.core.js | 183 | consider not making this a jQuery function
| _assets\_vendors\foundation-6.4.2\js\foundation.core.js | 184 | need way to reflow vs. re-initialize
| _assets\_vendors\foundation-6.4.2\js\foundation.offcanvas.js | 536 | improve the regex testing for this.
| _assets\_vendors\foundation-6.4.2\js\foundation.orbit.js | 58 | consider discussion on PR #9278 about DOM pollution by changeSlide
| _assets\_vendors\foundation-6.4.2\js\foundation.reveal.js | 104 | Figure out if we actually need to cache these values or if it doesn't matter
| _assets\_vendors\foundation-6.4.2\js\foundation.slider.js | 238 | update to calculate based on values set to respective inputs??
| _assets\_vendors\foundation-6.4.2\js\foundation.slider.js | 356 | clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
| _assets\_vendors\foundation-6.4.2\js\foundation.tooltip.js | 190 | combine some of the listeners like focus and mouseenter, etc.
| _assets\_vendors\foundation-6.4.2\js\foundation.tooltip.js | 459 | utilize resize event trigger
| _assets\_vendors\foundation-6.4.2\js\foundation.util.box.js | 67 | - if element is window, return only those values.
| _assets\_vendors\foundation-6.4.2\js\foundation.util.box.js | 120 | alter/rewrite to work with `em` values as well/instead of pixels
| _assets\_vendors\foundation-6.4.2\js\foundation.util.keyboard.js | 121 | 9438: These references to Keyboard need to not require global. Will 'this' work in this context?
| _assets\_vendors\fullPage.js\vendors\scrolloverflow.js | 1035 | check concat compatibility
| _assets\_vendors\fullPage.js\vendors\scrolloverflow.js | 1043 | check if we can use array.map (wide compatibility and performance issues)
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 356 | 9438: These references to Keyboard need to not require global. Will 'this' work in this context?
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 1108 | - if element is window, return only those values.
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 1161 | alter/rewrite to work with `em` values as well/instead of pixels
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 5502 | consider not making this a jQuery function
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 5503 | need way to reflow vs. re-initialize
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 7725 | improve the regex testing for this.
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 7833 | consider discussion on PR #9278 about DOM pollution by changeSlide
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 9180 | Figure out if we actually need to cache these values or if it doesn't matter
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 9984 | update to calculate based on values set to respective inputs??
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 10110 | clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 11503 | combine some of the listeners like focus and mouseenter, etc.
| _assets\_vendors\foundation-6.4.2\dist\js\foundation.js | 11775 | utilize resize event trigger
| _assets\_vendors\foundation-6.4.2\scss\components\_button.scss | 83 | Document button-base() mixin
| _assets\_vendors\foundation-6.4.2\scss\xy-grid\_cell.scss | 166 | Figure out if we need to pass breakpoint in here too.
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 108 | might be useful upstream in jquery itself ?
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 207 | the following $ and $.fn extensions can/probably should be moved into jquery.mobile.core.helpers
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 463 | remove support for widgetEventPrefix
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 628 | remove dual storage
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 886 | create a pull request for jquery ui to trigger this event
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 926 | remove dependency on the page widget for the keepNative.
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 977 | move loader class down into the widget settings
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 1036 | sweet jesus we need to break some of this out
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 1082 | verify that jquery.fn.html is ok to use in both cases here
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 1841 | a lot of duplication between popstate and hashchange
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 1893 | consider allowing for the explicit addition of callbacks
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 1899 | We really only want to set this up once
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2208 | all this crap is terrible, clean it up
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2351 | this is hyper confusing and should be cleaned up (ugh so bad)
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2372 | this is also convoluted and confusing
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2452 | reconsider name
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2527 | grab the original event here and use it for the synthetic event in the
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2556 | Do we really need all these conditions? Comparing location hrefs
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2573 | it might be better to only add to the history stack
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2612 | add a check here that `hashchange.navigate` is bound already otherwise it's
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2654 | first arg to add should be the href, but it causes issues in identifying
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2670 | consider queueing navigation activity until previous activities have completed
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 2672 | !! move the event bindings into callbacks on the navigate event
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 4306 | handle dialogs again
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 4360 | taging a page with external to make sure that embedded pages aren't removed
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 4679 | preserve the originally passed in path
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 4684 | the property names here are just silly
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 4902 | teach $.mobile.hijackable to operate on raw dom elements so the
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 4949 | teach $.mobile.hijackable to operate on raw dom elements so the link wrapping
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 5014 | overlap in logic from isExternal, rel=external check should be
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 5128 | roll the logic here into the handleHashChange method
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 5441 | remove the buttonMarkup giant selector and move it to the various modules
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 6552 | sort out a better way to track sub pages of the listview this is brittle
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 6792 | rename callback/deprecate and default to the item itself as the first argument
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 7084 | it would be nice to let the browser's handle the clicks and pass them
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 7243 | centralize for all widgets
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 7248 | Post 1.1--once we have time to test thoroughly--any classes manually applied to the original element should be carried over to the enhanced element, with an `-enhanced` suffix. See https://github.com/jquery/jquery-mobile/issues/3577
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 7353 | Each of these should have comments explain what they're for
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8106 | Post 1.1--once we have time to test thoroughly--any classes manually applied to the original element should be carried over to the enhanced element, with an `-enhanced` suffix. See https://github.com/jquery/jquery-mobile/issues/3577
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8143 | explore plugin registration
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8161 | values buttonId and menuId are undefined here
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8300 | possibly aggregate multiple select option classes
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8543 | this would be nice at the the mobile widget level
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8807 | remove the dependency on the screen deferred
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8899 | move blacklist to private method
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8939 | 
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 8952 | sort out why this._page isn't working
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9087 | no clear deliniation of what should be here and
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9176 | this can be moved inside the widget
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9206 | move inside _create
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9445 | centralize page removal binding / handling in the page plugin.
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9448 | extremely confusing dependency on the open method where the pagehide.remove
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9484 | exceedingly naive method to determine difference
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9714 | value is undefined at creation
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9718 | value is undefined at creation
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 9852 | Implement a mechanism to allow widgets to become enhanced in the
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 10862 | BETTER FALLBACK ID HERE
| _assets\_vendors\lazyloadxt\libs\jquery-mobile\jquery.mobile-1.3.2.js | 11170 | figure out how to simplify this interaction with the initial history entry
| _assets\_vendors\lazyloadxt\libs\zepto\zepto.js | 841 | clean this up with a better OS/browser seperation:
| _assets\_vendors\lazyloadxt\libs\qunit\qunit.js | 152 | why??
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.core.js | 368 | consider not making this a jQuery function
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.core.js | 369 | need way to reflow vs. re-initialize
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.offcanvas.js | 742 | improve the regex testing for this.
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.orbit.js | 241 | consider discussion on PR #9278 about DOM pollution by changeSlide
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.reveal.js | 263 | Figure out if we actually need to cache these values or if it doesn't matter
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.slider.js | 438 | update to calculate based on values set to respective inputs??
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.slider.js | 564 | clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.tooltip.js | 620 | combine some of the listeners like focus and mouseenter, etc.
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.tooltip.js | 892 | utilize resize event trigger
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.util.box.js | 181 | - if element is window, return only those values.
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.util.box.js | 234 | alter/rewrite to work with `em` values as well/instead of pixels
| _assets\_vendors\foundation-6.4.2\dist\js\plugins\foundation.util.keyboard.js | 252 | 9438: These references to Keyboard need to not require global. Will 'this' work in this context?