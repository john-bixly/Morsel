define(['facade', 'dependencies/definition/initializer', 'router', 'underscore', 'backbone', 'jquery',
    'applicationHelper','memoryHelper', 'fastclick', 'foundation'],
    function (Facade, initializer, Router, _, Backbone, $, applicationHelper, memoryHelper, FastClick) {
        'use strict';
        var imp = {
            initialize: initialize
        };

        return new Facade(initializer, imp);

        function initialize() {
            _getApplication.call(this);
            _setupRouter.call(this);
            _setupHistory.call(this);
            _startUI.call(this);
        }

        function _setupRouter() {
            var router = new Router();
            router.start();
            _pushStateCompensation.call(this, router);
        }

        function _pushStateCompensation(router) {
            $(document).on('click', 'a[href^="/"]', function (event) {
                if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
                    if (!$(event.currentTarget).attr('ignoreRouting')) {
                        event.preventDefault();
                        var url = $(event.currentTarget).attr('href').replace(/^\//, '');
                        router.navigate(url, { trigger: true });
                    }
                }
            });
        }

        function _setupHistory() {
            Backbone.history.start({pushState: true});
            Backbone.history.breadCrumb = [];
            Backbone.history.on('route', function () {
                Backbone.history.breadCrumb.push(this.fragment);
            });
        }

        function _startUI() {
            $(document).foundation();
            FastClick.attach(document.body);
        }

        function _getApplication() {
            applicationHelper.getAppToken()
                .done(_setAppToken.bind(this))
                .fail(_throwError.bind(this));
        }

        function _setAppToken(data) {
            memoryHelper.appData = data;
        }

        function _throwError(error) {
            console.log(error);
        }


    });
