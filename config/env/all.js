'use strict';

module.exports = {
	app: {
		title: 'jobs-aggregator',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				//'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/font-awesome/css/font-awesome.css',
				'public/lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/Chart.js/Chart.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	},
	apis: {
		importIo: {
			userId: 'f5314fd8-339b-4c2e-9bd5-a903ba866bcd',
			apiKey: 'f5314fd8-339b-4c2e-9bd5-a903ba866bcd:jtPcuILZD9uJ4HMBWcAKX/6cBXUR3HXIo/z/KHMNBzbLUkxr2xAgmsXvVU6koy68eTvEEO18pKiWRII+Wd8a2w=='
		}
	},
	scrapper: {
		importInterval: 3600000
	}
};
