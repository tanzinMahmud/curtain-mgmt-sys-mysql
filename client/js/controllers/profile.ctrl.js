app.controller('profileController', function ($scope, $http) {
    $scope.userData=JSON.parse(localStorage.getItem('userData'))
})