const $hide = $('.hide');
const $header = $('.header');
const $contents = $('.contents');
const $show = $('.show');
const $navMenu = $('.nav-menu');
const $menu = $('#menu');
const $navButton = $('.nav-button');


$(document).ready(() => {
    $header.on('click', event => {
        $(event.currentTarget).siblings('.contents').toggleClass('hide').toggleClass('show');
    });
    $menu.on('click', event => {
        $(event.currentTarget).siblings('.nav-menu').toggleClass('hide-menu').toggleClass('show-menu');
    })
    $navButton.on('click', event => {
        $navMenu.toggleClass('hide-menu').toggleClass('show-menu');
    })
});