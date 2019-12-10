const navIcon = document.getElementById('nav-icon');
const menu = document.getElementById('menu');

let isMenuDisplayed = false;

navIcon.addEventListener("click", function(event){

    if(isMenuDisplayed === false){
        menu.style.display = 'block';
        isMenuDisplayed = true;

    }else {
        menu.style.display = 'none';
        isMenuDisplayed = false;

   }
});