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

    /* Concatentation 
    =======================================================*/
    concat: {
      js: {
        src: [
          "<banner:meta.banner>",
          "tmp/components/jquery/jquery.js",
          "tmp/components/bootstrap/js/bootstrap-modal.js",
          "tmp/components/mustache/mustache.js",
          "tmp/js/helper.js",
          "tmp/js/login.js",
          "tmp/js/app.js"
        ],
        dest: "tmp/js/gam-<%= pkg.version %>.js"
      },
      // We don't need to do this, as the LESS compiler will put all of our files together.
      css: {
        src: [
          "<banner:meta.banner>",
          "tmp/css/bootstrap.css",
          "tmp/css/bootstrap-responsive.css",
          "tmp/css/fontello.css",
          "tmp/css/style.css"
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
    clean: {
      options: {
        force: true
      },
      all: ['deploy/**/*', 'tmp/**/*'],
      release: ['tmp/']
    },
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
            // 'styles': '<link rel="stylesheet" type="text/css" href="css/bootstrap.css">\r' +
            //        '<link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.min.css">\r' +
            //        '<link rel="stylesheet" type="text/css" href="css/fontello.css">\r' +
            //        '<link rel="stylesheet" type="text/css" href="css/style.css">',
            'styles': '<link rel="stylesheet" type="text/css" href="css/gam-<%= pkg.version %>.css">',
            'scripts': '<script src="components/jquery/jquery.js"></script>\r' +
                    '<script src="components/bootstrap/js/bootstrap-modal.js"></script>\r' +
                    '<script src="components/mustache/mustache.js"></script>\r' +
                    '<script src="js/helper.js"></script>\r' +
                    '<script src="js/login.js"></script>\r' +
                    '<script src="js/app.js"></script>\r'
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
            'styles': '<link rel="stylesheet" type="text/css" href="css/gam-<%= pkg.version %>.min.css">',
            'scripts': '<script src="js/gam-<%= pkg.version %>.min.js"></script>'
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
  grunt.loadNpmTasks('grunt-contrib-clean');
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
  grunt.registerTask('development', ['clean:all', 'copy:stage', 'concat:css', 'replace:dev', 'copy:dev']);

  // Release Tasks
  // --------------------------------------------------
  grunt.registerTask('release', ['clean:all', 'copy:stage', 'concat', 'uglify', 'mincss', 'replace:release','copy:release', 'clean:release']);
};
