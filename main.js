const $hide = $('.hide');
const $header = $('.header');
const $contents = $('.contents');


$(document).ready(() => {
    $header.on('click', event => {
        $(event.currentTarget).siblings('.contents').toggleClass('hide', 8000, "easeOutSine");
    }) 
});