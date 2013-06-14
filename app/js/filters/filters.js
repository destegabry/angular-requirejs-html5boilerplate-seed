define([
  // Standard Libs
  'Console'       // lib/console/console
  , 'Underscore'  // lib/underscore/underscore
  // Application Filters
  , 'filters/StartFromFilter'
], function (Console, _, startFrom){
  "use strict";
  Console.group("Entering Filters module.");

  var filters = {
    startFrom: startFrom
  };
  Console.info("Registered filters: ", filters);

  var initialize = function (angModule) {
    Console.group("Entering Filters initialize.");
     Console.debug("Filters :",filters);
    _.each(filters,function(filter,name){
      angModule.filter(name,filter);
    })
    Console.debug("Custom filters initialized.");
    Console.groupEnd();
  }

  Console.groupEnd();
  return {
    initialize: initialize
  };
});
