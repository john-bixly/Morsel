/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    grunt.config('jade', {
        compile: {
            options: {
                data: {
                    debug: false
                },
                pretty: true

            }
            // files set dynamically in setJadeFilesDev task.
        },
        redo: {
            options: {
                data: {
                    debug: false
                },
                pretty: true

            }
            // files set dynamically in setJadeFilesRedo task.
        }
    });
}