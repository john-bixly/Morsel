define(['text!views/main/template.html'], function (template) {
    'use strict';

    return {
        appendTo : '#stage',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {
            title : 'Hello world!'
        }
    };
});