(function () {
    var $header = $('.js-header');
    var $scroll = $('.js-scroll-wrapper');

    (function () {
        $scroll.on('scroll', function () {
            let currentScroll = $(this).scrollTop();
            if (currentScroll > 10) {
                $header.addClass('scroll');
            } else {
                $header.removeClass('scroll');
            }
        });
    }());
})();