document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".service-item button");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert("More details coming soon!");
      });
    });
  
    // Smooth scroll for nav links (extra safeguard for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });
  