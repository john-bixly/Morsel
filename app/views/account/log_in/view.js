define(['masseuse', 'accountView/log_in/options'], function (masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions: options,
        beforeRender: beforeRender
    });

    function beforeRender() {

    }

});