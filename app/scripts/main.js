// import {} from './external/jquery';
// Import only bootstrap packages you need
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/affix';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/alert';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/button';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/carousel';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/collapse';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/dropdown';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/modal';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/scrollspy';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/tooltip';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/tab';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/transition';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/popover';
// Or import everything
// import {} from 'bootstrap-sass'; // eslint-disable-line import/imports-first

/**
 * CANVAS IMPORTS
 */
import {
  // Constants
  CANVAS, CONTEXT,

  // Functions
  drawTable,
} from './modules/canvas';

function updateCanvasSize(canvas) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const canvasSize = width < height ? width * 0.7 : height * 0.7;
  canvas.width = canvasSize; // window.innerWidth * 0.5;
  canvas.height = canvasSize; // window.innerHeight * 0.5;
} 

function init() {
  updateCanvasSize(CANVAS);
  // window.resize(updateCanvasSize(CANVAS));

  CONTEXT.beginPath();
  CONTEXT.moveTo(0, 0);
  drawTable(5, 1);
}

init();
