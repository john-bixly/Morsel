/*globals module:true */
module.exports = function (grunt) {
    'use strict';
    grunt.config('copy', {
        app : {
            files : [
                {
                    expand : true,
                    cwd : 'app/',
                    src : [
                        '**',
                        '!paths.json',
                        '!main.js',
                        '!config/config.local.json',
                        '!config/config.production.json',
                        '!config/config.staging.json',
                        '!**/*.jade',
                        '!**/*.css',
                        '!**/*.scss'
                    ],
                    dest : 'build/'
                }
            ]
        },
        reload : {
            files : [
                {
                    expand : true,
                    cwd : 'app/',
                    src : [
                        '**',
                        '!vendor/**/*',
                        '!paths.json',
                        '!dependencies/**/*',
                        '!main.js',
                        '!index.html',
                        '!config/config.local.json',
                        '!config/config.production.json',
                        '!config/config.staging.json',
                        '!**/*.jade',
                        '!**/*.css',
                        '!**/*.scss'
                    ],
                    dest : 'build/'
                }
            ]
        },
        tests : {
            files : [
                {
                    expand : true,
                    cwd : 'tests/',
                    src : [
                        '**',
                        '!paths.json',
                        '!main.template.json'
                    ],
                    dest : 'build/tests/'
                }
            ]
        }
    });
};