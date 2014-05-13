/*globals module:true */
module.exports = function (grunt) {
    'use strict';
    var path = require('path'),
        proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest,
        folderMount = function folderMount (connect, point) {
            return connect.static(path.resolve(point[0]));
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
                    var middlewares;
                    middlewares = [require('connect-livereload')()];
                    middlewares.push(modRewrite([
                        '!/assets|\\.html|\\.js|\\.css|\\woff|\\ttf|\\swf$ /index.html'
                    ]));
                    options.base.forEach(function(base) {
                        return middlewares.push(connect["static"](base));
                    });
                    middlewares.push(proxySnippet);
                    return middlewares;
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