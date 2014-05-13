define(['masseuse', 'jquery','headerView/view', 'footerView/view','homeView/view', 'accountView/view', 'userModel'],
    function (masseuse, $, HeaderView, FooterView, HomeView, AccountView, UserModel) {
        'use strict';
        var currentView,
            BaseView = masseuse.BaseView,
            userModel = new UserModel();

        return masseuse.MasseuseRouter.extend({
            start: start,
            initializeApp: initializeApp,
            loadAccount : loadAccount,
            loadHome : loadHome,
            load : load,
            routes: {
                'account': 'loadAccount',
                'home': 'loadHome',
                '*path': 'initializeApp'
            }

        });

        function loadAccount() {
            load.call(this, AccountView, {}, true);
        }

        function loadHome() {
            load.call(this, HomeView, {}, true);
        }

        function initializeApp() {
            load.call(this, HomeView, {}, true);
        }

        function start() {
            _attachAppNamespace.call(this);
            this.headerView = new HeaderView();
            this.headerView.start();
            this.footerView = new FooterView();
            this.footerView.start();
        }

        function _attachAppNamespace () {
            BaseView.prototype.app = {
                user : userModel,
                router : this
            };
        }

        function load(ViewType, config, bypass) {
            var $deferred = new $.Deferred(),
                newView = new ViewType(config);

            if (currentView && currentView.options && currentView.options.name === config.name && !bypass) {
                return $deferred.resolve(currentView)
                    .promise();
            }

            newView.on('all', function (event) {
                switch (event) {
                    case BaseView.beforeRenderDone:
                        if (currentView) {
                            currentView.remove();
                        }
                        currentView = newView;
                        break;
                }
            });

            newView.start()
                .done(function () {
                    $deferred.resolve(newView);
                })
                .fail($deferred.reject.bind(this));

            return $deferred.promise();
        }

    });
