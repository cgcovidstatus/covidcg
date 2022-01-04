Chart.defaults.global.defaultFontFamily = "Poppins";
let ctx = document.querySelector("#revenueChart");
ctx.height = 53;

let revChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
	"dec 25",
      "dec 26",
      "dec 27",
      "dec 28",
      "dec 29",
      "dec 30",
      "dec 31",
      "jan 01",
      "jan 02",
"jan 03"
     
    ],
    datasets: [
      {
        label: "positive",
        borderColor: "red",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [37, 46, 39 , 69, 106, 150, 190, 279, 290, 698]
      },
      {
        label: "recovered",
        borderColor: "green",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [ 20, 29, 33, 19, 36, 16, 18, 30, 34, 29]
      },
	   {
        label: "death",
        borderColor: "black",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [ 0, 0, 1, 2, 0, 0, 0, 1, 0, 0]
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