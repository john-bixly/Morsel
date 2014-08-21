define(['baseView', 'searchView/options', 'mapHelper', 'listingHelper', 'jquery', 'underscore',
    'listingCollection'],
    function (baseView, options, mapHelper, listingHelper, $, _, ListingCollection) {
        'use strict';

        return baseView.extend({
            defaultOptions: options,
            afterRender: afterRender,
            sortBy: sortBy,
            remove: remove,
            displayListing: displayListing,
            listings: null
        });

        function afterRender() {
            mapHelper.initializeMapObjects('map-canvas', {})
                .then(_setupListeners.bind(this), throwError.bind(this))
                .then(_getListings.bind(this), throwError.bind(this))
                .then(_getUserLocation.bind(this), throwError.bind(this));
        }

        function _setupListeners() {
            $(window).on('resize orientationChanged', _resizeMap.bind(this));
        }

        function _getListings() {
            return listingHelper.getAllListings()
                .done(_processListings.bind(this))
                .fail(throwError.bind(this));
        }

        function _getUserLocation() {
            return mapHelper.getUserLocation();
                //.done(mapHelper.addUserLocation.bind(mapHelper));
        }

        function _processListings(listings) {
            this.listings = new ListingCollection(listings.results);
            _setListings.call(this);
        }

        function _setListings() {
            _.each(this.listings.models, _setListing.bind(this));
        }

        function _setListing(listing) {
            mapHelper.setListing(listing, this);
        }

        function _resizeMap() {
            mapHelper.resizeMap();
        }

        function sortBy(e, option) {
            switch (option) {
                case 'distance':
                    _sortByDistance.call(this);
                    break;
                case 'rating':
                    _sortByRating.call(this);
                    break;
            }
            _setActiveToggle.call(this, e.delegateTarget);
            e.preventDefault();
        }

        function _setActiveToggle(element) {
            $('.subnavToggle.active').removeClass('active');
            $(element).parent('dd').addClass('active');
        }

        function _sortByDistance() {

        }

        function _sortByRating() {

        }

        function displayListing(id) {
            this.app.router.navigate('listing/' + id, {trigger: true});
        }

        function remove() {
            $(window).off('resize orientationChanged', _resizeMap.bind(this));
            baseView.prototype.remove.apply(this, arguments);
        }

        function throwError(err) {
            console.log(err);
        }

    });