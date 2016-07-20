System.config({
	defaultJSExtensions: true,
	packages: {
		'angular2': {
			defaultExtension: false
		},
		'@reactivex': {
			defaultExtension: false
		}
	},
	map: {
		'react': '/lib/react/dist/react.js'
	}
});

System.import('./scripts/app');
