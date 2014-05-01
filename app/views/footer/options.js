define(['text!footerView/template.html'], function (template) {
    'use strict';

    return {
        appendTo : '#footer',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {

        }
    };
});