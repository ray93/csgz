$(function () {
    $("#menuButton").click(function () {
        if ($(this).hasClass("nav-btn-active")) {
            $(this).removeClass("nav-btn-active");
            $(".header02").fadeOut()
        } else {
            $(this).addClass("nav-btn-active");
            $(".header02").fadeIn()
        }
    });
    if ($(document).width() > 980) {
        $(".header02").hide()
        $("#menuButton").removeClass("nav-btn-active");
    }
    $(window).resize(function () {
        if ($(document).width() > 980) {
            $(".header02").hide()
            $("#menuButton").removeClass("nav-btn-active");
        }
    });
});