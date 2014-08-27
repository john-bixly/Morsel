define(['text!accountView/template.html', 'baseModel'], function (template, Model) {
    'use strict';

    return {
        appendTo : '#stage',
        ModelType: Model,
        template : template,
        rivetsInstaUpdate : false,
        modelData : {
            showRegistration:false
        }
    };
});