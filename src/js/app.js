// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';

import initSwiper from './components/slider';

(($) => {
  // When DOM is ready
  $(() => {
    initSwiper();
    //const accordions = new Accordion();
    //burgerMenu.init();
  });
})(jQuery);
