window.onload = function() {

  document.getElementById("openCloseSearch").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.add("hiddenToggle");
    document.getElementById("mobileSearch").classList.toggle("hiddenToggle");
  });
  document.getElementById("openCloseMenu").addEventListener("click", function() {
    document.getElementById("mobileSearch").classList.add("hiddenToggle");
    document.getElementById("mobileMenu").classList.toggle("hiddenToggle");
  });

  document.getElementById("navLeft").addEventListener("click", function() {
    NavigateCarousel(false);
  });
  document.getElementById("navRight").addEventListener("click", function() {
    NavigateCarousel(true);
  });
}

function NavigateCarousel(isNavRight) {
  const carousel = document.getElementById("innerCarousel");
  const carouselWidth = carousel.clientWidth;
  const isMobile = window.innerWidth <= 900;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const scrollLeft = carousel.scrollLeft;
  if (isNavRight) {
    document.getElementById("navLeft").classList.remove("hiddenToggle");
    var scrolling = setInterval(function(){
      if (isMobile) {
        carousel.scrollLeft += 10;
        if (carousel.scrollLeft >= scrollLeft + 290  || carousel.scrollLeft === maxScrollLeft) {
          clearInterval(scrolling);
          if (carousel.scrollLeft === maxScrollLeft) {
            document.getElementById("navRight").classList.add("hiddenToggle");
          }
        }
      } else {
        carousel.scrollLeft += 10;
        if (carousel.scrollLeft >= scrollLeft + 190 || carousel.scrollLeft === maxScrollLeft) {
          clearInterval(scrolling);
          if (carousel.scrollLeft === maxScrollLeft) {
            document.getElementById("navRight").classList.add("hiddenToggle");
          }
        }
      }
    }, 15);
  } else {
    document.getElementById("navRight").classList.remove("hiddenToggle");
    var scrolling = setInterval(function(){
      if (isMobile) {
        carousel.scrollLeft -= 10;
        if (carousel.scrollLeft <= scrollLeft - 290  || carousel.scrollLeft === 0) {
          clearInterval(scrolling);
          if (carousel.scrollLeft === 0) {
            document.getElementById("navLeft").classList.add("hiddenToggle");
          }
        }
      } else {
        carousel.scrollLeft -= 10;
        if (carousel.scrollLeft <= scrollLeft - 190 || carousel.scrollLeft === 0) {
          clearInterval(scrolling);
          if (carousel.scrollLeft === 0) {
            document.getElementById("navLeft").classList.add("hiddenToggle");
          }
        }
      }
    }, 15);
  }
}
