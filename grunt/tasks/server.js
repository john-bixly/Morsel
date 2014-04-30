/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('server', [
        'jshint',
        'paths:app',
        'copy:app',
        'setJadeFilesDev',
        'jade:compile',
        'connect:site',
        'watch'
    ]);
};
