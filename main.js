const dots = document.getElementsByClassName("dots");
const quotes = document.getElementsByClassName("quote");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove("active-dot");
      quotes[j].classList.remove("active-quote");
    }
    this.classList.add("active-dot");
    quotes[i].classList.add("active-quote");
  });
}
