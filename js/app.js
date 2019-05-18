document.addEventListener("DOMContentLoaded", function() {
  
  // nested menu
  const nestedMenu = document.querySelector (".nested-menu");
  const menuTriggerEl = document.querySelector(".menu-trigger-el");

  menuTriggerEl.addEventListener("mouseover", function () {
    nestedMenu.style.display = "block";
  });

  nestedMenu.addEventListener("mouseout", function() {
    this.style.display = "none";
  });

  //  read more-less
  const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");

  function showHideText() {
    const siblingText = this.previousElementSibling;
    
    if (siblingText.style.display === "none" ||  siblingText.style.display === "") {
        siblingText.style.display = "block";
        this.textContent = "Czytaj mniej";
    } else {
        siblingText.style.display = "none";
        this.textContent = "Czytaj więcej";
    }
  }
  
  for (let i = 0; i < readMoreLessBtns.length; i++) {
    readMoreLessBtns[i].addEventListener("click", showHideText);
  }
  
//  newsletter
  const input = document.querySelector(".newsletter-form input");
  const newsletterBtn = document.querySelector(".newsletter-form button");
  const formInfo = document.querySelector(".form-info");
  
  newsletterBtn.addEventListener("click", function(event) {
    event.preventDefault();
    formInfo.style.display = "block";
    
    if (input.value !== "") {
      formInfo.textContent = "Zapisano do newslettera";
      input.value = "";
    } else {
      formInfo.textContent = "Pole nie może być puste, podaj adres email";
    }
  });
  
  //slider
  const slider = document.querySelector(".slider");
  const sliderStage = document.querySelector(".slider-stage");
  const slides = document.querySelectorAll(".slider li");
  const prev = document.querySelector(".previous-arrow");
  const next = document.querySelector(".next-arrow");
  
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;
  let slidesNumber = slides.length - 1;
  
  function goToSlide(index) {
    slider.style.left = index * (-slideWidth) + "px";
    currentIndex = index;
  }
  
  goToSlide();
  
  
  
});