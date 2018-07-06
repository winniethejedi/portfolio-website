const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const $ = jQuery = require('jquery')(window);

const $hide = $('.hide');
const $header = $('.header');
const $contents = $('.contents');

$(document).ready(() => {
    require('bootstrap');
    $header.on('click', event => {
        $(event.currentTarget).siblings('.contents').toggleClass('hide');
    }) 


});