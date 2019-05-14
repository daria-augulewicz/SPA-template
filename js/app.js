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
  const readMoreLessBtn = document.querySelector(".read-more-less-btn");

  function showHideText() {
    const siblingText = this.previousElementSibling;
    
    if (siblingText.style.display === "none" || siblingText.style.display === "") {
        siblingText.style.display = "block";
        this.textContent = "Czytaj mniej";
    } else {
        siblingText.style.display = "none";
        this.textContent = "Czytaj więcej";
    }
  }
  
  readMoreLessBtn.addEventListener("click", showHideText);
});