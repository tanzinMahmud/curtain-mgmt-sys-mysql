app.controller("authController", function ($scope, $http) {
  // variables
  $scope.loginLoading = 0;
  // variables end

  $scope.login = function () {
    $scope.loginLoading = 1;
    $http({
      url: "/api/users/login",
      method: "POST",
      data: {
        email: $scope.signinEmail,
        password: $scope.signinPassword,
      },
    }).then(
      function (response) {
        console.log(response.data)
        if (response.data.token) {
            localStorage.setItem("userData", JSON.stringify(response.data));
            if(response.data.isAdmin){
              window.location.replace("/admin-panel.html#!/super-admin");
            }
            else{
              window.location.replace("/admin-panel.html");
            }
            $scope.loginLoading = 0;
        } else {
          window.location.replace("/?message=Invalid username or password");
          $scope.loginLoading = 0;
        }
      },
      function (response) {
        window.location.replace("/?message=Invalid username or password");
        $scope.loginLoading = 0;
      }
    );
  };
});
