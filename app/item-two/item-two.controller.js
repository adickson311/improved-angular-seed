(function() {
    'use strict';

    angular.module('app.item-two')
        .controller('ItemTwoController', ItemTwoController);

    ItemTwoController.$inject = [];

    function ItemTwoController() {
        var vm = this;

        vm.title = 'Item Two Title';
        console.log('ItemTwoController');

    };
})();
