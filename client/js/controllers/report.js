app.controller("report", function ($scope, $http, $timeout) {
  const data = {
    labels: ["Total Ammount", "Total Selling Quantity"],

    datasets: [
      {
        label: "My First Dataset",
        data: [500, 100],
        backgroundColor: ["rgb(153, 51, 255)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };
  const data2 = {
    labels: ["Total Ammount", "Total Selling Quantity"],

    datasets: [
      {
        label: "My First Dataset",
        data: [200, 300],
        backgroundColor: ["rgb(153, 51, 255)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };
  const data3 = {
    labels: ["Total Ammount", "Total Selling Quantity"],

    datasets: [
      {
        label: "My First Dataset",
        data: [800, 900],
        backgroundColor: ["rgb(153, 51, 255)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };
  const config2 = {
    type: "doughnut",
    data: data2,
  };
  const config3 = {
    type: "doughnut",
    data: data3,
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
  const myChart2 = new Chart(document.getElementById("myChart2"), config2);
  const myChart3 = new Chart(document.getElementById("myChart3"), config3);
});
