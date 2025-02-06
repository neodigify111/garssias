(function ($) {
  'use strict';

  // Initialize Swiper
  const swiper = new Swiper('.grass-top-text-play', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  $(function () {
    // Product Card Toggle
    $('.grass-product-toggle-button').on('click', function (e) {
      e.stopPropagation(); // Prevent event bubbling

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
      let selectedText = $(this).text();
      $dropdown.siblings('.grass-product-toggle-button').find('span').text(selectedText);
      $dropdown.removeClass('toggle'); // Close dropdown after selection
      $dropdown.siblings('.grass-product-toggle-button').removeClass('ico-rot-180'); // Reset icon rotation
    });

    // Counter Animation
    if ($('#waypoint').length) {
      $('#waypoint').waypoint(
        function () {
          $('.grass-timer').countTo({
            onComplete: function (value) {
              return value.toLocaleString();
            },
            formatter: function (value) {
              return value.toLocaleString('en-US', { maximumFractionDigits: 0 });
            },
          });
        },
        { offset: '100%', triggerOnce: false }
      );
    }

    // Sticky Header
    if ($('#grass-header').length) {
      $('#grass-header').sticky();
    }

    // Mobile Menu
    $('.grass-menu-trig').on('click', function () {
      $('#grass-mobile-menu').removeClass('hidden').addClass('active');
      $('body').css('overflow-y', 'hidden');
    });

    $('.grass-close-mob-menu').on('click', function () {
      $('#grass-mobile-menu').addClass('animated');
      setTimeout(function () {
        $('body').css('overflow-y', 'auto');
        $('#grass-mobile-menu').removeClass('animated').addClass('hidden');
      }, 500);
    });

    // Variable Product Toggle
    $('.grass-var-prod').on('click', function () {
      let ID = $(this).data('id');
      console.log(ID);
      let $parent = $(this).closest('.grass-var-prod-main');
      $parent.find('.grass-var-prod-cont, .grass-var-prod-wrap').addClass('hidden');
      $parent.find('.grass-' + ID).removeClass('hidden');
    });
  });
})(jQuery);
