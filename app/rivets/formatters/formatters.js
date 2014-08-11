define([], function () {
    'use strict';

    return {
        asDollars: asDollars
    };

    function asDollars(amount) {
        return '$' + parseFloat(amount).toFixed(2);
    }
});
