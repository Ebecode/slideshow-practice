//First slideshow
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let current = 0;
function clearBg() {
  slides.forEach(slide => {
    slide.style.display = "none";
  });
}
function goLeft() {
  if (current > 0) {
    current--;
  } else {
    current = slides.length - 1;
  }
  clearBg();
  slides[current].style.display = "block";
}
function goRight() {
  if (current < slides.length - 1) {
    current++;
  } else {
    current = 0;
  }

  clearBg();
  slides[current].style.display = "block";
}
left.addEventListener("click", goLeft, false);
right.addEventListener("click", goRight, false);
