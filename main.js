window.onload = function() {
  document.getElementById("openCloseSearch").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.add("hiddenToggle");
    document.getElementById("mobileSearch").classList.toggle("hiddenToggle");
  });
  document.getElementById("openCloseMenu").addEventListener("click", function() {
    document.getElementById("mobileSearch").classList.add("hiddenToggle");
    document.getElementById("mobileMenu").classList.toggle("hiddenToggle");
  });
}
