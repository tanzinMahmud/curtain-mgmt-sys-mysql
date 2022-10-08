app.controller("quotationController", function ($scope, $http, $timeout) {
  $(document).ready(function () {
    $(".policy").click(function () {
      $("#detail_modal_policy").modal("show");
      console.log("TEST");
      //   this.detail_modal_policy = false;
    });
  });

  $(document).ready(function () {
    $(".second").click(function () {
      $("#modal-second").modal("show");
      // $("#detail_modal_policy").modal("hide");
      console.log("TEST 2");
    });
  });
  // $(document).ready(function () {
  //   $(".third").click(function () {
  //     $("#modal-third").modal("show");
  //     // $("#modal-second").modal("hide");
  //     // $("#detail_modal_policy").modal("hide");
  //     console.log("TEST 3");
  //   });
  // });
  $scope.closeModal = function () {
    this.detail_modal_policy = false;
    // this.modal-second=false;
  };

  $scope.search = function () {
    if ($scope.sellsmanData.length >= 10) {
      $scope.sellsmanData = [
        {
          id: 1,
          name: "Kanta",
          total_sell_ammount: 1800,
          sell_estimation: 100,
        },
        {
          id: 2,
          name: "Nazim",
          total_sell_ammount: 1200,
          sell_estimation: 200,
        },
      ];
    }
    $scope.sellsmanData.push(
      {
        id: 1,
        name: "Kanta",
        total_sell_ammount: 1800,
        sell_estimation: 100,
      },
      {
        id: 2,
        name: "Nazim",
        total_sell_ammount: 1200,
        sell_estimation: 200,
      }
    );
  };

  $scope.sellsmanData = [
    {
      id: 1,
      name: "Kanta",
      total_sell_ammount: 1800,
      sell_estimation: 100,
    },
    {
      id: 2,
      name: "Nazim",
      total_sell_ammount: 1200,
      sell_estimation: 200,
    },
    {
      id: 3,
      name: "Sami",
      total_sell_ammount: 12567,
      sell_estimation: 134,
    },
    {
      id: 4,
      name: "Tanzin",
      total_sell_ammount: 1256,
      sell_estimation: 788,
    },
    {
      id: 5,
      name: "Ahsan",
      total_sell_ammount: 3468,
      sell_estimation: 432,
    },
  ];
  $scope.customerData = [
    {
      id: 1,
      customerName: "Mr Tanzin",
      location: "Dhaka",
      phoneNumber: 100,
      email: "abc@gmail.com",
      totalQuentity: 2,
      totalPrice: 1000,
    },
    {
      id: 2,
      customerName: "Mr Rahman",
      location: "Dhaka",
      phoneNumber: 12356,
      email: "rahman@gmail.com",
      totalQuentity: 2,
      totalPrice: 7800,
    },
    {
      id: 3,
      customerName: "Mr Sami",
      location: "Dhaka",
      phoneNumber: 345,
      email: "samo@gmail.com",
      totalQuentity: 67,
      totalPrice: 9986,
    },
    {
      id: 4,
      customerName: "Mr Nazim",
      location: "Dhaka",
      phoneNumber: 100,
      email: "nazim@gmail.com",
      totalQuentity: 8,
      totalPrice: 3456,
    },
    {
      id: 5,
      customerName: "Mr Ahsan",
      location: "Dhaka",
      phoneNumber: 37800,
      email: "nazim@gmail.com",
      totalQuentity: 67,
      totalPrice: 2356,
    },
  ];
  $scope.salesData = [
    {
      id: 1,
      totalPrice: 5000000,
      totalQuentity: 2,
    },
    {
      id: 2,
      totalPrice: 123555,
      totalQuentity: 92,
    },
    {
      id: 3,
      totalPrice: 765433,
      totalQuentity: 27,
    },
    {
      id: 4,
      totalPrice: 89000,
      totalQuentity: 56,
    },
    {
      id: 5,
      totalPrice: 56788,
      totalQuentity: 10,
    },
    {
      id: 6,
      totalPrice: 56788,
      totalQuentity: 10,
    },
  ];

  // last Modal
  $scope.tblObj = {
    location: "Dhaka",
    patternName: "abc",
    colorCode: "#222",
    castleSmart: "Abc",
    squareBlack: "a",
    squareWhite: "b",
    measurementWidth: "1234",
    measurementHeight: "1234",
    control: "566",
    chainLength: "156",
    tight: "abc",
    finish: "abc",
  };

  $scope.calculationData = {
    dealerName: "Mr X",
    customerName: "Mr Y",
    tell: "91000",
    email: "abc@gmail.com",
    install: "12",
    ship: "1",
    pickUp: "22",
    shippingAddress: "Dhaka",
    date: "",
    targetDate: "",
    measuredBy: "6",
    tableData: [],
    specialInstruction: "Please fill the form properly ",
    price: 1800,
    hst: 0,
    total: 1800,
    depositPaid: 100,
    orderBalance: 1700,
  };
  $scope.addNewData = function () {
    let tempData = JSON.parse(JSON.stringify($scope.calculationData));
    tempData.tableData.push($scope.tblObj);
    $scope.calculationData = JSON.parse(JSON.stringify(tempData));
  };

  $scope.addNewData();
  $scope.addNewData();
  $scope.addNewData();

  $scope.sendQuotation = function () {
    console.log($scope.calculationData);
    generatePDF();
  };

  function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("tbl-data");
    let opt = {
      filename: "Quotation.pdf",
    };
    // Choose the element and save the PDF for our user.
    html2pdf().from(element).set(opt).save();
  }
});
