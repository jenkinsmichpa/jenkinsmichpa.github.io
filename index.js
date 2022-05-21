  "use strict";
  document.addEventListener("DOMContentLoaded", function(event) {
    var navbarTransition = function() {
      if (window.pageYOffset >= navbar.offsetHeight) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("navbar-dark", "bg-dark", "shadow");
        navbarContainer.classList.remove("pt-2");
        navbarContainer.classList.add("pt-1");
      } else {
        navbar.classList.remove("navbar-dark", "bg-dark", "shadow");
        navbar.classList.add("navbar-dark", "bg-transparent");
        navbarContainer.classList.remove("pt-1");
        navbarContainer.classList.add("pt-2");
      }
    }
    var parallax = function() {
      var scrollHeight = window.pageYOffset;
      parallaxes.forEach(function(element) {
        element.style.backgroundPositionY = (scrollHeight - element.offsetTop) / 3 + "px";
      });
    }
    /* Initial navbar transition */
    var navbar = document.getElementById("navbar");
    var navbarContainer = document.getElementById("navbarContainer");
    navbarTransition();
    /* Initial parallax */
    var parallaxes = document.querySelectorAll(".parallax");
    parallax();
    window.addEventListener("scroll", function() {
      /* Reoccuring navbar transition */
      navbarTransition();
      /* Reoccuring parallax */
      parallax();
    });
    var lightBox = document.getElementById('lightBox')
    lightBox.addEventListener('show.bs.modal', function(event) {
      /* Display full size image not small one */
      document.getElementById("lightBoxImage").src = event.relatedTarget.src.replace(/small\/old\/|small\/webp\//, "");
    });  
  });
