define([
    'masseuse', 'underscore', 'constants', 'baseModel', 'lang'
], function (masseuse, _, constants, baseModel, lang) {

    'use strict';
    var ComputedProperty = masseuse.ComputedProperty;

    return baseModel.extend({
        idAttribute: '_id',
        defaults: {
            lang : lang,
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