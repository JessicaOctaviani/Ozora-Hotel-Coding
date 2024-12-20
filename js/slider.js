let slideIndexTop = 0;
showSlidesTop();

function showSlidesTop() {
    let i;
    let slidesTop = document.getElementsByClassName("slide-top");
    for (i = 0; i < slidesTop.length; i++) {
        slidesTop[i].style.display = "none";
    }
    slideIndexTop++;
    if (slideIndexTop > slidesTop.length) { slideIndexTop = 1 }
    slidesTop[slideIndexTop - 1].style.display = "block";
    setTimeout(showSlidesTop, 3000); // Change image every 3 seconds
}

let slideIndex = [1, 1, 1, 1];
let slideId = ["slide01", "slide02", "slide03", "slide04"]
let dotId = ["dot1", "dot2", "dot3", "dot4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlides(n, no) {
    showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    x[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no]-1].className += " active1";
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
