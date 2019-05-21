const $hide = $('.hide');
const $header = $('.header');
const $contents = $('.contents');
const $show = $('.show');
const $navMenu = $('.nav-menu');
const $menu = $('#menu');
const $navButton = $('.nav-button');
const $headerLink = $('.header-link');
const $windowHeight = $(window).height();
const $leftButton = $('#knowledge-left-button');
const $rightButton = $('#knowledge-right-button');
const $knowledgeDirectionButtons = $('.knowledge-direction-button');
// const offset = $(':target').offset();
// const scrollto = offset.top - (0.1 * $windowHeight);


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
          scrollTop: target.offset().top - (0.1 * $windowHeight)
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
        const contentsId = `#${event.currentTarget.id.slice(0, event.currentTarget.id.lastIndexOf('-'))}-contents`;
        console.log(contentsId);
        $navMenu.toggleClass('hide-menu').toggleClass('show-menu');
        if (!$(contentsId).hasClass('show')) {
            $(contentsId).toggleClass('hide').toggleClass('show');
        }
    })

    $leftButton.on('click', event => {
      console.log(event);
    })

    $rightButton.on('click', event => {
      console.log(event);
    })

    $knowledgeDirectionButtons.on('click', event => {
      const currentTargetId = event.currentTarget.id;
      const lastHyphenIndex = currentTargetId.lastIndexOf('-');
      const direction = currentTargetId.substring(lastHyphenIndex + 1);

      const visibleSlide = $('.knowledge-contents-slide:visible');
      const slideNum = getSlideNumber(visibleSlide);

      changeSlide(direction, slideNum)
    })
});

function changeSlide(direction, slideNum) {
  const idBeginning = '#knowledge-contents-';
  let newSlideNum;

  if (direction === 'left') {
    newSlideNum = changeSlideLeft(slideNum, );
  }
  else if (direction === 'right') {
    newSlideNum = changeSlideRight(slideNum)
  }

  $(idBeginning + slideNum).addClass('slideshow-hidden');
  $(idBeginning + newSlideNum).removeClass('slideshow-hidden');
}

function changeSlideLeft(slideNum) {
  const slideNumbers = getSlideNumbers();
  const min = getMinSlideNumber(slideNumbers);
  let slideToChangeTo = slideNum - 1;

  if (slideNum <= min) {
    const max = getMaxSlideNumber(slideNumbers);
    slideToChangeTo = max;
  }

  return slideToChangeTo;
}

function changeSlideRight(slideNum) {
  const slideNumbers = getSlideNumbers();
  const max = getMaxSlideNumber(slideNumbers);
  let slideToChangeTo = slideNum + 1;

  if (slideNum >= max){
    const min = getMinSlideNumber(slideNumbers);
    slideToChangeTo = min;
  }

  return slideToChangeTo;
}

function getSlideNumbers() {
  const slideNumbers = [];
  const knowledgeContents = $('.knowledge-contents-slide');

  knowledgeContents.each((i, e) => {
    const slideNum = getSlideNumber(e);
    slideNumbers.push(slideNum);
  });

  return slideNumbers;
}

function getMaxSlideNumber(slideNumbers) {
  const max = Math.max(...slideNumbers);
  return max;
}

function getMinSlideNumber(slideNumbers) {
  const min = Math.min(...slideNumbers);
  return min;
}

function getSlideNumber(element) {
  let elementId;

  if (typeof element.attr === 'function') {
    elementId = element.attr('id');
  }
  else {
    elementId = element.id;
  }

  const lastHyphenIndex = elementId.lastIndexOf('-');
  const slideNumString = elementId.substring(lastHyphenIndex + 1);
  const slideNum = parseInt(slideNumString, 10);

  return slideNum;
}