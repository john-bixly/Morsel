module.exports = function (grunt) {
    'use strict';
    grunt.config('cordovacli', {
        create: {
            options: {
                command: ['create'],
                platforms: ['android'],
                plugins: ['device', 'dialogs', 'geolocation'],
                path: 'mobileBuild',
                id: 'io.morsel.morsel',
                name: 'Morsel'
            }
        },
        build: {
            options: {
                command: ['platform', 'plugin', 'build'],
                platforms: ['android'],
                plugins: ['device', 'dialogs', 'geolocation'],
                path: 'mobileBuild',
                id: 'io.morsel.morsel',
                name: 'Morsel'
            }
        },
        run: {
            options: {
                command: 'run',
                platforms: ['android'],
                plugins: ['device', 'dialogs','geolocation'],
                path: 'mobileBuild',
                id: 'io.morsel.morsel',
                name: 'Morsel'
            }
        }
    });
};
