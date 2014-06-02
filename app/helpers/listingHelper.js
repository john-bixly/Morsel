define(['jquery', 'memoryHelper', 'constants'], function ($, memoryHelper, constants) {
    'use strict';

    return {
        getAllListings : getAllListings
    };

    function getAllListings() {
        return $.ajax({
            dataType: 'json',
            url: constants.content.query,
            type: 'POST',
            data : {
                nodes : ['537057c2b0ad2f6c153ed59e'],
                options: {
                    //include: ['node','fields.testfield']
                }
            },
            headers: {
                'Authorization': 'token ' + memoryHelper.appData.access_token
            }
        });
    }

});