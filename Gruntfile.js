module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jshint: {
			all: [
				'js/*.js'
			]
		}
	})

	grunt.registerTask('default', [
		'jshint'
		]);
};