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
                'grep -rl "vendor/" index.html | xargs sed -i "" "s|vendor/|/android_asset/www/vendor/"',
                'grep -rl \'data-main="\' index.html | xargs sed -i "" \'s|data-main="|data-main="/android_asset/www/|g\' ',
                'grep -rl \'<link rel="stylesheet" href="\' index.html | xargs sed -i "" \'s|<link rel="stylesheet" href="|<link rel="stylesheet" href="/android_asset/www/|g\' ',
                'grep -rl "../fonts/" application.css | xargs sed -i "" "s!../fonts/!/android_asset/www/fonts/!g"'
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
