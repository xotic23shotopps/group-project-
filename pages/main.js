let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 3000); // Change every 3 sec
}


const subscribeBtn = document.querySelector("button");
subscribeBtn.addEventListener("click", () => {
  const emailInput = document.querySelector('input[type="email"]');
  if (emailInput.value) {
    alert("Thanks for subscribing!");
    emailInput.value = ""; // Reset field
  } else {
    alert("Please enter your email first.");
  }
});