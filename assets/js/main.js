$(document).ready(function($){
	"use strict";
    // Preloader
    $(window).on('load', function () {
        $(".solar").fadeOut("slow"); 
        $("#loader").delay(200).fadeOut();
    });


    // Smooth Scroll

    $(function() {
        $('a[href*=\\#]:not([href=\\#])').on('click', function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: (target.offset().top - 0)
                }, 1000);
                return false;
            }
        });
    });


    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });
      
    /* =========================
        SCROLL MENU
    =========================*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('affix');
        } else {
            $('.navbar').removeClass('affix');
        }
    });
    
    /* =========================
        NAV MENU
    =========================*/
    $('.navbar-nav li a').on("click", function(e) {
        $('.navbar-nav li').removeClass('active');
        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
    });
        
    /* ==============================================
        SCROLL UP
    =============================================== */
        
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 
    
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



	// WOW Js Active
	new WOW().init();




    $('.our_team').owlCarousel({
        loop:true,
        margin:30,
        autoplay: false,
        nav:false,
        item:4,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


    $('#slider-area').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:2000,
        autoHeight: true,
        item:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.single_team_content').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        nav:false,
        item:4,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    // Service Section
    $('.service-item').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        item:4,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Active
    // $(".service-item").owlCarousel();
    // // Owl Next Privew Change
    // $( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    // $( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    // // Mixitup
    
    var mixer = mixitup('.portfolio-item',{
        animation:{
            effectsOut:'fade translateX(-100%)',
        }
    });


    // Color Panel
    $('#colorPanel').ColorPanel({
        styleSheet: '#cpswitch'
        // , animateContainer: '#wrapper'
        , colors: {
            'red': 'assets/css/skins/default.css',
             'green': 'assets/css/skins/green.css',
             'yellow' : 'assets/css/skins/yellow.css', 
             'cyan' : 'assets/css/skins/cyan.css', 
             'blue' : 'assets/css/skins/blue.css',
        }
    });

    // Magific Portfolio item Popup
    jQuery('.image-link').magnificPopup({
        type:'image',
            image: {

              cursor: 'mfp-zoom-out-cur', 

              titleSrc: 'title', 
              verticalFit: true,

              tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
            }

    });

    // Typed
    $('.slider-text .typed').typed({
        strings: ["Web","Mobile", "Web Site", "WebPage"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });



    // Parallax
    $('.about').parallax("50%", 0.6);
    $('.clienthappy_area').parallax("50%", 0.4);
    $('.getupdate').parallax("50%", 0.5);



}(jQuery));
