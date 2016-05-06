var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {

      },
      dist: {
        //files: [
          //{
            expand: true,
            cwd: 'src',
            src: ['**/*.js', '!**/__tests__/**'],
            dest: './'
          //}
        //]
      }
    },

    watch: {
      js: {
        options: {
          atBegin: true
        },
        files: ['src/**/*.js', '!**/__tests__/**'],
        tasks: ['babel:dist']
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', []);
};