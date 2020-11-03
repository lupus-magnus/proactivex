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
var completedPercentage = 100*(((totalDays - remainDays)/totalDays)).toFixed(3)
toFill.textContent = completedPercentage +'%'

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

//Para quando o usuário for interagir com os gráficos:
var ids = 0;
var materiasObj = [ //lista de vários objetos (cada um uma matéria)
  //materia1 = {
  //  id = num,
  //  nome = str,
  //  notas = array }
];





function addSubject(){
  novaDisciplina = document.getElementById('disciplina1').value;
  novaNota = document.getElementById('nota1').value;
  //console.log(typeof(novaNota))
  arrayNotas = []
  arrayNotas.push(parseFloat(novaNota))

  
  
  //Criando o objeto da disciplina:
  newData = {
    id: ids,
    name: novaDisciplina,
    notas: arrayNotas
  };
  
  materiasObj.push(newData);

  mural = document.getElementById('container-disciplinas')
  mural.innerHTML += `
  <div class="row">
    <div class="col-5">
      ${novaDisciplina}
    </div>
    <div id='notas_materia${ids}' class="col-5">
      ${novaNota}
    </div>
    <div class="col-2">
      <button id=${ids} type="button" class='btn btn-secondary add-grade-btn'> + </button>
    </div>
  </div>
  `
  

  console.log(materiasObj);
  update_addBtns_list()
  ids+=1
}

function showForm(){
  //Primeiramente vamos tirar a caixa de aviso e deixar aparecer o gráfico
  convite = document.getElementById('convite')
  demoChart = document.getElementById('myChart')
  convite.classList.add('hidden')
  demoChart.classList.remove('blurred')
  //Agora vamos inserir um formulário
  myForm = document.getElementById('myForm')
  myForm.classList.remove('hidden')
}

letsGo = document.getElementById('letsGo')
letsGo.onclick = showForm
addBtn = document.getElementById('addButton')
addBtn.addEventListener('click',addSubject)

//Trecho de código para adicionar notas à cada disciplina:

var add_btns = []

function addGrade(event){
  id = event.target.id
  valorNovo = (10*Math.random()).toFixed(1)
  materiasObj[id].notas.push(valorNovo)
  console.log(materiasObj[id].notas)
  console.log("Clicamos no botão " + id)
  novas_notas = document.getElementById(`notas_materia${id}`)
  novas_notas.innerHTML += ', ' + valorNovo 
}
function update_addBtns_list(){
  add_btns = document.getElementsByClassName('add-grade-btn')
  console.log(`Our current add_btns array has ${add_btns.length} values\n ${add_btns}`)
  Array.from(add_btns).forEach(function(item){
    item.addEventListener('click', addGrade)
})
}

//Agora, vamos tentar plotar nossos novos dados no gráfico!
function updateChart(){
  let dadoqualquer = [1,2,3,4,5]
  //trecho para criar uma nova materia no gráfico:
  let algonovo = {
    label: "genérico_teste",
    fill: "false",
    data: dadoqualquer,
    borderColor: "green", //aqui vai entrar aquele mecanismo de usar o id pra calcular o resto duma lista pra gerar sempre cor bonitinha da paleta.
    lineTension: 0,
    pointRadius: 1.3,
    borderWidth: 3
  }
  myChart.data.datasets = [] //Limpa o gráfico. Pode ser usado num botão diferente, vamos pensar sobre.
  myChart.data.datasets.push(algonovo)
  console.log(myChart.data)
  myChart.update();
}

prontoBtn = document.getElementById('submit')
prontoBtn.addEventListener('click',updateChart)

console.log(myChart.data)
