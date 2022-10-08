app.controller("userController", function ($scope, $http, $timeout) {
  $(document).ready(function () {
    $(".policy").click(function () {
      $("#detail_modal_policy").modal("show");
      console.log("TEST");
      //   this.detail_modal_policy = false;
    });
  });
});
