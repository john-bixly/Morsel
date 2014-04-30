/*globals module:true */
module.exports = function(grunt) {
    'use strict';

    grunt.config('releaseNotes', {
        main : {
            src : 'templates/README.template.md',
            dest : 'README.md',
            baseLinkPath : '/tree/master/'
        }
    });
};