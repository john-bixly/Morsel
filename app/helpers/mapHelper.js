define(['underscore', 'location', 'async!http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0!onscriptload'],
    function (_, location) {
        'use strict';
        return {
            defaultOptions: {
                credentials: 'AtQNTms4bvR983SS3_sgRwSW5HABq5Z6YwWIHWiKltP1dtav9e4WoxQC-2qNnEmj',
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                showDashboard: true,
                zoom: 11,
                center: new Microsoft.Maps.Location(45.5, -122.5),
                showMapTypeSelector: false,
                tileBuffer: 3,
                enableSearchLogo: false,
                customizeOverlays: true

            },
            addPin: addPin,
            locations: null,
            map: null,
            searchManager: null,
            userLocation: null,
            initializeMapObjects: initializeMapObjects,
            createMap: createMap,
            getUserLocation: getUserLocation,
            addUserLocation: addUserLocation,
            resizeMap: resizeMap,
            setListing: setListing,
            searchForAddress: searchForAddress
        };

        function initializeMapObjects(div, options) {
            this.$Initdeferred = new $.Deferred();
            Microsoft.Maps.loadModule('Microsoft.Maps.Overlays.Style', { callback: createMap.bind(this, div, options) });
            return this.$Initdeferred.promise();
        }

        function createMap(div, options) {
            this.map = new Microsoft.Maps.Map(document.getElementById(div), _.extend(options, this.defaultOptions));
            Microsoft.Maps.loadModule('Microsoft.Maps.Search', { callback: createSearchManager.bind(this) });
            _.defer(resizeMap.bind(this));
        }

        function getUserLocation() {
            var $deferred = $.Deferred();
            location.getUserLocation(this, $deferred);
            return $deferred.promise();
        }

        function addUserLocation() {
            var userLocation = new Microsoft.Maps.Location(this.userLocation.lat, this.userLocation.lng),
                pin = new Microsoft.Maps.Pushpin(userLocation, {});
            this.map.entities.push(pin);
            this.map.setView({center: userLocation, zoom: 14});
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

        function setListing(listing, view) {
            this.searchForAddress(listing, view);
        }

        function searchForAddress(listing, view) {
            this.searchManager.search({
                query: listing.get('location'),
                count: 1,
                callback: addPin.bind(this, listing, view),
                errorCallback: searchError.bind(this)
            });
        }

        function addPin(listing, view, response) {
            var lat = response.parseResults[0].location.location.latitude,
                long = response.parseResults[0].location.location.longitude,
                location = new Microsoft.Maps.Location(lat, long),
                pin = new Microsoft.Maps.Pushpin(location, {}),
                pinInfobox = new Microsoft.Maps.Infobox(
                    pin.getLocation(),
                    {
                        title: listing.get('cuisinetitle'),
                        titleClickHandler: view.displayListing.bind(view, listing.get('_id')),
                        description: listing.get('description'),
                        visible: false,
                        offset: new Microsoft.Maps.Point(0, 15)
                    });

            Microsoft.Maps.Events.addHandler(pin, 'click', displayInfobox.bind(this, pinInfobox, pin));
            Microsoft.Maps.Events.addHandler(this.map, 'viewchange', hideInfobox.bind(this, pinInfobox));

            this.map.entities.push(pin);
            this.map.entities.push(pinInfobox);

        }

        function displayInfobox(pinInfobox, pin) {
            this.map.setView({center: pin.getLocation(), zoom: 16});
            _.delay(function () {
                pinInfobox.setOptions({ visible: true })
            }, 500);
        }

        function hideInfobox(pinInfobox, e) {
            pinInfobox.setOptions({ visible: false });
        }

        function searchError() {
            console.log('map error');
        }

        function createSearchManager() {
            if (!this.searchManager) {
                this.map.addComponent('searchManager', new Microsoft.Maps.Search.SearchManager(this.map));
                this.searchManager = this.map.getComponent('searchManager');
                this.$Initdeferred.resolve();
            }
        }


    });
