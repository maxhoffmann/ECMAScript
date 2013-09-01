module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: '<json:package.json>',

    watch: {
      default: {
        files: ['src/**/*.json'],
        tasks: ['concat']
      }
    },

    concat: {
      default: {
        src: [
          'src/ECMAScript.json',
          'src/**/*.json',
          'src/uuid.json'
        ],
        dest: 'ECMAScript.JSON-tmLanguage'
      }
    }

  });

  // Load required tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default
  grunt.registerTask('default', ['watch']);
};
