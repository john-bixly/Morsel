define(['base64']), function(base64) {
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
        },
    }
}