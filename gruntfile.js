module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    cwd: 'app/styles',
                    src: '**/*.scss',
                    dest: 'dist/styles/temp',
                    expand: true,
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: ['last 1 version'],
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/styles/temp',
                    src: '{,*/}*.css',
                    dest: 'dist/styles/grunt'
                }]
            }
        },
        jshint: {
            files: ['app/js/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        concat: {
            dist: {
                // the files to concatenate
                src: ['app/js/**/*.js'],
                // the location of the resulting JS file
                dest: 'dist/js/grunt/calculator.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/js/grunt/calculator.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'autoprefixer', 'jshint', 'concat', 'uglify']);
};