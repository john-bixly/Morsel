define(['base64', 'jquery', 'localStorage'], function (base64, $, localStorage) {
    'use strict';

    return {
        getToken: getToken,
        getUser : getUser,
        createAccount : createAccount
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

    function createAccount(username, password, email) {
        return $.ajax({
            dataType: 'json',
            url: 'http://localhost:3000/user',
            type: 'GET',
            data : {username : username, password : password, email:email},
            headers: {
                'Authorization': 'token ' + localStorage.get('authToken')
            }
        });
    }
});