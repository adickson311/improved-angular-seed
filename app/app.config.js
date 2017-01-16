(function() {
    'use strict';

    angular
        .module('app')
        .config(configure)
        .run(runBlock);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
    }

    runBlock.$inject = ['itemsservice'];

    function runBlock(itemsservice) {
        itemsservice.options.timeout = 4000;
    }
})();
