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
