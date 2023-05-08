$(function () {
    var $slider = $('.js-range-price');
    var $valueLover = $('.js-price-value-lower');
    var $valueUpper = $('.js-price-value-upper');
    $($slider).slider({
        range: true,
        values: [1600000, 12000000],
        min: 1600000,
        max: 12000000,
        slide: function (event, ui) {
            $($valueLover).val(ui.values[0].toLocaleString()) + $($valueUpper).val(ui.values[1].toLocaleString());
        }
    });
    $($valueLover).val($($slider).slider('values', 0).toLocaleString()) + $($valueUpper).val($($slider).slider('values', 1).toLocaleString());
});
