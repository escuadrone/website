;(function ($) {

    "use strict";
    
        /* ---------------------------------------------
        Sticky Header
        --------------------------------------------- */ 
        var mainmenuarea = $(window);
        var sticky = $('#header');

        mainmenuarea.on('scroll', function () {
            if (mainmenuarea.scrollTop() > 100) {
                sticky.addClass('sticky-header');
            } else {
                sticky.removeClass('sticky-header');
            }
        });
    
        /* ---------------------------------------------
         menu scrolling
         --------------------------------------------- */
        jQuery('.scroll-animite').on('click', function(e){
            var jump = $(this).attr('href');
            var new_position = $(jump).offset();
            $('html, body').stop().animate({ scrollTop: new_position.top }, 400);
            e.preventDefault();
        });
    
        /* ---------------------------------------------
         add/remove active class in nav
         --------------------------------------------- */
        $(function(){
            $('.navbar-nav .nav-item').on('click', function(){
                $('.navbar-nav .nav-item.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    
        /* ---------------------------------------------
        close navbar-collapse when a  clicked
        --------------------------------------------- */
        $(".navbar-nav a").on('click', function () {
            $(".navbar-collapse").removeClass("show");
        });

    
        /* ---------------------------------------------
        Counter js
        --------------------------------------------- */
        $('.counter').counterUp({
            delay: 10,
            time: 1000,
        });
    
        /* ---------------------------------------------
        magnificPopup img view
        --------------------------------------------- */
        $('.work-view').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    
        /* ---------------------------------------------
         portfolio filtering
         --------------------------------------------- */    
    
        var $work = $('.work-list');
        if ($.fn.imagesLoaded && $work.length > 0) {
            imagesLoaded($work, function () {
                $work.isotope({
                  itemSelector: '.work-grid',         
                  transitionDuration:"1s"
                });
            });
        }
    
        $('.work-filter').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $work.isotope({ filter: filterValue });
          $('.work-filter li').removeClass('active');
          $(this).addClass('active');
        });
    
        
        /* ---------------------------------------------
        Accordion Active Class
        --------------------------------------------- */
        var $accordion = $('.accordion');
        $accordion.on("click",".accordion-heading", function () {
            $(this).next().slideDown();
            $(".accordion-content").not($(this).next()).slideUp();
        });
        $accordion.on("click",".accordion-item", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
        /* ---------------------------------------------
        Brand Carousel
        --------------------------------------------- */ 
        $("#alive-brand").owlCarousel({
            nav: false,
            loop: true,
            dots: false,
            center:true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 700,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 6,
                }
            }
        });
    
        /* ---------------------------------------------
        Testimonial Carousel
        --------------------------------------------- */
        $("#alive-testimonial").owlCarousel({
            nav: true,
            loop: true,
            dots: true,
            center:true,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            smartSpeed: 700,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 3,
                }
            }
        });
        /* ---------------------------------------------
        Hero Slider
        --------------------------------------------- */ 
        var $activeSlider = $("#alive-slider-area");
        $activeSlider.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            smartSpeed: 700,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
        $activeSlider.on("translate.owl.carousel", function () {
            $("#alive-slider-area .hero-text h2").removeClass("fadeInUp animated").hide();
            $("#alive-slider-area .hero-text h1").removeClass("fadeInUp animated").hide();
            $("#alive-slider-area .hero-text p").removeClass("fadeInUp animated").hide();
            $("#alive-slider-area .slide-btn").removeClass("fadeInUp animated").hide();
        });          
        $activeSlider.on("translated.owl.carousel", function () {
            $("#alive-slider-area .hero-text h2").addClass("fadeInUp animated").show();
            $("#alive-slider-area .hero-text h1").addClass("fadeInUp animated").show();
            $("#alive-slider-area .hero-text p").addClass("fadeInUp animated").show();
            $("#alive-slider-area .slide-btn").addClass("fadeInUp animated").show();
        });	

    
        
        /* ---------------------------------------------
        Paralax JS
        --------------------------------------------- */
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
    
        /* ---------------------------------------------
        Scroll Top Js
        --------------------------------------------- */
        $('.scrollUp').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    
        /* ---------------------------------------------
        window When Loading
        --------------------------------------------- */
        var $window = $(window);
        $window.on("load",function (){
            // Preloader
            $(".alive-preloader").fadeOut(500);
        });
    

})(jQuery);