dayToday = document.getElementById('message')
currentDay = new Date().getDate()
currentMonth = new Date().getMonth()
//Para agora calcular quantos dias passaram e quanto faltam:
const firstDate = new Date().getTime();
console.log('firstDate: '+ firstDate)
const secondDate = new Date("2020/11/16").getTime();
const oneDay = 24 * 60 * 60 * 1000
const beginning = new Date("2020/8/24")
const totalDays = Math.round(Math.abs(beginning - secondDate)/oneDay)
const remainDays = Math.round(Math.abs((firstDate - secondDate)/oneDay));

console.log('remaining: '+ remainDays);
console.log('total de dias: '+totalDays);
toFill = document.getElementById('remainingDays');
toFill.textContent = 100*(((totalDays - remainDays)/totalDays).toFixed(4))+'%'

messagePlace = document.getElementById('message')
messagePlace.textContent = "Faltam apenas mais "+remainDays+" dias. Aguente firme!"


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= Math.round(100*((totalDays - remainDays)/totalDays))) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
move()

/* A partir daqui, tentaremos
fazer os gráficos de notas.
*/

var ctx = document.getElementById('myChart').getContext('2d');
const chartColors = ['#660000','#0e1111','#cf7500','#330000','#353839','#f0a500']
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
      datasets: [{
          label: 'Cálculo 3',
          data: [8.75, 10.0, 8.6, 7.2, 8.5],
          fill: 'false',
          borderColor:chartColors[0],
          pointRadius: 1.3,
          borderWidth: 3,
          lineTension: 0
        },

        {
          label: 'Cálculo 4',
          data: [5, 6, 9, 4, 8],
          fill: 'false',
          borderColor:chartColors[1],
          pointRadius: 1.3,
          borderWidth: 3,
          lineTension: 0
        },

        {
          label: 'Física 4',
          data: [10.0, 8.7, 10.0, 8.7, 6.7],
          fill: 'false',
          borderColor:chartColors[2],
          borderWidth: 3,
          pointRadius: 1.3,
          lineTension: 0
        },
        {
          label: 'Cálculo Numérico',
          data: [4.5,5.5,3.7,6.8,7.0],
          fill: 'false',
          borderColor:chartColors[3],
          borderWidth: 3,
          lineTension: 0,
          pointRadius: 1.3
        },
        {
          label: 'Meta do período',
          data: [8.5, 8.5, 8.5, 8.5, 8.5],
          borderDash: [10,5],
          pointRadius: 0,
          fill: 'false',
          borderColor:'#eee',
          borderWidth: 3,
          lineTension: 0
        },
    ]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});