;(function($){
	'use strict';
const swiper = new Swiper('.grass-top-text-play', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 6000,
    autoplay: {
      delay: 0,

    },


  });

$( function(){
//Product card
$(function () {
  // Product Card Toggle
  $('.grass-product-toggle-button').on('click', function (e) {
      e.stopPropagation(); // Prevents event bubbling

      let $info = $(this).siblings('.grass-product-toggle-info');
      let $iconAnimation = $(this); // Target for rotation

      // Close all other dropdowns before toggling the clicked one
      $('.grass-product-toggle-info').not($info).removeClass('toggle');
      $('.grass-product-toggle-button').not($iconAnimation).removeClass('ico-rot-180');

      // Toggle the clicked dropdown and animate icon
      $info.toggleClass('toggle');
      $iconAnimation.toggleClass('ico-rot-180');
  });

  // Click outside to close all dropdowns
  $(document).on('click', function () {
      $('.grass-product-toggle-info').removeClass('toggle');
      $('.grass-product-toggle-button').removeClass('ico-rot-180');
  });

  // Dropdown Button Selection (Update text and close dropdown)
  $('.grass-product-toggle-info button').on('click', function () {
      let $dropdown = $(this).parents('.grass-product-toggle-info');
      $dropdown.siblings('.grass-product-toggle-button').find('span').text($(this).text());
      $dropdown.removeClass('toggle'); // Close dropdown after selection
      $dropdown.siblings('.grass-product-toggle-button').removeClass('ico-rot-180'); // Reset icon rotation
  });
});


    // counter
  $('#waypoint').waypoint(function() {
    // $('.grass-timer').addClass('timer');
    $('.grass-timer').countTo({

    onComplete: function (value) {
      return value.toLocaleString();
    },

        formatter: function (value, options) {
        // return value.toLocaleString();
        return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
      },
    })
  }, { 
    offset: '100%',
    triggerOnce: false 
  });


  // Sticky
  $('#grass-header').sticky();

  // mobile menu
  $('.grass-menu-trig').on('click', function(){
    $('#grass-mobile-menu').removeClass('hidden');
    $('#grass-mobile-menu').addClass('active');
    $('body').css('overflow-y', 'hidden');
  });

  $('.grass-close-mob-menu').on('click', function(){
    $('#grass-mobile-menu').addClass('animated');
    setTimeout( function(){
      $('body').css('overflow-y', 'auto');
      $('#grass-mobile-menu').removeClass('animated');
      $('#grass-mobile-menu').addClass('hidden');
    }, 500 );
  });


  // var product
  $('.grass-var-prod').on('click', function(){
    var ID = $(this).data('id');
    console.log( ID );
    $(this).parents('.grass-var-prod-main').find('.grass-var-prod-cont').addClass('hidden');
    $(this).parents('.grass-var-prod-main').find('.grass-var-prod-wrap').addClass('hidden');
    $(this).parents('.grass-var-prod-main').find('.grass-' + ID ).removeClass('hidden');
  });

  //rotate animation

  function checkVisibility() {
    var $element = $('.grass-rotate-anm > div');
    var elementTop = $element.offset().top;
    var elementBottom = elementTop + $element.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
              if ( ! $element.hasClass('active') ) {
                $element.addClass('active');
              }
            } else {
                $element.removeClass('active');
            }
  }
  function checkVisibility2() {
    var $element = $('.grass-rotate-anm-2 > div');
    var elementTop = $element.offset().top;
    var elementBottom = elementTop + $element.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
              if ( ! $element.hasClass('active') ) {
                $element.addClass('active');
              }
            } else {
                $element.removeClass('active');
            }
  }

  $(window).on('scroll resize', checkVisibility );
  $(window).on('scroll resize', checkVisibility2 );

  checkVisibility();
  checkVisibility2();


});

//Hero BG image Slicing anim


const elementsToAnimate = $(".split-img");

// Intersection Observer to trigger the animation when the image is in view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const $imgElement = $(entry.target);
            if (entry.isIntersecting && !$imgElement.hasClass("animated")) {
                $imgElement.addClass("animated");
                runSplitAnimation($imgElement);
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% visible
);

// Attach observer
elementsToAnimate.each(function () {
    observer.observe(this);
});

// Function to slice and animate the image using clip-path
function runSplitAnimation($imgElement) {
    const imgUrl = $imgElement.attr("src");
    const containerWidth = $imgElement.width();
    const containerHeight = $imgElement.height();
    const squareSize = 180; // Define square size

    // Create container for slices
    const $sliceContainer = $("<div>", {
        class: "slice-container",
        css: {
            width: containerWidth,
            height: containerHeight,
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
        },
    });

    // Hide the original image and insert container
    $imgElement.hide().before($sliceContainer);

    const cols = Math.ceil(containerWidth / squareSize);
    const rows = Math.ceil(containerHeight / squareSize);

    // Generate slices using clip-path
    let slices = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x1 = (col * 100) / cols;
            const x2 = ((col + 1) * 100) / cols;
            const y1 = (row * 100) / rows;
            const y2 = ((row + 1) * 100) / rows;

            const $slice = $("<div>", {
                class: "slice",
                css: {
                    position: "absolute",
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`,
                    backgroundImage: `url('${imgUrl}')`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    backgroundRepeat: "no-repeat",
                    clipPath: `polygon(${x1}% ${y1}%, ${x2}% ${y1}%, ${x2}% ${y2}%, ${x1}% ${y2}%)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                },
            });

            $sliceContainer.append($slice);
            slices.push($slice);
        }
    }

    // Randomize slices
    slices.sort(() => Math.random() - 0.5);

    // Animate slices with staggered fade-in effect
    setTimeout(() => {
        slices.forEach(($slice, index) => {
            setTimeout(() => {
                $slice.css("opacity", 1);
            }, index * 50);
        });
    }, 100);

    // Reveal original image after animation completes
    setTimeout(() => {
        $imgElement.show().css("opacity", 1);
        $sliceContainer.remove(); // Remove slices after effect
    }, slices.length * 50 + 800);
}

})(jQuery);
