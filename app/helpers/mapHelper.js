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
            addPin: addPin,
            locations: null,
            map: null,
            searchManager: null,
            createMap: createMap,
            resizeMap: resizeMap
        };

        function createMap(div, options) {
            this.map = new Microsoft.Maps.Map(document.getElementById(div), _.extend(options, this.defaultOptions));
            Microsoft.Maps.loadModule('Microsoft.Maps.Search', { callback: createSearchManager.bind(this) });
        }

        function resizeMap(height, width) {
            if (!height && !width) {
                width = window.innerWidth;
                height = window.innerHeight - 95;
            }

            this.map.setOptions({
                height: height,
                width: width
            });
        }

        function addPin(listing) {
            var query = {
                    query : listing.location,
                    count : 1,
                    callback : searchCallback.bind(this),
                    errorCallback : searchError.bind(this)
                };
            this.searchManager.search(query);
        }

        function searchCallback(response) {
            var lat = response.parseResults[0].location.location.latitude,
                long = response.parseResults[0].location.location.longitude,
                location = new Microsoft.Maps.Location(lat, long),
                pin = new Microsoft.Maps.Pushpin(location, {text: 'TESTING'})
            this.map.entities.push(pin);

        }

        function searchError() {

        }

        function createSearchManager() {
            if (!this.searchManager) {
                this.map.addComponent('searchManager', new Microsoft.Maps.Search.SearchManager(this.map));
                this.searchManager = this.map.getComponent('searchManager');
            }
        }


    });
