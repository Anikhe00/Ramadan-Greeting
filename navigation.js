document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("next-btn");
  const backButton = document.getElementById("back-btn");

  if (button) {
    button.addEventListener("click", function() {
      window.location.href = "letter.html"; 
    });
  }

  if (backButton) {
    backButton.addEventListener("click", function() {
      window.location.href = "index.html"; 
    });
  }
});