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

    require(['router', 'underscore', 'jquery', 'backbone'
    ], function (Router, _, $, Backbone) {
        var router = new Router();

        _.templateSettings = {
            evaluate    : /\[\[(.+?)\]\]/g,
            interpolate : /\[\[=(.+?)\]\]/g,
            escape      : /\[\[-(.+?)\]\]/g
        };

        Backbone.history.start({pushState: true});
        Backbone.history.breadCrumb = [];
        Backbone.history.on('route', function() {
            Backbone.history.breadCrumb.push(this.fragment);
        });
        router.start();
        $(document).on('click', 'a[href^="/"]', function(event) {
            if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
                if ( ! $(event.currentTarget).attr('ignoreRouting')) {
                    event.preventDefault();
                    var url = $(event.currentTarget).attr('href').replace(/^\//, '');
                    router.navigate(url, { trigger: true });
                }
            }
        });



    });
}(require));
