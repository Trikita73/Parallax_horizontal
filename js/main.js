//Swiper

new Swiper('.slider', {
    // direction: 'vertical',
    // freeMode: true,
    speed: 2400,
    mousewheel: {
        enabled: true,
        sensitivity: 4.4
    },
    spaceBetween: 18,
    parallax: true,
})

 // Preloader 
 $(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});