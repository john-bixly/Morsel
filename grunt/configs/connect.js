/*globals module:true */
module.exports = function (grunt) {
    'use strict';
    var path = require('path'),
        folderMount = function folderMount (connect, paths) {
            return connect.static(path.resolve(paths[0]));
        },
        modRewrite = require('connect-modrewrite');

    grunt.config('connect', {
        site : {
            options : {
                port : 9001,
                hostname : 'localhost',
                base : './build',
                open : {
                    target : 'http://localhost:9001'
                },
                middleware : function (connect, options) {
                    return [
                        modRewrite([
                            '!\\.jpg|\\.html|\\.js|\\.css|\\.scss|\\.png$ /index.html [L]'
                        ]),
                        require('connect-livereload')(),
                        folderMount(connect, options.base)
                    ];
                }
            }
        },
        admin : {
            options : {
                port : 9002,
                hostname : 'localhost',
                base : './admin/',
                middleware : function (connect, options) {
                    return [folderMount(connect, options.base)];
                },
                open : true
            }
        },
        tests : {
            options : {
                port : 9001,
                hostname : 'localhost',
                base : './build/',
                middleware : function (connect, options) {
                    return [lrSnippet, folderMount(connect, options.base)];
                },
                open: {
                    target: 'http://localhost:9001/tests/'
                }
            }
        }
    });
};