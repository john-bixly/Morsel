define(['masseuse', 'accountView/log_in/options'], function (masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions: options,
        logIn : logIn,
        toggleRegister : toggleRegister
    });

    function logIn (e) {

        e.preventDefault();
    }

    function toggleRegister (e) {
        e.preventDefault();
    }

});