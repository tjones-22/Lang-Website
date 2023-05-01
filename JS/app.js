// Use strict mode to prevent common coding mistakes
'use strict';

let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const submitBtn = document.querySelector('#submit');
const resultsDiv = document.querySelector('.submit-results');

function showSlides() {
  // Hide all slides with array destructuring and forEach loop
  [...slides].forEach((slide) => {
    slide.style.display = 'none';
  });

  slideIndex++;

  // Reset the slide index to 1 if it is greater than the total number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('fade');

  // Remove fade class after 2 seconds using setTimeout
  setTimeout(() => {
    slides[slideIndex - 1].classList.remove('fade');
  }, 2000);

  // Call the function again after 2 seconds
  setTimeout(showSlides, 2000);
}

showSlides();

submitBtn.addEventListener('click', () => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const ideas = document.querySelector('#thoughts').value;

  // Check if any of the form fields are empty and display an error message if necessary
  if (!name || !email || !ideas) {
    resultsDiv.textContent = 'Error';
  } else {
    resultsDiv.textContent = 'Submitted Successfully';
  }
});
