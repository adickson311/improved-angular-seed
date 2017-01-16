(function() {
    'use strict';

    angular.module('app.item-one')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider.state('item-one', {
            url: '/item-one',
            views: {
                "main": {
                    controller: 'ItemOneController as vm',
                    templateUrl: 'item-one/item-one.html'
                }
            }
        });
    }
})();
