/*global module:false, require:false*/
module.exports = function (grunt) {

    "use strict";

    var _ = grunt.util._;

    grunt.registerTask('setPaths', function () {
        var category,
            subcategory,
            paths = grunt.file.read('app/paths.json'),
            processedPaths = JSON.parse(grunt.template.process(paths, {
                data:
                {
                    platform: grunt.config.get('platform')
                }
            })),
            pathArray = [],
            template = grunt.file.read('app/main.js'),
            pathsToReturn = {},
            finished;

        // De-nest the Paths.JSON
        extractStrings(processedPaths, pathsToReturn);

        // Interpolate paths into Main.js
        finished = grunt.template.process(template, {
            data:
            {
                paths: '\n, paths: ' + JSON.stringify(pathsToReturn, null, "    ")
            }
        });

        grunt.file.write('build/main.js', finished);
    });

    function extractStrings(pathsTree, pathsToReturn) {
        _.each(_.keys(pathsTree), function(key) {
            var value = pathsTree[key];
            if (_.isString(value)) {
                if (! pathsToReturn[key]) {
                    pathsToReturn[key] = value;
                } else {
                    grunt.fail.warn('Duplicate paths entry for: "' + key + '"');
                }
            } else {
                grunt.log.writeln("fetching paths for: " + key);
                extractStrings(value, pathsToReturn);
            }
        });
    }




};