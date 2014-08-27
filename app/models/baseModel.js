define([
        'masseuse', 'backbone', 'memoryHelper', 'lang', 'constants'
    ],
    function(masseuse, Backbone, memoryHelper, lang, constants) {
        'use strict';

        return masseuse.MasseuseModel.extend({
            sync: sync,
            defaults : {
                lang : lang,
                constants : constants
            }
        });

        function sync(method, model, options) {
            options.headers = {
                'Authorization': 'token ' + memoryHelper.appData.access_token
            };

            return Backbone.sync(method, model, options);
        }
    });