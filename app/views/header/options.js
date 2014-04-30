define(['text!views/header/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        rivetsInstaUpdate : false,
        modelData : {
        }
    };
});