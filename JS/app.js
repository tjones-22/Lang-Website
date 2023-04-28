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
          }, 4000); // Remove fade class after 1s
          setTimeout(showSlides, 2000); // Change image every 4 seconds
        }
        