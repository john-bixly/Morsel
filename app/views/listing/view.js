define(['baseView', 'listingView/options', 'listingHelper'], function (baseView, options, listingHelper) {
    'use strict';

    return baseView.extend({
        defaultOptions: options,
        beforeRender: beforeRender
    });

    function beforeRender() {
        debugger;
        listingHelper.getListing(this.model.get('listingId'))
            .done(function(data){
                console.log(data);
            })
            .fail(function(err){
                console.log(err);
            });
    }

});