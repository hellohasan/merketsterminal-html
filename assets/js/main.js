jQuery(document).ready(function ($) {
   
  // menu bg add
  // $(window).on("scroll", function () {
  //   if ($(window).scrollTop() >50) {
  //     $("header").addClass("menu-bg");
  //   } else {
  //     $("header").removeClass("menu-bg");
  //   }
  // });
  // $(".close-mark").click(function(){
  //   $(".country-menu").hide();
  // });
  
});
// scroll bar js
document.addEventListener('DOMContentLoaded', function () {
  new SimpleBar(document.getElementById('scrollbar'));
});
 


const toggleDropdown = $(".nav-link.dropdown-toggle");
const dropdown = $(".terget-content");
const mainContent = $(".blur-content");

toggleDropdown.click(function () {
  dropdown.toggleClass("show");

  if (dropdown.hasClass("show")) {
    mainContent.css({
      "-webkit-filter": "blur(5px)",
      "-moz-filter": "blur(5px)",
      "-o-filter": "blur(5px)",
      "-ms-filter": "blur(5px)",
      filter: "blur(5px)",
      
      
    });
  } else {
    mainContent.css({
      "-webkit-filter": "none",
      "-moz-filter": "none",
      "-o-filter": "none",
      "-ms-filter": "none",
      filter: "none"
    });
  }
});

document.addEventListener("click", function (event) {
  const div = document.getElementById("outside-click");
  const navbarText = document.getElementById("main_nav");
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
 
