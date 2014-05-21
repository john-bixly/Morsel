define(['baseView', 'searchView/options', 'mapHelper', 'jquery'],
    function (baseView, options, mapHelper, $) {
        'use strict';

        return baseView.extend({
            defaultOptions: options,
            beforeRender : beforeRender,
            afterRender: afterRender,
            sortBy : sortBy,
            remove : remove
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
        }

        function _resizeMap() {
            var w =  window.innerWidth,
                h = window.innerHeight - 95; // Super lame.
            mapHelper.resizeMap(h, w);
        }

        function sortBy(e, option) {
            switch(option) {
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
            $(window).off('resize orientationChanged',_resizeMap.bind(this));
            baseView.prototype.remove.apply(this, arguments);
        }

    });