$(function () {
    $(document).on('click', '#hamburger', function(e) {
        e.preventDefault()
        $('body').toggleClass('active-menu')
    })

    $(document).on('click', 'a[data-menu]', function(e) {
        e.preventDefault()
        if (!($(this).hasClass('active'))) {
            $('a[data-menu]').removeClass('active')
        }
        $(this).toggleClass('active')

        $('a[data-menu]').each(function() {
            if ($(this).hasClass('active')) {
                $($(this).attr('href')).addClass('active')
            } else {
                $($(this).attr('href')).removeClass('active')
            }
        })
    })

    $(document).on('click', '.categories-side__button', function(e) {
        e.preventDefault()
        $(this).parent().toggleClass('active')
        if ($(this).parent().hasClass('active')) {
            $(this).parent().find('.categories-side__row').hide("slow")
        } else {
            $(this).parent().find('.categories-side__row').show("slow")
        }
    })

    $('.slider-range').each(function() {
        let
            min = +$( this ).parent().find('.from').attr('min'),
            max = +$( this ).parent().find('.to').attr('max')

        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [ min, max ],
            slide: function( event, ui ) {
                $( this ).parent().find('.from').val( ui.values[ 0 ] )
                $( this ).parent().find('.to').val( ui.values[ 1 ] )
            }
        })

        $(this).parent().find('.from').val($( this ).slider( "values", 0 ))
        $(this).parent().find('.to').val($( this ).slider( "values", 1 ))
    })

    $(document).on('input', 'input[type="number"]', function(e) {
        if (+$(this).val() > +$(this).attr('max')) {
            $(this).val(+$(this).attr('max'))
        }

        if (+$(this).val() < +$(this).attr('min')) {
            if ($(this).val() != '') {
                $(this).val(+$(this).attr('min'))
            }
        }

        $(this).parent().parent().parent().find('.slider-range-min').slider( "value", $(this).val() )

        if ($(this).hasClass('from')) {
            $(this).parent().parent().parent().find('.slider-range')
                .slider("values", [$(this).val(), $(this).parent().parent().find('to').val()])
        }

        if ($(this).hasClass('to')) {
            $(this).parent().parent().parent().find('.slider-range')
                .slider("values", [$(this).parent().parent().find('from').val(), $(this).val()])
        }
    })

    $('.slider-range-min').each(function() {
        let
            min = +$( this ).parent().find('.from').attr('min'),
            max = +$( this ).parent().find('.to').attr('max')

        $(this).slider({
            range: "min",
            value: min,
            min: min,
            max: max,
            slide: function( event, ui ) {
                $(this).parent().find('.to').val(ui.value)
            }
        })

        $(this).parent().find('.from').val(0)
        $(this).parent().find('.to').val($( this ).slider( "value" ))
    })

    $('.tabs').each(function() {
        let
            TabWindows = $(this).find('.tabs__window'),
            TabButtons = $(this).find('.tabs__button')

        TabButtons.each(function(value) {
            let btnNum = value

            $(this).on('click', function(e) {
                e.preventDefault()

                if (!($(this).hasClass('active')) && $(window).width() > 1315) {
                    TabButtons.removeClass('active')
                    TabWindows.removeClass('active')
                }

                if ($(window).width() < 1315) {
                    $(this).toggleClass('active')
                    TabWindows.each(function(value) {
                        if (btnNum === value) {
                            $(this).toggleClass('active')
                        }
                    })
                } else {
                    $(this).addClass('active')
                    TabWindows.each(function(value) {
                        if (btnNum === value) {
                            $(this).addClass('active')
                        }
                    })
                }
            })
        })
    })

    $('.input-plus').each(function() {
        $(this).on('click', '.input-plus__button', function(e) {
            e.preventDefault()
            if ($(this).hasClass('input-plus__button_plus')) {
                $(this).prev().val(+$(this).prev().val()+1)
            } else if ($(this).hasClass('input-plus__button_minus')) {
                if (+$(this).next().val() > 1) {
                    $(this).next().val(+$(this).next().val()-1)
                }
            }
            changeBasket()
        })

        $(this).on('input', 'input', function() {
            $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))

            changeBasket()
        })

        $(this).on('blur', 'input', function() {
            if (+$(this).val() < +$(this).data('min')) {
                $(this).val($(this).data('min'))
            }

            changeBasket()
        })
    })

    // Sliders

    $('.product__slider_big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon"><svg viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M1.06819 26.3721L24.1947 49.4346C24.9524 50.1898 26.1791 50.1885 26.9356 49.4307C27.6914 48.673 27.6895 47.4455 26.9317 46.6898L5.18175 24.9999L26.9324 3.31015C27.6902 2.5543 27.6921 1.32764 26.9364 0.569836C26.5572 0.189953 26.0604 1.14441e-05 25.5636 1.14441e-05C25.0681 1.14441e-05 24.5733 0.188683 24.1948 0.565926L1.06819 23.6278C0.703255 23.9909 0.498468 24.4851 0.498468 24.9999C0.498468 25.5148 0.70384 26.0083 1.06819 26.3721Z" fill="black"/>' +
            '</svg></span></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon"><svg viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M26.9318 26.3721L3.80534 49.4346C3.04762 50.1898 1.82087 50.1885 1.06443 49.4307C0.308573 48.673 0.310526 47.4455 1.06834 46.6898L22.8183 24.9999L1.06755 3.31015C0.309842 2.5543 0.307889 1.32764 1.06365 0.569836C1.44284 0.189953 1.93962 1.14441e-05 2.4364 1.14441e-05C2.9319 1.14441e-05 3.42672 0.188683 3.80524 0.565926L26.9318 23.6278C27.2967 23.9909 27.5015 24.4851 27.5015 24.9999C27.5015 25.5148 27.2962 26.0083 26.9318 26.3721Z" fill="black"/>' +
            '</svg></span></button>',
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    arrows: true
                }
            }
        ]
    });
    $('.product__slider_small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__slider_big',
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon"><svg viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M1.06819 26.3721L24.1947 49.4346C24.9524 50.1898 26.1791 50.1885 26.9356 49.4307C27.6914 48.673 27.6895 47.4455 26.9317 46.6898L5.18175 24.9999L26.9324 3.31015C27.6902 2.5543 27.6921 1.32764 26.9364 0.569836C26.5572 0.189953 26.0604 1.14441e-05 25.5636 1.14441e-05C25.0681 1.14441e-05 24.5733 0.188683 24.1948 0.565926L1.06819 23.6278C0.703255 23.9909 0.498468 24.4851 0.498468 24.9999C0.498468 25.5148 0.70384 26.0083 1.06819 26.3721Z" fill="black"/>' +
            '</svg></span></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon"><svg viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M26.9318 26.3721L3.80534 49.4346C3.04762 50.1898 1.82087 50.1885 1.06443 49.4307C0.308573 48.673 0.310526 47.4455 1.06834 46.6898L22.8183 24.9999L1.06755 3.31015C0.309842 2.5543 0.307889 1.32764 1.06365 0.569836C1.44284 0.189953 1.93962 1.14441e-05 2.4364 1.14441e-05C2.9319 1.14441e-05 3.42672 0.188683 3.80524 0.565926L26.9318 23.6278C27.2967 23.9909 27.5015 24.4851 27.5015 24.9999C27.5015 25.5148 27.2962 26.0083 26.9318 26.3721Z" fill="black"/>' +
            '</svg></span></button>',
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.popular-products__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon"><svg viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M1.06819 26.3721L24.1947 49.4346C24.9524 50.1898 26.1791 50.1885 26.9356 49.4307C27.6914 48.673 27.6895 47.4455 26.9317 46.6898L5.18175 24.9999L26.9324 3.31015C27.6902 2.5543 27.6921 1.32764 26.9364 0.569836C26.5572 0.189953 26.0604 1.14441e-05 25.5636 1.14441e-05C25.0681 1.14441e-05 24.5733 0.188683 24.1948 0.565926L1.06819 23.6278C0.703255 23.9909 0.498468 24.4851 0.498468 24.9999C0.498468 25.5148 0.70384 26.0083 1.06819 26.3721Z" fill="black"/>' +
            '</svg></span></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon"><svg viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M26.9318 26.3721L3.80534 49.4346C3.04762 50.1898 1.82087 50.1885 1.06443 49.4307C0.308573 48.673 0.310526 47.4455 1.06834 46.6898L22.8183 24.9999L1.06755 3.31015C0.309842 2.5543 0.307889 1.32764 1.06365 0.569836C1.44284 0.189953 1.93962 1.14441e-05 2.4364 1.14441e-05C2.9319 1.14441e-05 3.42672 0.188683 3.80524 0.565926L26.9318 23.6278C27.2967 23.9909 27.5015 24.4851 27.5015 24.9999C27.5015 25.5148 27.2962 26.0083 26.9318 26.3721Z" fill="black"/>' +
            '</svg></span></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    changeBasket()
})
$('.categories-side.active').find('.categories-side__row').hide("slow")

function changeBasket() {
    let allProducts = 0

    $('.basket-products__product').each(function() {
        allProducts += +$(this).find('input').val()
    })

    $('.basket-products__bottom .basket-products__count h4').text(allProducts+' шт.')
}