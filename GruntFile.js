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
    },
    useminPrepare: {
        html: 'src/main/webapp/index.jsp',
        options: {
            dest: 'target/simple-webapp'
        }
    },    
    usemin: {
        html: 'target/simple-webapp/index.jsp'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['jshint', 'karma']);
  grunt.registerTask('build', [
                               'jshint', 
                               'karma', 
                               'useminPrepare',
                               'usemin', 
                               'concat', 
                               'uglify'
                               ]);

};