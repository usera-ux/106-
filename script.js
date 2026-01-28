const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
const track = document.querySelector('.admin-track');
const cards = document.querySelectorAll('.admin-card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function getVisibleCount() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 4;
}

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 40;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

next.onclick = () => {
  const visible = getVisibleCount();
  if (index < cards.length - visible) {
    index++;
    updateSlider();
  }
};

prev.onclick = () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
};

window.addEventListener('resize', updateSlider);
