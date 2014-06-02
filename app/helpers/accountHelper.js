define(['base64', 'jquery', 'localStorage', 'memoryHelper', 'constants'],
    function (base64, $, localStorage, memoryHelper, constants) {
    'use strict';

    return {
        getToken: getToken,
        getUser: getUser,
        createAccount: createAccount
    };

    function getToken(username, password) {
        return $.ajax({
            dataType: 'json',
            url: constants.account.login,
            type: 'GET',
            headers: {
                'Authorization': 'Basic ' + base64.encode(username + ':' + password)
            }
        });
    }

    function getUser() {
        return $.ajax({
            dataType: 'json',
            url: constants.account.getUser,
            type: 'GET',
            headers: {
                'Authorization': 'token ' + localStorage.get('authToken')
            }
        });
    }

    function createAccount(data) {
        return $.ajax({
            dataType: 'json',
            url: constants.account.createAccount,
            type: 'POST',
            data: {
                login: data.username,
                password: data.password,
                email: data.email,
                firstname : data.firstName,
                lastname : data.lastName
            },
            headers: {
                'Authorization': 'token ' + memoryHelper.appData.access_token
            }
        });
    }
});