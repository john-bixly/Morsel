define(['underscore', 'async!http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0!onscriptload'],
    function (_) {
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
            initializeMapObjects: initializeMapObjects,
            createMap : createMap,
            resizeMap: resizeMap,
            setListing : setListing,
            searchForAddress : searchForAddress
        };

        function initializeMapObjects(div, options) {
            var $deferred = new $.Deferred();
            Microsoft.Maps.loadModule('Microsoft.Maps.Overlays.Style', { callback: createMap.bind(this, div, options, $deferred) });
            Microsoft.Maps.loadModule('Microsoft.Maps.Search', { callback: createSearchManager.bind(this) });
            return $deferred.promise();
        }

        function createMap(div, options, $deferred) {
            this.map = new Microsoft.Maps.Map(document.getElementById(div), _.extend(options, this.defaultOptions));
            _.defer(resizeMap.bind(this));
            $deferred.resolve();
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
                query : listing.fields.location,
                count : 1,
                callback : addPin.bind(this, listing, view),
                errorCallback : searchError.bind(this)
            });
        }

        function addPin(listing,view,response) {
            var lat = response.parseResults[0].location.location.latitude,
                long = response.parseResults[0].location.location.longitude,
                location = new Microsoft.Maps.Location(lat, long),
                pin = new Microsoft.Maps.Pushpin(location, {}),
                pinInfobox = new Microsoft.Maps.Infobox(
                    pin.getLocation(),
                    {
                        title: listing.fields.cuisinetitle,
                        titleClickHandler : view.displayListing.bind(view, listing._id),
                        description: listing.fields.description,
                        visible: false,
                        offset: new Microsoft.Maps.Point(0,15)
                    });

            Microsoft.Maps.Events.addHandler(pin, 'click', displayInfobox.bind(this, pinInfobox));
            Microsoft.Maps.Events.addHandler(this.map, 'viewchange', hideInfobox.bind(this, pinInfobox));

            this.map.entities.push(pin);
            this.map.entities.push(pinInfobox);

        }

        function displayInfobox(pinInfobox, e)
        {
            pinInfobox.setOptions({ visible:true });
        }

        function hideInfobox(pinInfobox,e)
        {
            pinInfobox.setOptions({ visible: false });
        }

        function searchError() {
            console.log('map error');
        }

        function createSearchManager() {
            if (!this.searchManager) {
                this.map.addComponent('searchManager', new Microsoft.Maps.Search.SearchManager(this.map));
                this.searchManager = this.map.getComponent('searchManager');
            }
        }


    });
