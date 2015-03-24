module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['src/**/*'],
            tasks: ['concat'],
        },
        concat: {
            // basic: {
            //     src: ['src/main.js'],
            //     dest: 'dist/basic.js',
            // },
            extras: {
                src: ['<%= pkg.jsDir %>nny.js', '<%= pkg.jsDir %>**/*.js'],
                dest: 'build/nny.js',
            },
        }
    });

    // grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Development server
    grunt.registerTask('default', ['watch' ]);
};
