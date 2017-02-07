// Define the `liveData config`
angular.module('livedataApp')
		.config(['$locationProvider', '$routeProvider', 
			function config($locationProvider, $routeProvider){
				$locationProvider.hashPrefix('!');

				$routeProvider.
					when('/', {
						templateUrl:'home.html'
					}).
					when('/aboutus', {
						templateUrl:'aboutus.html'
					}).
					when('/products', {
						template: '<show-data-list></show-data-list>'
					}).
					when('/products/:postId', {
						template: '<show-detail-list></show-detail-list>'
					}).
					otherwise('/');
			}])