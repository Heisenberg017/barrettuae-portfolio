//Navigation Bar JS
(function ($) {
    $(function () {
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    });
})($);

//Scroll Animation
ScrollReveal().reveal('#about', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});

ScrollReveal().reveal('#service', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});

ScrollReveal().reveal('#feature', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});

ScrollReveal().reveal('#portfolio', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});

ScrollReveal().reveal('#team', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});

ScrollReveal().reveal('#testimonial', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});

ScrollReveal().reveal('#contact', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});


ScrollReveal().reveal('#footer', {
    duration: 2000,
    interval: 200,
    delay: 100,
    reset: true,
    origin: 'left',
    scale: 0.85,
});