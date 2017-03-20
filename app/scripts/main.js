import {} from './external/jquery';
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
import {} from 'bootstrap-sass'; // eslint-disable-line import/imports-first
import { sayHello } from './modules/utils';

const CANVAS = document.getElementById('grid_canvas');
const CONTEXT = CANVAS.getContext('2d');

function cx(x) {
    return CANVAS.width * x;
}

function cy(y) {
    return CANVAS.height * y;
}

function init() {
  CANVAS.width = window.innerWidth * 0.9;
  CANVAS.height = 300;

  CONTEXT.beginPath();
  CONTEXT.moveTo(0, 0);

  drawLine(0.5, 0.5);
}

function drawLine(x, y) {
  CONTEXT.lineTo(cx(x), cy(x));
  CONTEXT.stroke();
}

init();
sayHello();
