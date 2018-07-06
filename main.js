const $hide = $('.hide');
const $header = $('.header');
const $contents = $('.contents');
const $show = $('.show');

$(document).ready(() => {
    $header.on('click', event => {
        console.log($(event.currentTarget));
        $(event.currentTarget).siblings('.contents').toggleClass('hide').toggleClass('show');
    });

});