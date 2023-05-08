$(function () {
    $('.js-select').selectmenu({
        appendTo: '.b-select',
        position: {
            my: 'left top+1'
        },
        icons: {
            button: 'b-icon icon-dropdown',
        }
    });

    // для соответствия ширины списка с шириной кнопки селекта
    $(window).resize(function () {
        $('.js-select').each(function () {
            var open = $(this).next().attr('aria-expanded') === 'true';

            if (open) {
                $(this).selectmenu('close');
                $(this).selectmenu('open');
            }
        });
    });
});
