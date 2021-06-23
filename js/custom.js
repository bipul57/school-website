/*******************************
           SERVICES
********************************/

$(function () {
    //animate on scroll
    new WOW().init();
});


/*******************************
            Work
********************************/

$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/*******************************
            Team
********************************/

$(function () {

    $("#team-members").owlCarousel({

        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            576: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }

    });

});


/*******************************
            Testimonials
********************************/

$(function () {

    $("#customers-testimonials").owlCarousel({

        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});


/*******************************
            Stats
********************************/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


/*******************************
            Clients
********************************/

$(function () {

    $("#clients-list").owlCarousel({

        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 576 up
            576: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }

    });

});


/*********************************************************
        Navigation(Show/Hide black transparent navigation)
**********************************************************/

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide navigation bar
            $("nav").removeClass("vaxo-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            //show navigation bar
            $("nav").addClass("vaxo-top-nav");
            $("#back-to-top").fadeIn();
        }

    });

});

/**********************************
        Smooth Scrolling
***********************************/

$(function () {

    $("a.nav-link").click(function (event) {
        /* $("") is to select element */

        event.preventDefault(); /*here, this method is preventing the functionalities of 'event' object which is passed to anonymous function 'function()' which is passed to click function that is envoked when 'a' element having .nav-link class is passed priorly.*/

        var section = $(this).attr("href"); /* get or return the section id #about(if about is clicked), #work(if work is clicked), #team(if the team link is clicked) etc. In simple terms, it is used to return or regain the clickable event of navigation bar items that is embedded by anchor tag(<a>) having 'href' attribute*/

        $('html, body').animate({
            scrollTop: $(section).offset().top - 53 /*-53 is to decrease height of menu to align properly, as i did in spyscroll effect*/
        }, 1250, "easeOutBounce"); /* offset().top gets the coordinates of content for which, it is clicked, i.e. for "section" 'string' which is passed preceedinig to it , that gets id value or href value or link that is clicked. After getting coordinates and clickable link the 'scrollTop' sets the pixels above it and displays the content in screen as per user clicked. 1250 is the second parameter of 'animate' class of JQUERY. 1250 is 1250 milliseconds (1.5seconds) that will be implemented to the first parameter of animate class, i.e while setting top pixels or while redirecting to the clicked link */
    });

});

//smooth scrolling for any clickable link under anchor tag dispensing bipul-class(.bipul-class) custom class.

$(function () {

    $("a.bipul-class").click(function (event) {
        /*bipul-class is custom class that is embedded in 'a' element(anchor tag) which will function as per this javascript custom function*/

        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 53
        }, 1250, "easeOutBounce");
    });

});

// Close Mobile Menu On Click

$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggler").click();
    });

});