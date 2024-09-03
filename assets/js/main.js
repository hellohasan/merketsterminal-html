jQuery(document).ready(function ($) {
   
  // menu bg add
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >50) {
      $("header").addClass("menu-bg");
    } else {
      $("header").removeClass("menu-bg");
    }
  });
  
});
document.addEventListener("click", function (event) {
  const div = document.getElementById("outside-click");
  const navbarText = document.getElementById("navbarText");
  if (!div.contains(event.target)) {
    // console.log('Clicked outside the div');
    navbarText.classList.remove("show");
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const textToType = "Market Terminal";
  const typedTextElement = document.getElementById("typed-text");
  let index = 0;

  function typeText() {
      if (index < textToType.length) {
          typedTextElement.textContent += textToType.charAt(index);
          index++;
          setTimeout(typeText, 100); // Adjust speed by changing the timeout duration
      }
  }

  typeText();
});
 
