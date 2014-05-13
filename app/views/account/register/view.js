define(['masseuse', 'accountView/register/options', 'accountHelper'], function (masseuse, options, accountHelper) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions: options,
        submit: submit
    });

    function submit(e) {
        accountHelper.createAccount(this.model.get('username'), this.model.get('password'))
            .done(_saveToken.bind(this))
            .fail(_throwError.bind(this));
        e.preventDefault();
    }

    function _saveToken () {

    }

    function _throwError (error) {
        console.log(error);
    }

});