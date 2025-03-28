document.getElementById("toggle__theme").addEventListener("click", function () {
  toggleInvertedClass(".body");
  toggleInvertedClass(".header");
  toggleInvertedClass(".main__title");
  toggleInvertedClass(".submain__title");
  toggleInvertedClass(".header__title");
  toggleInvertedClass(".main__div");
  toggleInvertedClass(".button");
  toggleInvertedClass(".main__ul--ingredients");
  toggleInvertedClass(".underlineh");
  toggleInvertedClass(".icon");
});

function toggleInvertedClass(selector) {
  document.querySelectorAll(selector).forEach(element => {
      element.classList.toggle("inverted");
  });
}
