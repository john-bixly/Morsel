/*globals module:true */
module.exports = function(grunt) {
    'use strict';

    grunt.config('sass',{
        application : {
            options : {

                require : 'sass-globbing',
                sourcemap : true,
                quiet : true
            },
            files : {
                'build/app.css' : 'app/app.scss'
            }
        },
        redo : {
            options : {
                style : 'compressed',
                require : 'sass-globbing',
                sourcemap : true,
                quiet : true
            },
            files : {
                'build/app.css' : 'app/app.scss'
            }
        }
    });
}