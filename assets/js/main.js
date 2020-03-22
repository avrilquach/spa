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
        dots: false,
        margin: 15,
        items: 3,
        autoplay:  true,
    })
    $('.customer').owlCarousel({
        loop: true,
        dots: true,
        margin: 80,
        items: 2,
        autoplay:  true,
    })
});
