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
        if (position >= 650 && position <= 1830) {
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
        if (position >= 4330 && position <= 6065) {
            $('.card-1').addClass('cardMoveFromLeft');
            $('.card-2').addClass('cardMoveFromBottom');
            $('.card-3').addClass('cardMoveFromRight');
        } else {
            $('.card-1').removeClass('cardMoveFromLeft');
            $('.card-2').removeClass('cardMoveFromBottom');
            $('.card-3').removeClass('cardMoveFromRight');
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // $(".scroll-area").scrollspy({ target: "#myNavbar" })
    // $('body').scrollspy({ target: '#navbarScroll', offset: 10 });
    // $('[data-spy="scroll"]').each(function() {
    //     var $spy = $(this).scrollspy('refresh')
    // });
    // $('[data-spy="scroll"]').on('activate.bs.scrollspy', function() {
    //     // do something…
    //     console.log("log");
    // })
});