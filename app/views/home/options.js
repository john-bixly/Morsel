define(['text!homeView/template.html', 'baseModel'], function (template, Model) {
    'use strict';

    return {
        appendTo : '#stage',
        template : template,
        ModelType: Model,
        rivetsInstaUpdate : true,
        modelData : {

        }
    };
});