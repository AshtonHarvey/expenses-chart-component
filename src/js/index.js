import "../scss/variables.scss";

const data = require("/data.json");

const days = data.map((object) => {
  return object["day"];
});

const amounts = data.map((object) => {
  return object["amount"];
});

const softRed = "rgba(236, 119, 95, 1)";
const cyan = "rgba(118, 181, 188, 1)";

const colors = [softRed, softRed, cyan, softRed, softRed, softRed, softRed];

new Chart("expense-component__body__chart-container__chart", {
  type: "bar",
  data: {
    labels: days,
    datasets: [
      {
        backgroundColor: colors,
        data: amounts,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          borderWidth: 0,
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          display: true,
        },
        grid: {
          display: false,
          borderWidth: 0,
        },
      },
    },
  },
});
