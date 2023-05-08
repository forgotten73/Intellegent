$(function () {
    var adaptiveCustomiseCard;
    if ($('.js-customise-card').length) {
        // то, что переставляем
        var customiseCard = $('.js-customise-card');
        // место №1
        var mobileBurger = $('.js-burger-wrap');
        // место №2
        var customiseDesktop = $('.js-customise-desktop');

        adaptiveCustomiseCard = function () {
            if (window.innerWidth >= 320 && window.innerWidth < 1024) {
                mobileBurger.append(customiseCard);
            } else if (window.innerWidth >= 1024) {
                customiseDesktop.append(customiseCard);
                $('.btn-close--burger').trigger('click');
            }
        };
        adaptiveCustomiseCard();

        $(window).resize(function () {
            if ($(customiseCard).length > 0) {
                adaptiveCustomiseCard();
            }
        });
    }
});
