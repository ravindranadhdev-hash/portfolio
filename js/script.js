(function($) {
    "use strict";

    $(window).on('load', function() {
        // Preloader
        // Add your preloader logic here if any, e.g., fade out a loading screen
    });

    $(document).on('ready', function() {

        // Sticky Header
        var sticky = $('.header--sticky');
        var stickyOffset = sticky.offset().top;
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < stickyOffset) {
                sticky.removeClass('sticky');
            } else {
                sticky.addClass('sticky');
            }
        });

        // Mobile Menu
        $('.hamberger-menu').on('click', function(e) {
            e.preventDefault();
            $('.popup-mobile-menu').addClass('menu-open');
            $('.header-wrapper').addClass('menu-open'); // To control header elements visibility
        });

        $('.close-menu-activation').on('click', function(e) {
            e.preventDefault();
            $('.popup-mobile-menu').removeClass('menu-open');
            $('.header-wrapper').removeClass('menu-open'); // To control header elements visibility
        });

        // Close mobile menu when clicking a nav link
        $('.popup-mobile-menu .nav-link').on('click', function() {
            $('.popup-mobile-menu').removeClass('menu-open');
            $('.header-wrapper').removeClass('menu-open');
        });


        // Feather Icons
        feather.replace();

        // Text Type Animation (from text-type.js)
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INBIO - Custom type for hero
            // This needs custom adjustment for the provided HTML structure
            // The HTML uses `cd-words-wrapper` for rotating text.
            // This is handled by another script/CSS, usually part of the template.
            // For now, I'll rely on the existing 'text-type.js' mentioned in the HTML,
            // assuming it handles the `.cd-headline` structure.
            // If the text animation doesn't work, we'd need the actual `text-type.js` content.
        };


        // Initialize AOS
        AOS.init({
            duration: 1200,
            once: true, // Only animate once
        });

        // Slick Carousel for Testimonials with Font Awesome Icons
$(document).ready(function() {
  $('.testimonial-activation').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',

    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });
});


        // Slick Carousel for Blog
        // Assuming there's a blog-slick-activation div for a potential blog carousel
        // If not, this can be removed or adapted.
        $('.blog-slick-activation').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });


        // Bootstrap Scrollspy and Smooth Scrolling
        $('body').scrollspy({
            target: '.navbar-example2',
            offset: 80
        });

        $('.navbar-example2 .nav-link').on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70 // Adjust offset for fixed header
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });


        // Back to top button
        var backToTop = $('.backto-top');
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 300) {
                backToTop.fadeIn('slow');
            } else {
                backToTop.fadeOut('slow');
            }
        });

        backToTop.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        // Right Demo Panel
        $('.demo-button').on('click', function() {
            $('.demo-modal-area').addClass('open');
        });

        $('.demo-close-btn').on('click', function() {
            $('.demo-modal-area').removeClass('open');
        });

        // Dynamically replace data-feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }

        // Initialize Bootstrap tooltips/popovers if any are present and not already initialized
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });

        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        });

    });

})(jQuery);