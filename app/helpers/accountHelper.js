define(['base64', 'jquery', 'localStorage'], function (base64, $, localStorage) {
    'use strict';

    return {
        getToken: getToken,
        getUser : getUser
    };

    function getToken(username, password) {
        return $.ajax({
            dataType: 'json',
            url: 'http://localhost:3000/token',
            type: 'GET',
            headers: {
                'Authorization': 'Basic ' + base64.encode(username + ':' + password)
            }
        });
    }

    function getUser() {
        return $.ajax({
            dataType: 'json',
            url: 'http://localhost:3000/user',
            type: 'GET',
            headers: {
                'Authorization': 'token ' + localStorage.get('authToken')
            }
        });
    }
});