$(function() {

    $('.slider').slick({
        vertical: true,
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: "<img src='../images/keyboard_arrow_up.png' class='prev' alt='1'>",
        nextArrow: "<img src='../images/keyboard_arrow_down.png' class='next' alt='2'>"
    });
});
$('.slider__team').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    centerMode: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});