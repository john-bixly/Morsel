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

    require(['router'
    ], function (Router) {
        new Router().start();
    });
}(require));
