(function (require) {
    'use strict';

    require.config({
        packages : [
            {
                name : 'underscore',
                location : 'vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : 'vendor/masseuse/app'
            }
        ]
        // <%= paths %>
    });

    require([
        'chomprompView/view'
    ], function (ChomprompView) {
        new ChomprompView().start();
    });
}(require));
