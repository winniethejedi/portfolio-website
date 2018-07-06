const $hide = $('.hide');
const $header = $('.header');
const $contents = $('.contents');
const $show = $('.show');
const $navMenu = $('#nav-menu');
const $menu = $('#menu');


$(document).ready(() => {
    $header.on('click', event => {
        $(event.currentTarget).siblings('.contents').toggleClass('hide').toggleClass('show');
    });
    $menu.on('click', event => {
        console.log($(event.currentTarget).siblings('.nav-menu'));
        $(event.currentTarget).siblings('.nav-menu').toggleClass('hide-menu').toggleClass('show-menu');
    })
});