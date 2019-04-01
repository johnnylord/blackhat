$(document).ready(function() {

    var lastScrollTop = 0;

    // Register scroll event on windwos if navbar component has id 'jsNavbar'
    // and class 'c-navbar--dynamic'
    if ($("#jsNavbar").hasClass("c-navbar--dynamic")) {

        $(window).scroll(function() {

            var currentScrollTop = $(this).scrollTop();

            if (currentScrollTop >= 60 && currentScrollTop > lastScrollTop) {
                $("#jsNavbar.c-navbar--dynamic").addClass("is-collapsed");
            } else {
                $("#jsNavbar.c-navbar--dynamic").removeClass("is-collapsed");
            }

            lastScrollTop = currentScrollTop;
        });
    }

    // Register click event handler on mobile icon element
    $("#jsNavbarToggle").on("click", function() {

        // Change the state of the mobile icon
        $(this).toggleClass("is-active");

        // slideToggle the navs section in the navbar
        var jNavs = $("#jsNavbarNavs");

        if (jNavs.hasClass("is-collapsed")) {
            jNavs.removeClass("is-collapsed");
            jNavs.slideDown("fast");
        } else {
            jNavs.slideToggle("fast");
        }

    });

});

