define(['../.', 'jquery','views/header/view', 'views/footer/view','views/home/view'],
    function (masseuse, $, HeaderView, FooterView, HomeView) {
        'use strict';
        var currentView,
            BaseView = masseuse.BaseView;

        return masseuse.MasseuseRouter.extend({
            initialize: initialize,
            start: start,
            initializeApp: initializeApp,
            load : load,
            routes: {
                '*path': 'initializeApp'
            }
        });

        function initialize() {

        }

        function initializeApp() {
            load.call(this, HomeView, {}, true);
        }

        function start() {
            /*this.headerView = new HeaderView();
            this.headerView.start();
            this.footerView = new FooterView();
            this.footerView.start();*/
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
