(function() {
    'use strict';

    angular.module('app.item-one')
        .controller('ItemOneController', ItemOneController);

    ItemOneController.$inject = ['itemsservice'];

    function ItemOneController(itemsservice) {
        var vm = this;

        vm.title = 'Item One Title';
        console.log('ItemOneController');

        itemsservice.getItems();
    };
})();
