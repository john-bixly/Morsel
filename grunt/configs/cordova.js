module.exports = function (grunt) {
    'use strict';
    grunt.config('cordovacli', {
        create: {
            options: {
                command: ['create'],
                platforms: ['android'],
                plugins: ['device', 'dialogs'],
                path: 'mobileBuild',
                id: 'io.moorsl.moorsl',
                name: 'Moorsl'
            }
        },
        build: {
            options: {
                command: ['platform', 'plugin', 'build'],
                platforms: ['android'],
                plugins: ['device', 'dialogs'],
                path: 'mobileBuild',
                id: 'io.moorsl.moorsl',
                name: 'Moorsl'
            }
        },
        run: {
            options: {
                command: 'run',
                platforms: ['android'],
                plugins: ['device', 'dialogs'],
                path: 'mobileBuild',
                id: 'io.moorsl.moorsl',
                name: 'Moorsl'
            }
        }
    });
};
