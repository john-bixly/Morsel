define(['masseuse', 'homeView/options', 'jquery', 'base64'], function (masseuse, options, $, base64) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions: options,
        beforeRender: beforeRender
    });

    function beforeRender() {
        var login = $.ajax({
            dataType: 'json',
            url: 'http://grasshopper-api.herokuapp.com/token',
            type: 'GET',
            headers: {
                'Authorization': 'Basic ' +base64.encode('apitestuser' + ':' + 'TestPassword')
            }
        });

        login.done(function () {
            debugger;
        });
    }

});