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

  let fingerStartPosition = 0;
  document.getElementById("innerCarousel").addEventListener("touchstart", function(e) {
    fingerStartPosition = onTouchStart(e);
  })
  document.getElementById("innerCarousel").addEventListener("touchend", function(e) {
    onTouchEnd(e, fingerStartPosition);
  })
}

function onTouchStart(e) {
  return e.touches[0].clientX;
}

function onTouchEnd(e, fingerStartPosition) {
  const fingerEndPosition = e.changedTouches[0].clientX;
  if (fingerEndPosition - fingerStartPosition < -50) {
    NavigateCarousel(true);
  } else if (fingerEndPosition - fingerStartPosition > 50) {
    NavigateCarousel(false);
  }
}

function NavigateCarousel(isNavRight) {
  const carousel = document.getElementById("innerCarousel");
  const isMobile = window.innerWidth <= 900;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const scrollLeft = carousel.scrollLeft;
  if (isNavRight) {
    onNavRight(carousel, isMobile, maxScrollLeft, scrollLeft);
  } else {
    onNavLeft(carousel, isMobile, maxScrollLeft, scrollLeft);
  }
}

function onNavRight(carousel, isMobile, maxScrollLeft, scrollLeft) {
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
}

function onNavLeft(carousel, isMobile, maxScrollLeft, scrollLeft) {
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
