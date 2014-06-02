/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    grunt.config('prompt', {
        build : {
            options : {
                questions : [
                    {
                        config : 'env',
                        type : 'list',
                        message : 'Which environment would you like to push the build to?',
                        default : 'local',
                        choices : ['local','staging', 'production']
                    },
                    {
                        config : 'platform',
                        type : 'list',
                        message : 'Which platform would you like to target?',
                        default : 'browser',
                        choices : ['browser', 'mobile']
                    }
                ]
            }
        }
    });
};
