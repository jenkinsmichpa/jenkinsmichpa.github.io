"use strict";
/* Set copyright year */
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
/* Perform JS half of antispam operations */
document.getElementById("riversong").innerHTML = atob('WvA4AzD7WvA4AzL7WvA4AwZ7WaOypzyiMQfzV3t2LmfzV3t2BGfzV3t2ZGfzV3t2MQf8p3Ouow5gMJkiMUx8Y3AjLJ4+WvA4Awp7WzAioJ1uqQfzV3t2ZGfzV3t3ZQfzV3t2BQfzV3t2ZmfzV3t2BGfzV3t2MQf8p3Ouow5jo25xCP9mpTShCvLwrQpmBlLwrQMyBlLwrQL5BlLwrQMvBlLwrQMyBlLwrQL1BlLwrQMuBjb'.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); }))
document.addEventListener("DOMContentLoaded", function (event) {
  var navbarTransition = function () {
    if (window.pageYOffset >= navbar.offsetHeight) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-body", "shadow");
      navbar.removeAttribute('data-bs-theme');
    } else {
      navbar.classList.remove("bg-body", "shadow");
      navbar.classList.add("bg-transparent");
      navbar.setAttribute('data-bs-theme', 'dark');
    }
  }
  var parallax = function () {
    var scrollHeight = window.pageYOffset;
    parallaxes.forEach(function (element) {
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
  window.addEventListener("scroll", function () {
    /* Reoccuring navbar transition */
    navbarTransition();
    /* Reoccuring parallax */
    parallax();
  });
  var lightBox = document.getElementById('lightBox')
  lightBox.addEventListener('show.bs.modal', function (event) {
    /* Display full size image not small one */
    document.getElementById("lightBoxImage").src = event.relatedTarget.src.replace(/small\/old\/|small\/webp\//, "");
  });
});
/* Add listener to update ScrollSpy active element when user clicks a link */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    /* Small timeout to let the scroll settle */
    setTimeout(() => {
      bootstrap.ScrollSpy.getInstance(document.body)?.refresh();
    }, 300);
  });
});