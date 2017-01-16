(function () {
    angular.module('app')
        .controller('MyController', MyController);

        MyController.$inject = ['$scope'];

        function MyController($scope) {
            var vm = this;

            vm.title = 'My Controller';

            console.log('MyController');
        }
})();
