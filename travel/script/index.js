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
const form = document.getElementById("formData");
const signIn = document.getElementById("signIn");
const facebook = document.getElementById("facebookSignIn");
const google = document.getElementById("googleSignIn");
const registration = document.getElementById("registration");

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
signIn.addEventListener("click", () => {
    const formData = new FormData(form);
    const login = formData.get("login");
    const password = formData.get("password");
    hidePopUp();
    alert("Your login: " + login + "\n" + "Your password: " + password);
});
google.addEventListener("click", () => {
    hidePopUp();
    alert("Authorization with Google account.");
});
facebook.addEventListener("click", () => {
    hidePopUp();
    alert("Authorization with Facebook account.");
});
registration.addEventListener("click", () => {
    popUp.style.height = "436px";
    facebook.style.display = "none";
    google.style.display = "none";
    document.getElementsByClassName("popup-line")[0].style.display = "none";
    document.getElementsByClassName("pass-reload")[0].style.display = "none";
    document.getElementsByClassName("popup__heading")[0].innerHTML = "Create account";
    document.getElementsByClassName("sign-in__button")[0].innerHTML = "Sign Up";
    document.getElementsByClassName("registration")[0].style.display = "none";
    document.getElementsByClassName("autorization")[0].style.display = "block";
});
document.getElementById("log_in").addEventListener("click", () => {
    popUp.style.height = "660px";
    facebook.style.display = "block";
    google.style.display = "block";
    document.getElementsByClassName("popup-line")[0].style.display = "flex";
    document.getElementsByClassName("pass-reload")[0].style.display = "block";
    document.getElementsByClassName("popup__heading")[0].innerHTML = "Log in to your account";
    document.getElementsByClassName("sign-in__button")[0].innerHTML = "Sign In";
    document.getElementsByClassName("registration")[0].style.display = "block";
    document.getElementsByClassName("autorization")[0].style.display = "none";
})

for (let i = 0; i < menuLink.length; i++) {
   if (i != 4) {
    menuLink[i].addEventListener("click", hideBurgerMenu);
   } else {
    menuLink[i].addEventListener("click", () => {burgerMenu.style.right = "-175px"});
   } 
}
