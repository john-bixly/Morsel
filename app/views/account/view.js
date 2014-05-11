define(['masseuse', 'accountView/options', 'accountView/log_in/view', 'accountView/register/view'],
    function (masseuse, options, LoginView, RegisterView) {
        'use strict';

        var view = masseuse.plugins.rivets.RivetsView.extend({
            defaultOptions: options,
            beforeRender: beforeRender,
            toggleRegister : toggleRegister
        });

        function beforeRender() {
            this.addChildren([
                new LoginView(),
                new RegisterView()
            ]);
        }

        function toggleRegister() {
            this.model.set('showRegistration', !(this.model.get('showRegistration')));

        }

        return view;

    });