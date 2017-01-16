(function() {
    'use strict';

    angular
        .module('shared.widgets')
        .directive('itemVersion', itemVersion);

        itemVersion.$inject = ['constVersion'];

        function itemVersion(constVersion) {
            var directive = {
                link: link,
                templateUrl: 'components/item-version.directive.html',
                restrict: 'E',
                controller: VersionController,
                controllerAs: 'vm',
                bindToController: true
            };

            return directive;

            function link(scope, element, attrs) {
                console.log('item-version link');
            }
        }

        VersionController.$inject = ['$scope', 'constVersion'];

        function VersionController($scope, constVersion) {
            var vm = this;

            vm.version = constVersion;
        }
})();
