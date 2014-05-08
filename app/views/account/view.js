define(['masseuse', 'accountView/options', 'accountView/log_in/view', 'accountView/register/view'],
    function (masseuse, options, LoginView, RegisterView) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions: options,
        beforeRender: beforeRender
    });

    function beforeRender() {
        this.addChildren([
            new LoginView(),
            new RegisterView()
        ]);
    }

});