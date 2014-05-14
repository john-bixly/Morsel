define(['baseView', 'accountView/options'],
    function (baseView, options) {
        'use strict';

        var view = baseView.extend({
            defaultOptions: options
        });

        return view;

    });