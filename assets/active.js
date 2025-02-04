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

  // animation

  function checkVisibility() {
    var $element = $('.grass-rotate-anm-1');
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
    var $element = $('.grass-rotate-anm-2');
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

})(jQuery);
