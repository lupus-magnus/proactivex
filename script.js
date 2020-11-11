//Para criar a interatividade dos itens bloqueados.
var locked_pages = document.getElementsByClassName("locked");

var i;
console.log('locked: ')
for (i = 0; i < locked_pages.length; i++) {
  //Para mutar o icone também
  children = locked_pages[i].children; 
  locked_pages[i].classList.add("text-muted")
  locked_pages[i].classList.add("disabled-link")
  for (j = 0; j < children.length; j++) {
    children[j].classList.add("text-muted")    
  }
  locked_pages[i].innerHTML += `<i style="float: right; margin-right: 50px" class="fas fa-lock">`+ '</i>';
  
} 

var unlocked_pages = document.getElementsByClassName("unlocked");
for (i = 0; i < unlocked_pages.length; i++) {
  unlocked_pages[i].innerHTML += `<i style="color:#cf7500; float: right; margin-right: 50px" class="fas fa-lock-open">`+ '</i>';
} 





