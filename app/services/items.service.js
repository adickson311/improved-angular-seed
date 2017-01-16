(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('itemsservice', itemsservice);

        itemsservice.$inject = [];

        function itemsservice() {
            var options = {
                timeout: 200
            };

            function getItems() {
                console.log('getItems');
            };

            return {
                getItems: getItems,
                options: options
            };
        }
})();
