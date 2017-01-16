(function() {
    'use strict';

    angular.module('app.item-two')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider.state('item-two', {
            url: '/item-two',
            views: {
                "main": {
                    controller: 'ItemTwoController as vm',
                    templateUrl: 'item-two/item-two.html'
                }
            }
        });
    }
})();
