define([
    'masseuse', 'underscore'
], function (masseuse, _) {

    'use strict';
    var ComputedProperty = masseuse.ComputedProperty;

    return masseuse.MasseuseModel.extend({
        defaults : {
            setFields : new ComputedProperty(['fields', 'meta'], setAttributesOnSelf),
            fields : '',
            meta : ''
        },

        setAttributesOnSelf : setAttributesOnSelf
    });

    function setAttributesOnSelf(attrs) {
        var self = this;
        _.each(attrs, function (value, key) {
            self.set(key, value);
        });
    }


});