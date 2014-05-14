define(['baseView', 'accountView/register/options', 'accountHelper', 'underscore'],
    function (baseView, options, accountHelper, _) {
        'use strict';

        return baseView.extend({
            defaultOptions: options,
            submit: submit
        });

        function submit(e) {
            accountHelper.createAccount(this.model.toJSON())
                .done(_saveUser.bind(this))
                .fail(_throwError.bind(this));
            e.preventDefault();
        }

        function _saveUser(data) {
            _.each(data, _setUserAttribute.bind(this));
            this.app.router.navigate('home');
        }

        function _setUserAttribute(value, key) {
            this.app.user.set(key, value);
        }

        function _throwError(error) {
            console.log(error);
        }

    });