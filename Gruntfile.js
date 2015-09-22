module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "src/css/main.css": "src/less/*.less" // destination file and source file
        }
      }
    },
    
    uglify: {
      build:{
			  src:'src/js/*.js',
			  dest:'dist/js/main.min.js'
			}
    },
    
    cssmin: {
      target: {
        files: {
          'dist/css/main.min.css': ['src/css/*.css']
        }
      }
    },
    
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch', 'uglify']);
};