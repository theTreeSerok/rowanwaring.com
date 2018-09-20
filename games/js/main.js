"use strict";

$(document).ready(function() {
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
});
