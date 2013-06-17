define(['Console'], function (Console) {
	"use strict";
	Console.group("Entering ErrorHttpInterceptorService module.");

	var service = ['$q', '$location', 'ErrorService', '$rootScope', function ($q, $location, ErrorService, $rootScope) {
		return  function (promise) {
			return promise.then(
				function (response) {
					return response;
				}
				, function (response) {
					Console.error(response);
					if (response.status === 401) {
						$rootScope.$broadcast('event:loginRequired');
					} else if (response.status >= 400 && response.status < 500) {
						ErrorService.setError('Server was unable to find what you were looking for... Sorry!!', response.status);
					} else if (response.status >= 500 && response.status < 600) {
						ErrorService.setError(response.data, response.status);
					}
					return $q.reject(response);
				}
			);
		};
	}];

	Console.groupEnd();
	return service;
});
