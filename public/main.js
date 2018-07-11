const $hide = $('.hide');
const $header = $('.header');
const $contents = $('.contents');
const $show = $('.show');
const $navMenu = $('.nav-menu');
const $menu = $('#menu');
const $navButton = $('.nav-button');
const $headerLink = $('.header-link');
const windowHeight = $(window).height();
// const offset = $(':target').offset();
// const scrollto = offset.top - (0.1 * windowHeight);


$(document).ready(() => {
    
    // Smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - (0.1 * windowHeight)
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    //Toggle contents when on mobile-sized screen
    $headerLink.on('click', event => {
        $(event.currentTarget).siblings('.contents').toggleClass('hide').toggleClass('show');
    });

    //Toggle menu
    $menu.on('click', event => {
        $(event.currentTarget).siblings('.nav-menu').toggleClass('hide-menu').toggleClass('show-menu');
    })

    //hide the menu when clicking on a nav-button
    $navButton.on('click', event => {
        $navMenu.toggleClass('hide-menu').toggleClass('show-menu');
    })
});