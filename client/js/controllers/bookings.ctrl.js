app.controller(
  "transportBookingController",
  function ($scope, $http, $timeout) {
    $scope.tblObj={
      location:"",
      patternName:"",
      colorCode:"",
      castleSmart:"",
      squareBlack:"",
      squareWhite:"",
      measurementWidth:"",
      measurementHeight:"",
      control:"",
      chainLength:"",
      tight:"",
      finish:""
    }

    $scope.calculationData={
      dealerName:"",
      customerName:"",
      tell:"",
      email:"",
      install:"",
      ship:"",
      pickUp:"",
      shippingAddress:"",
      date:"",
      targetDate:"",
      measuredBy:"",
      tableData:[],
      specialInstruction:"",
      price: 1800,
      hst: 0,
      total: 1800,
      depositPaid: 100,
      orderBalance: 1700
    }

    $scope.addNewData=function(){
      let tempData=JSON.parse(JSON.stringify($scope.calculationData))
      tempData.tableData.push($scope.tblObj)
      $scope.calculationData=JSON.parse(JSON.stringify(tempData))
    }

    $scope.addNewData()
    
    $scope.sendQuotation=function(){
      console.log($scope.calculationData)
      generatePDF()
    }

    function generatePDF() {
      // Choose the element that our invoice is rendered in.
      const element = document.getElementById('tbl-data');
      let opt = {
        filename:     'Quotation.pdf'
      };
      // Choose the element and save the PDF for our user.
      html2pdf().from(element).set(opt).save();
    }
  }
);
