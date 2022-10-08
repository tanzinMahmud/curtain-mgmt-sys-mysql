var app = angular.module("navExtranetApp", ["ngRoute"]);

app.controller("rootController", function ($scope, $http) {
  $scope.session = JSON.parse(localStorage.getItem("userData"));
  console.log($scope.session);

  var routeExt = "";
  var location = window.location.href;
  try {
    location = location.substring(location.indexOf("/") + 1);
    location = location.substring(location.indexOf("/") + 1);
    location = location.substring(location.indexOf("/") + 1);
    location = location.substring(location.indexOf("/") + 1);
    routeExt = location;
  } catch (e) {}

  if (routeExt == "") {
    $scope.selectedNav = "quotation";
  } else {
    $scope.selectedNav = routeExt;
  }

  if ($scope.session.isAdmin) {
    $scope.selectedNav = "super-admin";
  } else {
    $scope.selectedNav = "quotation";
  }

  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $scope.logout = function () {
    window.location.replace("/");
    // $http.get("/logout").then(function (response) {
    //   $scope.logOutRes = response.data;
    //   if (
    //     $scope.logOutRes.result == "log out successfully" ||
    //     $scope.logOutRes.result == "not logged in"
    //   ) {
    //     window.location.replace("/");
    //   }
    // });
  };
});
