module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'curl-dir': {
			'src': [
				'http://code.jquery.com/jquery-1.8.3.min.js',
				'https://raw.github.com/twbs/bootstrap/master/js/modal.js',
				'http://cloud.github.com/downloads/wycats/handlebars.js/handlebars-1.0.rc.1.js',
				'https://raw.github.com/coreyti/showdown/master/src/showdown.js',
				'http://documentcloud.github.com/underscore/underscore.js',
				'http://documentcloud.github.com/backbone/backbone.js',
				'http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js',
				'http://cdnjs.cloudflare.com/ajax/libs/dropbox.js/0.9.1/dropbox.min.js'
			]
		},

		uglify: {
			my_target: {
				files: {
					'muonredux.js': ['src/jquery-1.8.3.min.js', 'src/modal.js', 'src/handlebars-1.0.rc.1.js', 'src/showdown.js', 'src/underscore.js', 'src/backbone.js', 'src/ace.js', 'src/dropbox.min.js' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-curl');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['curl-dir', 'uglify']);

};