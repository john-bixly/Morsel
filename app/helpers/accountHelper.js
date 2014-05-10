define(['base64', 'jquery', 'constants']), function(base64, $, constants) {
    'use strict';

    return {
        getToken : function (username, password) {
            return $.ajax({
                dataType : 'json',
                url : constants.api.account.login,
                type : 'GET',
                headers : {
                    'Authorization' : 'Basic ' + base64.encode(username + ':' + password)
                }
            });
        }
    };
};