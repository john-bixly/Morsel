define(['base64', 'jquery', 'constants'], function (base64, $, constants) {
    'use strict';

    return {
        getAppToken: getAppToken
    };

    function getAppToken() {
        return $.ajax({
            dataType: 'json',
            url: constants.account.login,
            type: 'GET',
            headers: {
                'Authorization': 'Basic ' + base64.encode(
                    constants.application.user + ':' + constants.application.password
                )
            }
        });
    }
});