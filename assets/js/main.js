$( document ).ready(function() {
    $('.slider').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay:  true,
    })
    $('.gallery').owlCarousel({
        loop: true,
        nav: true,
        margin: 15,
        items: 3,
        autoplay:  true,

    })
});
