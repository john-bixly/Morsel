define(['baseView', 'accountView/log_in/options', 'accountHelper', 'localStorage', 'underscore'],
    function (baseView, options, accountHelper, localStorage, _) {
        'use strict';

        return baseView.extend({
            defaultOptions: options,
            logIn: logIn
        });

        function logIn(e) {
            accountHelper.getToken(this.model.get('username'), this.model.get('password'))
                .done(_saveToken.bind(this))
                .fail(_throwError.bind(this));
            e.preventDefault();
        }

        function _saveToken(data) {
            _saveTokenToLocalStorage.call(this, data);
            _getUser.call(this);
        }

        function _saveTokenToLocalStorage(data) {
            localStorage.set('authToken', data.access_token);
            localStorage.set('tokenType', data.token_type);
        }

        function _getUser() {
            accountHelper.getUser()
                .done(_setUserModel.bind(this))
                .fail(_throwError.bind(this));
        }

        function _setUserModel(data) {
            _.each(data, _iterateIncomingUserData.bind(this));
            this.app.router.navigate('home');
        }

        function _iterateIncomingUserData(value, key) {
            this.app.user.set(key, value);
        }

        function _throwError(error) {
            console.log(error);
        }

    });