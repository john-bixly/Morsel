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
                        '!main.template.json',
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
                        '!main.template.json',
                        '!index.html',
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