module.exports = function(grunt) {

   // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
	    dynamic: {
		files: [{
		    expand: true,
		    cwd: 'images/',
		    src: ['**/*.{png,jpg,gif}'],
		    dest: 'images/build/'
		}]
	    }
	},
		concat: {   
		    dist: {
		        src: [
		            'js/classie.js',
					'js/cbpAnimatedHeader.min.js',
					'js/wow.min.js',
					'js/jquery.easing.1.3.js',
					'js/app.js' 
		        ],
		        dest: 'js/build/production.js',
		    }
	},
		uglify: {
	    build: {
	        src: 'js/build/production.js',
	        dest: 'js/build/production.min.js'
	    }
	}


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin','concat','uglify']);

};
