import { } from './external/jquery';
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
  setNumberOnRow, // TEMP
} from './modules/canvas';

import {
  elaborate,
  calculateSquareLength,
} from './modules/calculus';

function updateCanvasSize(canvas) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // const canvasSize = width < height ? width * 0.5 : height * 0.5;
  canvas.width = width * 0.6;
  canvas.height = height * 0.6;
}

const elaborateInput = function elaborateInput() {
  const input = $('#input_textfield').val();

  drawTable(3, calculateSquareLength(input), true);

  setNumberOnRow(0, input);
  setNumberOnRow(1, input / 10);
  setNumberOnRow(2, input / 20);

  elaborate(input);
};

function init() {
  updateCanvasSize(CANVAS);
  // window.resize(updateCanvasSize(CANVAS));

  CONTEXT.beginPath();
  CONTEXT.moveTo(0, 0);

  drawTable(3, 3, true);

  $('#input_button').click(elaborateInput);
}

init();
