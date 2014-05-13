define(['base64', 'jquery', 'constants'], function (base64, $, constants) {
    'use strict';

    return {
        getAppToken: getAppToken
    };

    function getAppToken() {
        return $.ajax({
            dataType: 'json',
            url: 'http://localhost:3000/token',
            type: 'GET',
            headers: {
                'Authorization': 'Basic ' + base64.encode(
                    constants.application.appUser + ':' + constants.application.appPass
                )
            }
        });
    }
});