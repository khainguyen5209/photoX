$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        // console.log(position);
        if (position >= 650 && position <= 1850) {
            $('.camera-img').addClass('flyInFromLeft');
            $('.mission-text').addClass('flyInFromRight');
        } else {
            $('.camera-img').removeClass('flyInFromLeft');
            $('.mission-text').removeClass('flyInFromRight');
        }
    });
    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });
    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 4350 && position <= 6065) {
            $('.card-1').addClass('cardMoveFromLeft');
            $('.card-2').addClass('cardMoveFromBottom');
            $('.card-3').addClass('cardMoveFromRight');
        } else {
            $('.card-1').removeClass('cardMoveFromLeft');
            $('.card-2').removeClass('cardMoveFromBottom');
            $('.card-3').removeClass('cardMoveFromRight');
        }
    });
});