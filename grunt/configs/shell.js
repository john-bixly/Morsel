/*globals module:true*/
module.exports = function(grunt) {
    'use strict';

    grunt.config('shell', {
        'testPhantom' : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'mocha-phantomjs build/tests/index.html'
        },
        'startApi' : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'pm2 start node_modules/grasshopper-api/bin/grasshopper-api.js'
        },
        'buildAdmin' : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : './node_modules/.bin/grasshopper build'
        }
    });
};
