const  dropdounBtn = document.querySelectorAll(".dropdoun-btn"),
dropList = document.querySelectorAll(".drop-list");

dropdounBtn.forEach((item) => {
  item.classList.remove("show");
  item.addEventListener('click', ()=> {
    item.classList.toggle('show')
  })
})

// burger-btn start

const burger_btn = document.querySelector(".burger-btn");
const sidebar = document.querySelector(".sidebar");
const home = document.querySelector(".home");
burger_btn.addEventListener("click", ()=>{
  sidebar.style.cssText = "position: absolute; left: -100%; width: 0; height: 0;"
})


const chartLine = document.querySelector("#myChart").getContext("2d");

    let delayed;

    const labels = [
      "Iyul",
      "Avgust",
      "Sentabr",
    ];

    let datasOne = [900, 700, 800];
    let datasTwo = [600, 400, 600];

    const data1 = {
      labels,
      datasets: [
        {
          data: datasOne,
          label: "Kirim mablag' ( mln )",
          fill: true,
          tension: 0.1,     
          backgroundColor: "rgba(255, 255, 255, .1)",
          borderColor: "rgba(75, 192, 194, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          lineBorderWidth: 2,
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75, 192, 194, 1)",
          pointBackgroundColor: "#ffffff",
          pointBorderWidth: 3,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "rgba(75, 192, 194, 1)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 10,
        },
        {
          data: datasTwo,
          label: "Chiqim mablag' ( mln )",
          fill: true,
          lineTension: 0.2,          
          backgroundColor: "rgba(255, 255, 255, .1)",
          borderColor: "rgba(251, 138, 0, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          lineBorderWidth: 1.5,
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75, 192, 194, 1)",
          pointBackgroundColor: "#ffffff",
          pointBorderWidth: 3,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "rgba(75, 192, 194, 1)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 10,
        }
      ],
    };
    const config = {
      type: "line",
      data: data1,
      options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        animation: {
          onComplete: () => {
            delayed: true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default" && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return value + " ";
              },
            },
          },
        },
      },
    };
    const myChart = new Chart(chartLine, config);

    const chartLine2 = document.querySelector("#myChartTwo");

    let delayed2;
    let labelsTwo = [
      "Iyul",
      "Avgust",
      "Sentabr",
    ];
    let dataTwoChart = [300, 250, 350];

    var myChart2 = new Chart(chartLine2, {
      type: "line",
      data: {
        labels: labelsTwo,
        datasets: [
          {
            label: "Daromad ( mln )",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(255, 255, 255, .1)",
            borderColor: "rgba(75, 192, 194, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            lineBorderWidth: 1.5,
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75, 192, 194, 1)",
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 3,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "rgba(75, 192, 194, 1)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataTwoChart,
          },
        ],
        options: {
          radius: 5,
          hitRadius: 30,
          hoverRadius: 12,
          responsive: true,
          animation: {
            onComplete: () => {
              delayed2: true;
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed2
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          scales: {
            y: {
              ticks: {
                callback: function (value) {
                  return value + " ";
                },
              },
            },
          },
        },
      },
    });


    const data = {
      labels: ['Iyul 2022', 'Avgust 2022', 'Sentabr 2022',],
      datasets: [{
        label: `O'quvchi shartnoma`,
        data: [740, 560, 800 ],
        backgroundColor: 'rgba(255, 26, 104, 0.2)',
        borderColor: 'rgba(255, 26, 104, 1)',
        borderWidth: 1
      },
      {
        label: 'Ijaraga berish',
        data: [80, 55, 65],
        backgroundColor:'rgba(86, 207, 86, 0.2)',
        borderColor: 'rgba(86, 207, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'Boshqa',
        data: [20, 50, 30],
        backgroundColor: 'rgba(86, 108, 207, 0.2)',
        borderColor: 'rgba(86, 108, 207, 1)',
        borderWidth: 1
      }]
    };

    // config 
    const configDiag = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // render init block
    const myChartDiag = new Chart(
      document.getElementById('myChartDiag'),
      configDiag
    );

    const dataTwo2 = {
      labels: ['Iyul 2022', 'Avgust 2022', 'Sentabr 2022',],
      datasets: [{
        label: `Ish haqi`,
        data: [100, 84, 65, 12, 34 ],
        backgroundColor: 'rgba(229, 244, 26, 0.7)',
        borderColor: 'rgba(255, 26, 104, 1)',
        borderWidth: 1
      },
      {
        label: 'Oziq-ovqat',
        data: [80, 55, 65, 12, 34 ],
        backgroundColor:'rgba(37, 26, 244, 0.7)',
        borderColor: 'rgba(86, 207, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'Avtobus',
        data: [20, 50, 30, 12, 34 ],
        backgroundColor: 'rgba(26, 244, 233, 0.7)',
        borderColor: 'rgba(86, 108, 207, 1)',
        borderWidth: 1
      },
      {
        label: 'Jihozlar',
        data: [80, 55, 65, 12, 34 ],
        backgroundColor:'rgba(211, 26, 244, 0.7)',
        borderColor: 'rgba(86, 207, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'Boshqa',
        data: [20, 50, 30, 12, 34 ],
        backgroundColor: 'rgba(86, 108, 207, 0.2)',
        borderColor: 'rgba(86, 108, 207, 1)',
        borderWidth: 1
      }]
    };

    // config 
    const configDiagTwo = {
      type: 'bar',
      data: dataTwo2,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // render init block
    const myChartDiagTwo = new Chart(
      document.getElementById('myChartDiagTwo'),
      configDiagTwo
    );