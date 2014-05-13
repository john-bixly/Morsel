/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('server', [
        'prompt:build',
        'jshint',
        'clean',
        'paths:app',
        'copy:app',
        'sass:application',
        'setBuildConfig',
        'setJadeFilesDev',
        'jade:compile',
        'connect:admin',
        'connect:site',
        'watch'
    ]);
};
