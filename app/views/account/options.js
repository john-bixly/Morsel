define(['text!accountView/template.html'], function (template) {
    'use strict';

    return {
        appendTo : '#stage',
        template : template,
        rivetsInstaUpdate : false,
        modelData : {
            showRegistration:false
        }
    };
});