var slideIndex = 0;
showSlides();
        
        function showSlides() {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > slides.length) {
            slideIndex = 1;
          }
          slides[slideIndex - 1].style.display = "block";
          slides[slideIndex - 1].classList.add("fade");
          setTimeout(function() {
            slides[slideIndex - 1].classList.remove("fade");
          }, 2000); // Remove fade class after 1s
          setTimeout(showSlides, 2000); // Change image every 4 seconds
        }

  const submitBtn = document.querySelector('#submit');
  const resultsDiv = document.querySelector('.submit-results');
  
 
  submitBtn.addEventListener('click', function() {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const ideas = document.querySelector("#thoughts")
    console.log(`${name.value} ${email.value} ${ideas.value}`)
    if(name || email || ideas) {
    resultsDiv.textContent = "Error";
    } else{
      resultsDiv.textContent = "Submitted Successfully";
    }
  });

