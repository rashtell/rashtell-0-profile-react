AOS.init({
  duration: 800,
  easing: 'slide',
});

$(document).ready(($) => {
  $(window).load(() => {
    console.log('document ready & window loaded');

    'use strict';

    // loader
		// const loader = 
		(function () {
      setTimeout(() => {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, 1);
    }());

		// const carousel = 
		(function () {
      $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        dots: false,
        autoplayHoverPause: false,
        items: 1,
        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 1,
            nav: false,
          },
        },
      });
    }());

		// const fullHeight = 
		(function () {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(() => {
        $('.js-fullheight').css('height', $(window).height());
      });
    }());

		// const burgerMenu = 
		(function () {
      $('.js-rashtell-nav-toggle').on('click', function (event) {
        event.preventDefault();
        const $this = $(this);
        if ($('body').hasClass('menu-show')) {
          $('body').removeClass('menu-show');
          $('#rashtell-main-nav > .js-rashtell-nav-toggle').removeClass('show');
        } else {
          $('body').addClass('menu-show');
          setTimeout(() => {
            $('#rashtell-main-nav > .js-rashtell-nav-toggle').addClass('show');
          }, 900);
        }
      });
    }());

		// const activeMenuItem = 
		(function () {
      $('.nav-menu-item').on('click', (event) => {
        // event.preventDefault();
        if (!event.currentTarget.classList.contains('active')) {
          $('.nav-menu-item').removeClass('active');
          event.currentTarget.classList.add('active');
        }
        $('body').removeClass('menu-show');
        $('#rashtell-main-nav > .js-rashtell-nav-toggle').removeClass('show');
      });
    }());

		// const counter = 
		(function () {
      $('#section-counter').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
          const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
          $('.number').each(function () {
            const $this = $(this);
            const num = $this.data('number');
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              }, 7000,
            );
          });
        }
      }, { offset: '95%' });
    }());

		// const contentWayPoint = 
		(function () {
      console.log('contentWayPoint from main.js');
      let i = 0;
      $('.ftco-animate').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(() => {
            $('body .ftco-animate.item-animate').each(function (k) {
              const el = $(this);
              setTimeout(() => {
                const effect = el.data('animate-effect');
                if (effect === 'fadeIn') {
                  el.addClass('fadeIn ftco-animated');
                } else if (effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft ftco-animated');
                } else if (effect === 'fadeInRight') {
                  el.addClass('fadeInRight ftco-animated');
                } else {
                  el.addClass('fadeInUp ftco-animated');
                }
                el.removeClass('item-animate');
              }, k * 50, 'easeInOutExpo');
            });
          }, 100);
        }
      }, { offset: '95%' });
    }());


    // magnific popup
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true,
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
      },
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });


    $('#appointment_date').datepicker({
      format: 'm/d/yyyy',
      autoclose: true,
    });
    $('#appointment_time').timepicker();

		// const pageProgress = 
		(function () {
      $(window).scroll(() => {
        const wintop = $(window).scrollTop(); const docheight = $('body').height(); const
          winheight = $(window).height();
        // console.log(wintop);
        const totalScroll = (wintop / (docheight - winheight)) * 100;
        // console.log("total scroll" + totalScroll);
        $('.KW_progressBar').css('width', `${totalScroll}%`);
      });
    }());
  });
});
