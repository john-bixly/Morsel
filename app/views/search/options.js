define(['text!searchView/template.html', 'rivetsBinders'], function (template, rivetsBinders) {
    'use strict';

    return {
        appendTo : '#stage',
        template : template,
        rivetsInstaUpdate : true,
        rivetsConfig : {
            binders : [rivetsBinders]
        }
    };
});