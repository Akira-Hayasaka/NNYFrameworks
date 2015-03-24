module.exports = function (grunt) {
    // var remapify = require('remapify')

    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    // 'build/module.js': ['client/scripts/**/*.js', 'client/scripts/**/*.coffee'],
                    'build/module.js': ['src/*.js', 'src/*.coffee'],
                },
                options: {
                    // transform: ['coffeeify']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    // Development server
    grunt.registerTask('default', ['browserify' ]);
};
