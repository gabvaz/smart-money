let animated = document.querySelectorAll(".fade");
window.addEventListener("scroll", show);
function show() {
  for (let i = 0; i < animated.length; i++) {
    var el = animated[i];
    var top = el.getBoundingClientRect().top - window.innerHeight + 20;
    if (top < -60) {
      el.classList.add("animated");
    } else {
      el.classList.remove("animated");
    }
  }
}
show();
