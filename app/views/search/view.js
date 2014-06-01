define(['baseView', 'searchView/options', 'mapHelper', 'listingHelper', 'jquery', 'underscore'],
    function (baseView, options, mapHelper, listingHelper, $, _) {
        'use strict';

        return baseView.extend({
            defaultOptions: options,
            beforeRender: beforeRender,
            afterRender: afterRender,
            sortBy: sortBy,
            remove: remove,
            listings : null
        });

        function beforeRender() {
            _setupListeners.apply(this);
        }

        function _setupListeners() {
            $(window).on('resize orientationChanged', _resizeMap.bind(this));
        }

        function afterRender() {
            mapHelper.createMap('map-canvas', {});
            _resizeMap.call(this);
            listingHelper.getAllListings()
                .done(_processListings.bind(this));
        }

        function _processListings(listings) {
            this.listings = listings.results;
            _.each(this.listings, _setListing.bind(this));
        }

        function _setListing(listing) {
            mapHelper.addPin(listing.fields);
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

        function remove() {
            $(window).off('resize orientationChanged', _resizeMap.bind(this));
            baseView.prototype.remove.apply(this, arguments);
        }

    });