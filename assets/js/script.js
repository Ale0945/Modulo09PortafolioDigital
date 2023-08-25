/* let currentIndex = 0; */

function updateSlidePosition() {
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

document.addEventListener("DOMContentLoaded", function() {
    const comuniquemonosLink = document.getElementById("link-comuniquemonos");
    const comuniquemonosSection = document.getElementById("comuniquemonos");
  
    comuniquemonosLink.addEventListener("click", function(event) {
      comuniquemonosSection.style.display = "block"; 
      comuniquemonosSection.focus()
    });
  });







