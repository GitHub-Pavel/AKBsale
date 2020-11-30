$(function () {
    $('#hamburger').on('click', function(e) {
        e.preventDefault()
        $('body').toggleClass('active-menu')
    })

    $('.popular-poducts__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })

    $('.slider-range').each(function() {
        let
            min = +$( this ).parent().find('.from').data('min'),
            max = +$( this ).parent().find('.to').data('max')

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

    $('.slider-range-min').each(function() {
        let
            min = +$( this ).parent().find('.from').data('min'),
            max = +$( this ).parent().find('.to').data('max')

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
})