import { } from '../external/jquery';

/* export function preloadDigitImage(value) {
    if (value > 9) {
        return;
    }

    const loader = new Image();

    loader.src = `images/${value}.png`;
    loader.onload = function load(src) {
        loader.src = `images/clear_${value}.png`;
    };

    loader.onload = preloadDigitImage(value + 1);
} */

export function setErrorText(text) {
    $('#error_text').text(text);
}

export function setInfoText(text) {
    $('#info_text').text(text);
}
