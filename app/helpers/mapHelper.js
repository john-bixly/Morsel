define(['underscore', 'async!http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0!onscriptload'],
    function (_) {
        'use strict';

        return {
            defaultOptions: {
                credentials: 'AtQNTms4bvR983SS3_sgRwSW5HABq5Z6YwWIHWiKltP1dtav9e4WoxQC-2qNnEmj',
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                showDashboard: false,
                zoom: 10,
                center: new Microsoft.Maps.Location(45.5, -122.5),
                showMapTypeSelector: false,
                tileBuffer: 3,
                enableSearchLogo: false

            },
            map: null,
            createMap: createMap,
            resizeMap: resizeMap
        };

        function createMap(div, options) {
            this.map = new Microsoft.Maps.Map(document.getElementById(div), _.extend(options, this.defaultOptions));
        }

        function resizeMap(height, width) {
            this.map.setOptions({
                height: height,
                width: width
            });
        }

    });
