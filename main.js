window.onload = function() {

  document.getElementById("openCloseSearch").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.add("hiddenToggle");
    document.getElementById("mobileSearch").classList.toggle("hiddenToggle");
  });
  document.getElementById("openCloseMenu").addEventListener("click", function() {
    document.getElementById("mobileSearch").classList.add("hiddenToggle");
    document.getElementById("mobileMenu").classList.toggle("hiddenToggle");
  });

  document.getElementById("navLeft").addEventListener("mousedown", function() {
    NavigateCarousel(false);
  });
  document.getElementById("navRight").addEventListener("mousedown", function() {
    NavigateCarousel(true);
  });
}

function NavigateCarousel(isNavRight) {
  const carousel = document.getElementById("innerCarousel");
  const carouselWidth = carousel.clientWidth;
  const isMobile = window.innerWidth <= 900;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  if (isNavRight) {
    document.getElementById("navLeft").classList.remove("hiddenToggle");
    carousel.scrollLeft += 190;
    if (carousel.scrollLeft >= maxScrollLeft) {
      document.getElementById("navRight").classList.add("hiddenToggle");
    }
  } else {
    document.getElementById("navRight").classList.remove("hiddenToggle");
    carousel.scrollLeft -= 190;
    if (carousel.scrollLeft === 0) {
        document.getElementById("navLeft").classList.add("hiddenToggle");
    }
  }
}
