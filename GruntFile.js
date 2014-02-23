module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/main/webapp/resources/javascript/**/*.js'],
      options: {
        ignores: ['src/main/webapp/resources/javascript/vendor/**'],
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('default', ['jshint', 'karma']);

};