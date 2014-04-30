define(['text!views/footer/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {

        }
    };
});