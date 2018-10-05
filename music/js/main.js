"use strict";

$(document).ready(function() {
    var backToTopHTML = $("#btn-to-top-txt").html();
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

        var position = $("#music-main").offset().top;

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

    $(".music-desc-expand-button").click(function() {
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded");
            $(this).children()[0].innerHTML = "More Info";
            $($(this).next().slideUp(250)); 
        }
        else {
            $(this).addClass("expanded");
            $(this).children()[0].innerHTML = "Less Info";
            $($(this).next().slideDown(250)); 
        }
    });
    
    $("#button-to-top").hover(
        function() {
            $("#btn-to-top-txt").html(backToTopHoverHTML);
        }, 
        function() {
            $("#btn-to-top-txt").html(backToTopHTML);
        });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header-wrapper").addClass("scrolled");
        } else {
            $(".header-wrapper").removeClass("scrolled");
        }
    });
});
