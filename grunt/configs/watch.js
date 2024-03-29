/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('watch', {
        site : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'app/**/*.js',
                '!app/vendor/**',
                '!app/dependencies/**'
            ],
            tasks : [
                'jshint',
                'copy:reload'
            ]
        },
        jade : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'app/**/*.jade',
                '!app/vendor/**'
            ],
            tasks : [
                'setJadeFilesDev',
                'jade:compile'
            ]
        },
        sass : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'app/**/*.scss',
                '!app/vendor/**'
            ],
            tasks : [
                'sass:application'
            ]
        },
        tests : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'build/tests/**/*.js'
            ],
            tasks : [
                'jshint',
                'copy:tests'
            ]
        },
        siteJson : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'app/paths.json'
            ],
            tasks : [
                'paths:app',
                'copy:app'
            ]
        },
        testsJson : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'tests/paths.json'
            ],
            tasks : [
                'paths:tests',
                'copy:tests'
            ]
        }
    });
};