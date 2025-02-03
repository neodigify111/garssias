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

$(document).ready( function(){

    // button toggle
    $('.grass-product-toggle-button').on('click', function(){
        $(this).siblings('.grass-product-toggle-info').removeClass('hidden');
    });

    $('.grass-product-toggle-info button').on('click', function(){
        $(this).parents('.grass-product-toggle-info').siblings('.grass-product-toggle-button').find('span').text( $(this).text() );
        $(this).parents('.grass-product-toggle-info').addClass('hidden');
    });

    $(document).mouseup(function(e) {
        var container = $(".grass-product-toggle-info");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('.grass-product-toggle-info').addClass('hidden');
        }
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
