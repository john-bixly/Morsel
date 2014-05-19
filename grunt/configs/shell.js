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
        },
        'removeMobile' : {
            command : 'rm -rf mobileBuild/'
        },
        fixMobileIndex : {
            command : [
                'sed -i "s|/vendor/requirejs/require.js|/android_asset/www/vendor/requirejs/require.js|g" index.html',
                'sed -i \'s|/main|/android_asset/www/main|g\' index.html',
                'sed -i \'s|/app.css|/android_asset/www/app.css|g\' index.html',
                'sed -i "s!../fonts/!/android_asset/www/fonts/!g" app.css'
            ].join('&&'),
            options : {
                stdout : true,
                failOnError : true,
                stderr : true,
                execOptions : {
                    cwd : 'build'
                }
            }
        }
    });
};
