module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        uglify:{
            options:{
                banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //build: {
            //src: 'js/share.js',
            //dest: 'yes/share.min.js'
            //}
            buildall:{
                //任务三：按原文件结构压缩js文件夹内所有JS文件
                files:[ {
                    expand:true,
                    cwd:"js",
                    //js目录下
                    src:"**/*.js",
                    //所有js文件
                    dest:"js-min"
                } ]
            }
        },
        watch:{
            scripts:{
                files:[ "**/*.js" ],
                tasks:[ "uglify", "imagemin", "cssmin", "htmlmin" ],
                options:{
                    spawn:false
                }
            }
        },
		imagemin:{
           dynamic: {                         // Another target
			  files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: 'images/',                   // Src matches are relative to this path
				src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
				dest: 'images-min/'                  // Destination path prefix
			  }]
			}
        },
		htmlmin:{
		    options:{
               removeComments: true,
			   removeCommentsFromCDATA: true,
			   collapseWhitespace:true,
			   minifyJS: true,
			    minifyCSS: true
            },
           dynamic: {                         // Another target
			  files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: 'html',                   // Src matches are relative to this path
				src: ['**/*.html'],   // Actual patterns to match
				dest: 'html-min/'                  // Destination path prefix
			  }]
			}
        },
		cssmin:{
           dynamic: {                         // Another target
			  files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: 'css',                   // Src matches are relative to this path
				src: ['**/*.css'],   // Actual patterns to match
				dest: 'css-min/'                  // Destination path prefix
			  }]
			}
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    grunt.registerTask("default", [ "uglify", "imagemin", "htmlmin", "cssmin" ]);
};