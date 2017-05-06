(function () {
    angular.module('app')
        .controller('MyController', MyController);

        MyController.$inject = ['$scope', '$uibModal', '$log'];

        function MyController($scope, $uibModal, $log) {
            var vm = this;

            vm.title = 'My test';

            // Instantiate the modal window
            var modalPopup = function () {
              return $scope.modalInstance = $uibModal.open({
                templateUrl: 'modal.html',
                scope: $scope
              });
            };

            // Modal window popup trigger
            vm.openModalPopup = function () {
              modalPopup().result
                .then(function (data) {
                  $scope.handleSuccess(data);
                })
                .then(null, function (reason) {
                  $scope.handleDismiss(reason);
                });
            };

            // Close the modal if Yes button click
            $scope.yes = function () {
              $scope.modalInstance.close('Yes Button Clicked')
            };

            // Dismiss the modal if No button click
            $scope.no = function () {
              $scope.modalInstance.dismiss('No Button Clicked')
            };

            // Log Success message
            $scope.handleSuccess = function (data) {
              $log.info('Modal closed: ' + data);
            };

            // Log Dismiss message
            $scope.handleDismiss = function (reason) {
              $log.info('Modal dismissed: ' + reason);
            }
        }
})();
