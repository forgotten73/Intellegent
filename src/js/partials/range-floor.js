$(function () {
    var $slider = $('.js-range-floor');
    var $valueLover = $('.js-floor-value-lower');
    var $valueUpper = $('.js-floor-value-upper');
    $($slider).slider({
        range: true,
        values: [2, 15],
        min: 1,
        max: 24,
        slide: function (event, ui) {
            $($valueLover).val(ui.values[0]) + $($valueUpper).val(ui.values[1]);
        }
    });
    $($valueLover).val($($slider).slider('values', 0)) + $($valueUpper).val($($slider).slider('values', 1));
});
