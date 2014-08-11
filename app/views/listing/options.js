define(['text!listingView/template.html', 'listingModel', 'formatters'], function (template, Model, formatters) {
    'use strict';

    return {
        appendTo: '#stage',
        ModelType: Model,
        template: template,
        rivetsInstaUpdate: true,
        rivetsConfig: {
            formatters: [formatters]
        }
    };
});