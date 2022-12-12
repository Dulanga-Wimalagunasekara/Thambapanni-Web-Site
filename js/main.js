(function ($) {
    "use strict";

    const topBar = document.getElementById('topBar');
    const team = document.getElementById('team');
    const services = document.getElementById('services');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');
    const feedbacks = document.getElementById('feedbacks');

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
    });

    $("#spnAbout").click(function() {
        team.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $("#spnService").click(function() {
        services.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $("#spnProjects").click(function() {
        projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $("#spnContact").click(function() {
        contact.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $("#spnFeedbacks").click(function() {
        feedbacks.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $("#spnHome").click(function() {
        topBar.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });



})(jQuery);

