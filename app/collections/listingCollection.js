define([
    'backbone','listingModel'
], function (Backbone, ListingModel) {

    'use strict';

    return Backbone.Collection.extend({
        model : ListingModel
    });


});