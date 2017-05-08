(function() {
    'use strict';

    angular
        .module('app')
        .config(configure)
        .run(runBlock);

    configure.$inject = ['$stateProvider', '$locationProvider'];

    function configure($stateProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
    }

    runBlock.$inject = ['itemsservice'];

    function runBlock(itemsservice) {
        itemsservice.options.timeout = 4000;
    }
})();
