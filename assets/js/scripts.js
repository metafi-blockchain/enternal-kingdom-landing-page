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
    infinite: true,
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
$('.about-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    asNavFor: '.pagination',
    infinite: true,
});
$('.pagination').slick({
    slidesToShow: 3,
    asNavFor: '.about-slide',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
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
$('#MainMenu a').on('click', function () {
    if ($(window).width() < 992) {
        $('#MainMenu').removeClass('show');
        $('body').removeClass('overflow-hidden');
    }
});
$('.section-gameplay .icons button').on('click', function () {
    $('.section-gameplay .icons button').removeClass('active');
    $(this).addClass('active');
    $('#HeroPreview').attr('src', this.dataset.img);
    $(`.section-gameplay .info`).removeClass('active');
    $(`#GameIcon${this.dataset.info}`).addClass('active');
});
$('#PlayVideo').on('click', () => {
    $('#videoModal iframe').attr('src', 'https://www.youtube.com/embed/5zqTpcIePoc?autoplay=1&enablejsapi=1');
    var myModalEl = document.getElementById('videoModal');
    var videoModal = new bootstrap.Modal(myModalEl, {});
    videoModal.show();
    myModalEl.addEventListener('hidden.bs.modal', function (event) {
        $('#videoModal iframe').attr('src', '');
    });
});

// Active menu
// Cache selectors
var topMenu = $('#MainMenu'),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find('a'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        if ($(this).attr('href') && $(this).attr('href') !== '#') {
            var item = $($(this).attr('href'));
            if (item.length) {
                return item;
            }
        }
    });

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';
    // Set/remove active class
    menuItems.removeClass('active');
    menuItems
        .parent()
        .end()
        .filter("[href='#" + id + "']")
        .addClass('active');
});

// Counter
var a = 0;
$(window).scroll(function () {
    var oTop = $('#MILESTONES').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-number');
            console.log(countTo);
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(Math.ceil(this.countNum).toLocaleString('en'));
                    },
                    complete: function () {
                        const symbol = $this.attr('data-symbol') ?? '';
                        const symbolPosition = $this.attr('data-symbol-position');
                        let text = Math.ceil(this.countNum).toLocaleString('en');
                        if (symbol && symbolPosition === 'start') {
                            text = `${symbol}${text}`;
                        } else {
                            text = `${text}${symbol}`;
                        }
                        $this.text(text);
                        //alert('finished');
                    },
                },
            );
        });
        a = 1;
    }
});
