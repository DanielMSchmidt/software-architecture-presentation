// Generated on 2013-07-01 using generator-angular 0.3.0
'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: '.',
          dest: 'dist',
          src: [
            'index.html'
          ]
        }]
      }
    },
    latex: {
        options: {
          haltOnError: 'true',
          outputDirectory: 'dist/pdf'
        },
        dist: {
          src: ['presentation.tex']
        },
    },
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }

  });

  grunt.registerTask('default', [
    'latex:dist',
    'copy',
    'gh-pages'
  ]);
};
