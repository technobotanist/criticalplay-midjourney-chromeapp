const divider = document.getElementById("divider");
const left = document.getElementById("leftPane");
const right = document.getElementById("rightPane");
let isDragging = false;

divider.addEventListener("mousedown", () => isDragging = true);
window.addEventListener("mouseup", () => isDragging = false);
window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const percent = (e.clientX / window.innerWidth) * 100;
  left.style.flex = percent;
  right.style.flex = 100 - percent;
});
