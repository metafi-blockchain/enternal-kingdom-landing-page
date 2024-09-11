$('#btnOpenMenu').on('click', function () {
    $('#MainMenu').addClass('show');
    $('body').addClass('overflow-hidden');
});
$('#btnCloseMenu').on('click', function () {
    $('#MainMenu').removeClass('show');
    $('body').removeClass('overflow-hidden');
});
$('.roadmap-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
});
$('.hero-slide-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.hero-slide-nav',
});
$('.hero-slide-nav').slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    asNavFor: '.hero-slide-for',
    arrows: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
    ],
});
function setNewsSlide() {
    const viewportWidth = $(window).width();
    if (viewportWidth >= 768) {
        if ($('#NewsSlide').hasClass('slick-slider')) {
            $('#NewsSlide').slick('unslick');
        }
    } else {
        $('#NewsSlide').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        });
    }
}
setNewsSlide();
$(window).on('resize', function () {
    setNewsSlide();
    if ($(window).width() >= 992) {
        $('#MainMenu').removeClass('show');
        $('body').removeClass('overflow-hidden');
    }
});
$('.section-gameplay .icons button').on('click', function () {
    $('.section-gameplay .icons button').removeClass('active');
    $(this).addClass('active');
    console.log($(this))
    $('#HeroPreview').attr('src', this.dataset.img);
});
