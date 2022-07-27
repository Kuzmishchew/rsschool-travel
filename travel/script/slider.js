// Desktop
const wrapper = document.getElementsByClassName("slides-wrapper")[0];
const slides = document.getElementsByClassName("slides-item");
const radio = document.getElementsByClassName("slide-checker");
const firstSlide = slides[0];
const secondSlide = slides[1];
const thirdSlide = slides[2];
// Mobile
const slider = document.getElementsByClassName("destination__slider_mb")[0];
const sliderText = document.getElementsByClassName("slider-mb__name")[0];
const radioMb = document.getElementsByClassName("slide-checker-mb");
const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");
let count = 1;

// Desktop
radio[1].style.backgroundColor = "rgba(242, 120, 92)";

firstSlide.addEventListener("click", () => {
    let margin = window.getComputedStyle(secondSlide, null).getPropertyValue("margin-right");
    let dist = +thirdSlide.offsetWidth + parseInt(margin, 10);
    firstSlide.style.left = `${dist}px`;
    secondSlide.style.left = `${dist}px`;
    thirdSlide.style.left = `${dist}px`;
    radio[0].style.backgroundColor = "rgba(242, 120, 92)";
    radio[1].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[2].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
});
radio[0].addEventListener("click", () => {
    let margin = window.getComputedStyle(secondSlide, null).getPropertyValue("margin-right");
    let dist = +thirdSlide.offsetWidth + parseInt(margin, 10);
    firstSlide.style.left = `${dist}px`;
    secondSlide.style.left = `${dist}px`;
    thirdSlide.style.left = `${dist}px`;
    radio[0].style.backgroundColor = "rgba(242, 120, 92)";
    radio[1].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[2].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
});
radio[1].addEventListener("click", () => {
    thirdSlide.style.left = `0`;
    firstSlide.style.left = `0`;
    secondSlide.style.left = `0`;
    radio[0].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[1].style.backgroundColor = "rgba(242, 120, 92)";
    radio[2].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
});
secondSlide.addEventListener("click", () => {
    thirdSlide.style.left = `0`;
    firstSlide.style.left = `0`;
    secondSlide.style.left = `0`;
    radio[0].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[1].style.backgroundColor = "rgba(242, 120, 92)";
    radio[2].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
});
radio[2].addEventListener("click", () => {
    let margin = window.getComputedStyle(secondSlide, null).getPropertyValue("margin-right");
    let dist = +thirdSlide.offsetWidth + parseInt(margin, 10);
    thirdSlide.style.left = `-${dist}px`;
    firstSlide.style.left = `-${dist}px`;
    secondSlide.style.left = `-${dist}px`;
    radio[0].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[1].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[2].style.backgroundColor = "rgba(242, 120, 92)";
});
thirdSlide.addEventListener("click", () => {
    let margin = window.getComputedStyle(secondSlide, null).getPropertyValue("margin-right");
    let dist = +thirdSlide.offsetWidth + parseInt(margin, 10);
    thirdSlide.style.left = `-${dist}px`;
    firstSlide.style.left = `-${dist}px`;
    secondSlide.style.left = `-${dist}px`;
    radio[0].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[1].style.backgroundColor = "rgba(242, 120, 92, 0.7)";
    radio[2].style.backgroundColor = "rgba(242, 120, 92)";
});

// Mobile
function changeRight() {
    if (count == 1) {
        slider.classList.remove("first-back");
        slider.classList.add("second-back");
        sliderText.innerHTML = "JAPAN";
        radioMb[0].classList.remove("slide-checker_active");
        radioMb[1].classList.add("slide-checker_active");
    }
    if (count == 2) {
        slider.classList.remove("second-back");
        slider.classList.add("third-back");
        sliderText.innerHTML = "USA";
        radioMb[1].classList.remove("slide-checker_active");
        radioMb[2].classList.add("slide-checker_active");
    }   
    if (count == 3) {
        slider.classList.remove("third-back");
        slider.classList.add("first-back");
        sliderText.innerHTML = "SPAIN";
        radioMb[2].classList.remove("slide-checker_active");
        radioMb[0].classList.add("slide-checker_active");
        count = 0;
    }   
    count++;
}
function changeLeft() {
    if (count == 1) {
        slider.classList.remove("first-back");
        slider.classList.add("third-back");
        sliderText.innerHTML = "USA";
        radioMb[0].classList.remove("slide-checker_active");
        radioMb[2].classList.add("slide-checker_active");
        count = 4;
    }
    if (count == 2) {
        slider.classList.remove("second-back");
        slider.classList.add("first-back");
        sliderText.innerHTML = "SPAIN";
        radioMb[1].classList.remove("slide-checker_active");
        radioMb[0].classList.add("slide-checker_active");
    }
    if (count == 3) {
        slider.classList.remove("third-back");
        slider.classList.add("second-back");
        sliderText.innerHTML = "JAPAN";
        radioMb[2].classList.remove("slide-checker_active");
        radioMb[1].classList.add("slide-checker_active");
    } 
    count--;
}
right.addEventListener("click", () => {
    changeRight();  
})
left.addEventListener("click", () => {
    changeLeft();  
})
radioMb[0].addEventListener("click", () => {
    if (count == 2) {
        slider.classList.remove("second-back");
        slider.classList.add("first-back");
        sliderText.innerHTML = "SPAIN";
        radioMb[1].classList.remove("slide-checker_active");
        radioMb[0].classList.add("slide-checker_active");
    }
    if (count == 3) {
        slider.classList.remove("third-back");
        slider.classList.add("first-back");
        sliderText.innerHTML = "SPAIN";
        radioMb[2].classList.remove("slide-checker_active");
        radioMb[0].classList.add("slide-checker_active");
    } 
    count = 1;
})
radioMb[1].addEventListener("click", () => {
    if (count == 1) {
        slider.classList.remove("first-back");
        slider.classList.add("second-back");
        sliderText.innerHTML = "JAPAN";
        radioMb[0].classList.remove("slide-checker_active");
        radioMb[1].classList.add("slide-checker_active");
    }
    if (count == 3) {
        slider.classList.remove("third-back");
        slider.classList.add("second-back");
        sliderText.innerHTML = "JAPAN";
        radioMb[2].classList.remove("slide-checker_active");
        radioMb[1].classList.add("slide-checker_active");
    } 
    count = 2;
})
radioMb[2].addEventListener("click", () => {
    if (count == 1) {
        slider.classList.remove("first-back");
        slider.classList.add("third-back");
        sliderText.innerHTML = "USA";
        radioMb[0].classList.remove("slide-checker_active");
        radioMb[2].classList.add("slide-checker_active");
    }
    if (count == 2) {
        slider.classList.remove("second-back");
        slider.classList.add("third-back");
        sliderText.innerHTML = "USA";
        radioMb[1].classList.remove("slide-checker_active");
        radioMb[2].classList.add("slide-checker_active");
    } 
    count = 3;
})