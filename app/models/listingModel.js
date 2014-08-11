define([
    'masseuse', 'underscore', 'constants', 'baseModel'
], function (masseuse, _, constants, baseModel) {

    'use strict';
    var ComputedProperty = masseuse.ComputedProperty;

    return baseModel.extend({
        idAttribute: '_id',
        defaults: {
            setFields: new ComputedProperty(['fields', 'meta'], setAttributesOnSelf),
            listingImage : new ComputedProperty(['image'], function(image){
                return constants.assets.assetBase + image;
            })
        },
        url: url,
        urlRoot: url,
        setAttributesOnSelf: setAttributesOnSelf
    });

    function url () {
        return constants.content.content + '/' + this.get('_id');
    }

    function setAttributesOnSelf(attrs) {
        var self = this;
        _.each(attrs, function (value, key) {
            self.set(key, value);
        });
    }


});