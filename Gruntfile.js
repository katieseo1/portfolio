module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			build: ['Gruntfile.js', 'src/**/*.js']
		},
		less: {
			build: {
				files: {
					'dest/css/portfolio.css': 'src/css/portfolio.less'
				}
			}
		},
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy") %> \n*/\n'
			},
			build: {
				files: {
					'dest/css/portfolio.min.css': 'dest/css/portfolio.css'
				}
			}
		},
		imagemin: {
			default: {
				options: {
					optimizationLevel: 5
				},
				files: [{
					expand: true,
					src: ['img/*.{png,jpg,gif,ico}'],
					dest: 'dest/'
				}]
			}
		},
		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy") %> \n*/\n'
			},
			build: {
				files: {
					'dest/js/portfolio.min.js': 'src/js/portfolio.js'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['uglify', 'cssmin', 'less', 'imagemin']);
};