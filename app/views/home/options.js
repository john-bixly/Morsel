define(['text!views/home/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {

        }
    };
});