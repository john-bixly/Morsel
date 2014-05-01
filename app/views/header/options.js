define(['text!headerView/template.html'], function (template) {
    'use strict';

    return {
        appendTo : '#header',
        template : template,
        rivetsInstaUpdate : false,
        modelData : {
        }
    };
});