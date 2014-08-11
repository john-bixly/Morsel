define(['baseView', 'listingView/options'], function (baseView, options) {
    'use strict';

    return baseView.extend({
        defaultOptions: options,
        beforeRender: beforeRender
    });

    function beforeRender($deferred) {
        this.model.fetch()
            .always($deferred.resolve);
    }

});