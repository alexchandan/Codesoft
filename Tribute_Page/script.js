const gallery = document.querySelector('.gallery');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const imageCount = 3; // Number of images displayed at a time

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - imageCount, 0);
  updateGallery();
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + imageCount, gallery.children.length - imageCount);
  updateGallery();
});

function updateGallery() {
  const offset = -currentIndex * (100 / imageCount);
  gallery.style.transform = `translateX(${offset}%)`;
}
