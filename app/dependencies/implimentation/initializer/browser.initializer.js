define(['facade', 'dependencies/definition/initializer'],
    function (Facade, initializer) {
        'use strict';
        var imp = {
            initialize: initialize
        };

        return new Facade(initializer, imp);

        function initialize() {

        }


    });
