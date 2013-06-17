define(['Console'], function (Console) {
  "use strict";
  Console.group("Entering ErrorService module.");

  var service = [function () {

    return {
		errorMessage: null,
		errorCode: null,
		setError: 	function(msg, code) {
						this.errorMessage = msg;
						this.errorCode = code;
					},
		clear: 		function() {
						this.errorMessage = null;
						this.errorCode = null;
					}
		};
  	}];

  Console.groupEnd();
  return service;
});
