define(['facade', 'dependencies/definition/location'],
    function (Facade, location) {
        'use strict';
        var imp = {
            getUserLocation: getUserLocation
        };

        return new Facade(location, imp);

        function getUserLocation(mapHelper, $deferred) {
            navigator.geolocation.getCurrentPosition(locationHandler, failHandler);

            function locationHandler(position) {
                mapHelper.userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                $deferred.resolve();
            }

            function failHandler() {
                console.log('Failed getting user location');
            }
        }

    });