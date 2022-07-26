const wrapper = document.getElementsByClassName("slides-wrapper")[0];
const slides = document.getElementsByClassName("slides-item");
const radio = document.getElementsByClassName("slide-checker");
const firstSlide = slides[0];
const secondSlide = slides[1];
const thirdSlide = slides[2];


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
