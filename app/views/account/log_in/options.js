define(['text!accountView/log_in/template.html', 'baseModel'], function (template, Model) {
    'use strict';

    return {
        appendTo : '#stage',
        ModelType: Model,
        template : template,
        rivetsInstaUpdate : false,
        modelData : {

        }
    };
});