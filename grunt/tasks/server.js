/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('server', [
        'prompt:build',
        'jshint',
        'clean',
        'setPaths',
        'copy:app',
        'sass:application',
        'setBuildConfig',
        'setJadeFilesDev',
        'jade:compile',
        'connect:admin',
        'connect:site',
        'watch'
    ]);

    grunt.registerTask('android', [
        'prompt:build',
        'jshint',
        'clean',
        'setPaths',
        'copy:app',
        'sass:application',
        'setBuildConfig',
        'setJadeFilesDev',
        'jade:compile',
        'shell:fixMobileIndex',
        'shell:removeMobile',
        'cordovacli:create',
        'copy:cordova',
        'cordovacli:build',
        'cordovacli:run'
    ]);
};
