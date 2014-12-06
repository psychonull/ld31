'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! \n* <%= pkg.title || pkg.name %> - v<%= pkg.version %>' +
            '\n* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> ' +
            '\n* <%= pkg.homepage ? pkg.homepage : "" %> ' +
            '\n*/ \n\n',

    paths: {
      src: "src/",
      dist: "dist/"
    },

    clean: {
      before: {
        src: [
          "<%= paths.dist %>*",
          "!<%= paths.dist %>.gitignore"
        ],
      }
    },

    watch: {
      browserified: {
        files: [
          '<%= paths.dist %><%= pkg.name %>.js'
        ],
        tasks: ['jshint']
      },
      assets: {
        files: [
          'assets/**'
        ],
        tasks: ['copy']
      }
    },

    browserify: {
      all: {
        options:{
          extension: [ '.js' ],
          debug: true,
          browserifyOptions: { debug: true }
        },
        src: ['<%= paths.src %>index.js'],
        dest: '<%= paths.dist %><%= pkg.name %>.js'
      },
      watchify: {
        files: {
          '<%= paths.dist %><%= pkg.name %>.js': ['<%= paths.src %>index.js']
        },
        options: {
          debug: true,
          watch: true,
          browserifyOptions: { debug: true }
        }
      }
    },

    concat: {
      all: {
        options: {
          stripBanners: {
            line: true
          },
          banner: '<%= banner %>'
        },
        files: {
          '<%= paths.dist %><%= pkg.name %>.js': [ '<%= paths.dist %><%= pkg.name %>.js' ]
        }
      }
    },

    uglify: {
      all: {
        options: {
          stripBanners: {
            line: true
          },
          banner: '<%= banner %>',
        },
        files: {
          '<%= paths.dist %><%= pkg.name %>.min.js': [ '<%= paths.dist %><%= pkg.name %>.js' ]
        }
      }
    },

    jshint: {
      all: {
        files: {
          src: ["<%= paths.src %>**/*.js"]
        },
        options: {
          jshintrc: '.jshintrc'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8001,
          base: './dist',
          keepalive: false
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, src: ['index.html'], dest: 'dist/'},
          {expand: true, src: ['assets/**'], dest: 'dist/'},
          //include package.json for nodewebkit
          {expand: true, src: ['package.json'], dest: 'dist/'}
        ],
      },
    },

    nodewebkit: {
      options: {
          platforms: ['win','linux64'],
          buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved
      },
      src: ['./dist/**/*'] // Your node-webkit app
    },

  });


  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask("build", [
    "clean:before",
    "jshint",
    "browserify:all",
    "concat",
    "copy"
  ]);

  grunt.registerTask("test", [
    "build",
    "connect"
  ]);

  grunt.registerTask("default", "w");
  grunt.registerTask("w", ["test", "browserify:watchify", "watch"]);
  grunt.registerTask("dist", ["build", "uglify"]);

};
