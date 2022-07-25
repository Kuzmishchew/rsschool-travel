console.log("Верстка приобретает черты мобильной еще при 725px, это моё решение, и я понимаю, что оно может повлиять на первую оценку из третьего пункта требований.");
console.log("\n Моя оценка работы.  [75](85)");
console.log("\n 1. Вёрстка соответствует макету есть <header> и <footer> и секции preview, steps, destinations, stories.  [48]");
console.log("\n 2. Полосы прокрутки не появляются при разрешениях 1440px-390px и 390px-320px.  [15]");
console.log("\n Как я и писал выше, мобильная верстка начинается еще с 725px, потому что мне показалась она визуально естественней при таком размере.")
console.log("\n 3. Адаптивное меню:  [22]");
console.log("\n - при ширине 725px в моем случае появляется бургер-иконка;(+2)");
console.log("\n - при наждатии на бургер-иконку плавно появляется адаптивное меню;(+4)");
console.log("\n - адаптивное меню соответствует макету;(+4)");
console.log("\n - при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран;(+4)");
console.log("\n - ссылки в адаптивном меню работают с плавной прокруткой;(+4)");
console.log("\n - адаптивное меню соответствует макету;(+4)");
console.log("\n - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна.(+4)");

const burgerButton = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");
const burgerMenuExit = document.getElementById("burger-menu__exit");
const menuLink = document.getElementsByClassName("burger-menu__nav-item");
const exitCarpet = document.getElementById("exit-carpet");

const popUp = document.getElementById("popup");
const login = document.getElementById("login");
const account = document.getElementById("account");

function showBurgerMenu() {    
    burgerMenu.style.right = "-10px";
    exitCarpet.style.display = "block";
}
function hideBurgerMenu() {
    burgerMenu.style.right = "-175px";
    exitCarpet.style.display = "none";
}
function showPopUp() {
    popUp.style.top = "5%";
    exitCarpet.style.display = "block";
    exitCarpet.style.background = "rgba(0, 0, 0, 0.5)";
}
function hidePopUp() {
    popUp.style.top = "-700px";
    exitCarpet.style.display = "none";
    exitCarpet.style.background = "none";
}


burgerButton.addEventListener('click', showBurgerMenu);

burgerMenuExit.addEventListener('click', hideBurgerMenu) ;

exitCarpet.addEventListener("click", function(){
    if (burgerMenu.style.right == "-10px") hideBurgerMenu();
    if (popUp.style.top == "5%") hidePopUp();
});

login.addEventListener("click", showPopUp);
account.addEventListener("click", showPopUp);

for (let i = 0; i < menuLink.length; i++) {
   if (i != 4) {
    menuLink[i].addEventListener("click", hideBurgerMenu);
   } else {
    menuLink[i].addEventListener("click", () => {burgerMenu.style.right = "-175px"});
   } 
}
