define(['baseView', 'homeView/options'], function (baseView, options) {
    'use strict';

    return baseView.extend({
        defaultOptions: options,
        beforeRender: beforeRender
    });

    function beforeRender() {
        // hi
    }

});