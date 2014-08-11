define(['masseuse', 'jquery','headerView/view', 'footerView/view','homeView/view', 'accountView/view', 'userModel',
    'accountView/log_in/view', 'accountView/register/view', 'searchView/view', 'listingView/view'],
    function (masseuse, $, HeaderView, FooterView, HomeView, AccountView, UserModel, SignInView, RegisterView,
              SearchView, ListingView) {
        'use strict';
        var currentView,
            BaseView = masseuse.BaseView,
            userModel = new UserModel();

        return masseuse.MasseuseRouter.extend({
            start: start,
            initializeApp: initializeApp,
            loadAccount : loadAccount,
            loadSignIn : loadSignIn,
            signOut : signOut,
            loadRegister : loadRegister,
            loadHome : loadHome,
            loadListing : loadListing,
            loadSearch : loadSearch,
            load : load,
            routes: {
                'account': 'loadAccount',
                'sign-in':'loadSignIn',
                'sign-out':'signOut',
                'register':'loadRegister',
                'search':'loadSearch',
                'home': 'loadHome',
                'listing/:id' : 'loadListing',
                '*path': 'initializeApp'
            }

        });

        function loadAccount() {
            load.call(this, AccountView, {}, true);
        }

        function loadSignIn() {
            load.call(this, SignInView, {}, true);
        }

        function signOut() {
            BaseView.prototype.app.user.clear();
            this.navigate('home', {trigger:true});
        }

        function loadRegister() {
            load.call(this, RegisterView, {}, true);
        }

        function loadHome() {
            load.call(this, HomeView, {}, true);
        }

        function loadListing(listingId) {
            load.call(this, ListingView, {modelData : {_id : listingId}}, true);
        }

        function loadSearch() {
            load.call(this, SearchView, {}, true);
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
