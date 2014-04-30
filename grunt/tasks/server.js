/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('server', [
        'jshint',
        'paths:app',
        'copy:app',
        'sass:application',
        'setJadeFilesDev',
        'jade:compile',
        'connect:site',
        'watch'
    ]);
};
