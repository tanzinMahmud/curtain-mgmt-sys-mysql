app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../templates/bookings.html",
    })
    .when("/user", {
      templateUrl: "../templates/user.html",
    })
    .when("/approval", {
      templateUrl: "../templates/approval.html",
    })
    .when("/quotation", {
      templateUrl: "../templates/quotation.html",
    })
    .when("/super-admin", {
      templateUrl: "../templates/super-admin.html",
    })
    .when("/report", {
      templateUrl: "../templates/report.html",
    })
    .when("/calculation", {
      templateUrl: "../templates/bookings.html",
    })
    .when("/profile", {
      templateUrl: "../templates/profile.html",
    });
});
