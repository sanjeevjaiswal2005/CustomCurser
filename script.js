var main = document.querySelector("main");
var crsr = document.querySelector(".cursor");

// Mouse movement (Laptop/Desktop)
main.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

// Touch movement (Mobile)
main.addEventListener("touchmove", (e) => {
  let touch = e.touches[0];
  crsr.style.left = touch.clientX + "px";
  crsr.style.top = touch.clientY + "px";
});
