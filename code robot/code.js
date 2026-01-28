document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".copy-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const code = button.nextElementSibling.innerText;

      navigator.clipboard.writeText(code).then(() => {
        button.textContent = "Copié !";
        setTimeout(() => button.textContent = "Copier", 1500);
      });
    });
  });
});

const images = document.querySelectorAll('.slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);

