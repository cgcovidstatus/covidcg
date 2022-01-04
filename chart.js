Chart.defaults.global.defaultFontFamily = "Poppins";
let ctx = document.querySelector("#revenueChart");
ctx.height = 53;

let revChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
	"dec 24",
      "dec 25",
      "dec 26",
      "dec 27",
      "dec 28",
      "dec 29",
      "dec 30",
      "dec 31",
      "jan 01",
      "jan 02"
     
    ],
    datasets: [
      {
        label: "positive",
        borderColor: "red",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [23, 37, 46, 39 , 69, 106, 150, 190, 279, 290]
      },
      {
        label: "recovered",
        borderColor: "green",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [28, 20, 29, 33, 19, 36, 16, 18, 30, 34]
      },
	   {
        label: "death",
        borderColor: "black",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [1, 0, 0, 1, 2, 0, 0, 0, 1, 0]
      } ,
	  {
        label: "active",
        borderColor: "orange",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [296, 313,330, 345, 393, 463, 593, 769, 1017, 1273]
      }
    ]
  },
  options: {
    responsive: true,
    tooltips: {
      intersect: false,
      node: "index"
    }
  }
});