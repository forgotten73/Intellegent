$(function () {
    var $slider = $('.js-range-area');
    var $valueLover = $('.js-area-value-lower');
    var $valueUpper = $('.js-area-value-upper');
    $($slider).slider({
        range: true,
        values: [60, 120],
        min: 20,
        max: 300,
        slide: function (event, ui) {
            $($valueLover).val(ui.values[0]) + $($valueUpper).val(ui.values[1]);
        }
    });
    $($valueLover).val($($slider).slider('values', 0)) + $($valueUpper).val($($slider).slider('values', 1));
    var stopScrolling = false;

    window.addEventListener('touchmove', handleTouchMove, {
        passive: false
    });

    function handleTouchMove(e) {
        if (!stopScrolling) {
            return;
        }
        e.preventDefault();
    }
});
