document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");
  const fruits = list.querySelectorAll("li");

  fruits.forEach((fruit) => {
    fruit.addEventListener("click", () => {
      const span = fruit.querySelector(".emoji");
      const emoji = fruit.getAttribute("data-emoji");

      if (span.classList.contains("hidden")) {
        span.textContent = emoji;
        span.classList.remove("hidden");
      } else {
        span.classList.add("hidden");
      }
    });
  });
});
