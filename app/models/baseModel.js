define([
    'masseuse', 'backbone', 'memoryHelper'
], function (masseuse, Backbone, memoryHelper) {
    'use strict';

    return masseuse.MasseuseModel.extend({
        sync : sync
    });

    function sync (method, model, options) {
        options.headers = {
            'Authorization': 'token ' + memoryHelper.appData.access_token
        };

        return Backbone.sync(method, model, options);
    }
});