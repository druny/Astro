$(window).scroll(function() {
    if ($(window).scrollTop() >= 15) {
        $('.menu').addClass('scrolled');
    } else {
        $('.menu').removeClass('scrolled');
    }
    

});
    