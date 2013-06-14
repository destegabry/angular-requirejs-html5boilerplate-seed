define(['Console'], function (Console) {
	"use strict";
	Console.group("Entering StartFromFilter module.");

	var filter = [function() {

		return function(input, start) {
	        start = +start; //parse to int
	        return input.slice(start);
	    }
	}];

	Console.groupEnd();
	return filter;
});
