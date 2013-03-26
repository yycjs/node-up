'use strict';

var exec = require('child_process').exec;

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },

    /* Testing
    =======================================================*/
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        forin: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        regexp: true,
        undef: true,
        trailing: true,
        boss: true,
        browser: true,
        jquery: true,
        node: true
      },
      globals: {},
      grunt: {
        options: this.options,
        globals: {
          'task': true,
          'config': true,
          'file': true,
          'log': true,
          'template': true
        }
      },
      src: {
        options: this.options,
        globals: {
          '$': true,
          '_': true
        }
      },
      test: {
        options: this.options,
        globals: {
          '$': true,
          '_': true,
          'module': true,
          'chai': true,
          'mocha': true
        }
      }
    },

    /* Concatentation 
    =======================================================*/
    concat: {
      js: {
        src: [
          "<banner:meta.banner>"
          // TODO: Fill this in :-)
        ],
        dest: "tmp/js/gam-<%= pkg.version %>.js"
      },
      // We don't need to do this, as the LESS compiler will put all of our files together.
      css: {
        src: [
          "<banner:meta.banner>"
          // TODO: Fill this in :-)
        ],
        dest: "tmp/css/gam-<%= pkg.version %>.css"
      }
    },

    /* Minification 
    =======================================================*/
    uglify: {
      options: {
        squeeze: {'make_seqs': false}
      },
      js: {
        files: {
          'tmp/js/gam-<%= pkg.version %>.min.js': ['tmp/js/gam-<%= pkg.version %>.js']
        }
      }
    },
    mincss: {
      compress: {
        files: {
          "tmp/css/gam-<%= pkg.version %>.min.css": ["tmp/css/gam-<%= pkg.version %>.css"]
        }
      }
    },

    /* Curating/File Management
    =======================================================*/
    // TODO: Add clean directive here :-)
    copy: {
      dev: {
        files: [
          {expand: true, cwd: 'tmp/', src: ['**'], dest: 'deploy/'}
        ]
      },
      stage: {
        files: [
          {expand: true, cwd: 'public/', src: ['**'], dest: 'tmp/'}
        ]
      },
      release: {
        files: [
          {expand: true, cwd: 'tmp/', src: ['font/**', 'img/**', '*.ico', 'index.html', 'css/gam-<%= pkg.version %>.min.css', 'js/gam-<%= pkg.version %>.min.js'], dest: 'deploy/'}
        ]
      }
    },
    replace: {
      'dev': {
        options: {
          variables: {
            // TODO: Fill this in :-)
          },
          prefix: '@@'
        },
        files: {
          'tmp/index.html': ['tmp/index.html']
        }
      },
      'release': {
        options: {
          variables: {
            // TODO: Fill this in :-)
          },
          prefix: '@@'
        },
        files: {
          'tmp/index.html': ['tmp/index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  // TODO: require the contrib-clean task here :-)
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-replace');


  // Alias'
  // --------------------------------------------------
  grunt.registerTask('gam', ['development']);

  // Default Task.
  grunt.registerTask("default", ['development']);

  // Development Tasks
  // --------------------------------------------------
  grunt.registerTask('development', []); // TODO: Define the directives here :-)

  // Release Tasks
  // --------------------------------------------------
  grunt.registerTask('release', ['clean:all', 'copy:stage', 'concat', 'uglify', 'mincss', 'replace:release','copy:release', 'clean:release', 'test']);
};
