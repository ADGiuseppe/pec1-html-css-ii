document.getElementById("toggle__theme").addEventListener("click", function () {
  toggleInvertedClass(".body");
  toggleInvertedClass(".header");
  toggleInvertedClass(".section__title");
  toggleInvertedClass(".subsection__title");
  toggleInvertedClass(".header__title");
  toggleInvertedClass(".standard__container");
  toggleInvertedClass(".button");
  toggleInvertedClass(".ingredient__group");
  toggleInvertedClass(".underlineh");
});

function toggleInvertedClass(selector) {
  document.querySelectorAll(selector).forEach(element => {
      element.classList.toggle("inverted");
  });
}
