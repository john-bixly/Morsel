/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('initApp', [
        'shell:startApi',
        'shell:buildAdmin',
        'jshint',
        'clean',
        'paths:app',
        'copy:app',
        'sass:application',
        'setJadeFilesDev',
        'jade:compile',
        'connect:admin',
        'connect:site',
        'watch'
    ]);
};
