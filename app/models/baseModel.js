define([
        'masseuse', 'backbone', 'memoryHelper', 'lang'
    ],
    function(masseuse, Backbone, memoryHelper, lang) {
        'use strict';

        return masseuse.MasseuseModel.extend({
            sync: sync,
            lang : lang
        });

        function sync(method, model, options) {
            options.headers = {
                'Authorization': 'token ' + memoryHelper.appData.access_token
            };

            return Backbone.sync(method, model, options);
        }
    });