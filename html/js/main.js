"use strict";

$(document).ready(function() {
    var aboutMeHTML = $("#btn-about-me-txt").html();
    var contactMeHTML = $("#btn-contact-me-txt").html();
    var backToTopHTML = $("#btn-to-top-txt").html();
    
    var aboutMeHoverHTML = "about me";
    var contactMeHoverHTML = "contact me";
    var backToTopHoverHTML = "back to top";

    $("a[href^='#']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("html, body").animate({
            scrollTop: position
        }, 600);

        return false;
    });

    $(".hero-wrapper").click(function(e) {
        e.preventDefault();

        var position = $("#home").offset().top;

        $("html, body").animate({
            scrollTop: position
        }, 600);

        return false;
    });

    $("#burger").click(function(e) {
        $("#main-nav").fadeIn(100, function() {
            $("#main-nav").addClass('nav-open');
        });

        $("#mobile-nav-button").fadeOut(100);
    });

    $("#main-nav").click(function(e) {
        if ( $(this).is(".nav-open") ) {
            $(this).removeClass("nav-open");
            $(this).fadeOut(100, function() {
                $("#mobile-nav-button").fadeIn(300);
            });
        }
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header-wrapper").addClass("scrolled");
        } else {
            $(".header-wrapper").removeClass("scrolled");
        }
    });

    // hover button transitions

    $("#button-about-me").hover(
        function() {
            $("#btn-about-me-txt").html(aboutMeHoverHTML);
        }, 
        function() {
            $("#btn-about-me-txt").html(aboutMeHTML)
        });

    $("#button-contact-me").hover(
        function() {
            $("#btn-contact-me-txt").html(contactMeHoverHTML);
        }, 
        function() {
            $("#btn-contact-me-txt").html(contactMeHTML)
        });

    $("#button-to-top").hover(
        function() {
            $("#btn-to-top-txt").html(backToTopHoverHTML);
        }, 
        function() {
            $("#btn-to-top-txt").html(backToTopHTML);
        });

    // landing typer

    var typed;

    function startTyped() {
        typed = new Typed("#intro", {
            strings: [
                "<span>make games</span>.",

                "^750 <span>produce music</span>.", 

                "^750have a&nbsp;<span>passion</span>&nbsp;for&nbsp;<span>creation</span>.^1000"
            ],
            smartBackspace: true,
            loop: true,
            startDelay: 750,
            backDelay: 1500,
            typeSpeed: 40,
            backSpeed: 30,
            showCursor: false
        });
    }

    function startIntro() {
        $("#pre-intro").css('display', 'block');
        $("#pre-intro").animate({ opacity: 1 }, { duration: 500 });

        setTimeout(startTyped, 100);
    }

    function setupIntro() {
        $("#info-main").fadeIn(750, function() {
            setTimeout(startIntro, 1000);
        });
    }

    setTimeout(setupIntro, 1000);
});
