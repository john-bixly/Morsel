define(['text!homeView/template.html'], function (template) {
    'use strict';

    return {
        appendTo : '#stage',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {
            title : 'PDX Moorsl!'
        }
    };
});