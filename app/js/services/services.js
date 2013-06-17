define([
  // Standard Libs
  'Console'       // lib/console/console
  , 'Underscore'  // lib/underscore/underscore

  // Custom Services
  , 'services/DataService'
  , 'services/ErrorService'
  , 'services/ErrorHttpInterceptorService'
  , 'services/LocalStorageModule'
], function(Console, _, ds, errorService, errorHttpInterceptorService, localStorageService) {
  "use strict";
  Console.group("Entering Service module.");

  var services = {
    DataService: ds
    , ErrorService: errorService
    , ErrorHttpInterceptorService: errorHttpInterceptorService
    , LocalStorageService: localStorageService
  };
  Console.info("Registered services: ", services);

  var initialize = function (angModule) {
    _.each(services,function(service,name){
      angModule.factory(name,service);
    });

    Console.debug("Custom services initialized.");
  }

  Console.groupEnd();
  return {
    initialize: initialize
  };
});
