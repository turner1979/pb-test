module.exports = function(grunt) {

    //configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
          dist: {
              src: [
                  'js/libs/*.js',   // Library js files
                  'js/scripts.js'   // The main script file
              ],
              dest: 'js/build/production.js',
          }
        },

        uglify: {
          build: {
              src: 'js/build/production.js',
              dest: 'js/build/production.min.js'
          }
        },

        sass: {
          dist: {
              options: {
                  style: 'compressed'
              },
              files: {
                  'css/styles.css': 'scss/main.scss'
              }
          } 
        },

        watch: {
          options: {
              livereload: true,
          },
          scripts: {
              files: ['js/*.js'],
              tasks: ['concat', 'uglify'],
              options: {
                  spawn: false,
              },
          },
          css: {
            files: ['scss/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            }
          }

        }

    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks to run at the terminal
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};