document.addEventListener("DOMContentLoaded", function(){ 
  let box = document.getElementById("box");
  let container = document.querySelector(".container");

  let topPos = 0;
  let leftPos = 0;
  const step = 10;

  window.move = function(direction) { 
    const boxSize = box.offsetWidth;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    if (direction === "up" && topPos > 0) topPos -= step;
    if (direction === "down" && topPos < containerHeight - boxSize) topPos += step;
    if (direction === "left" && leftPos > 0) leftPos -= step;
    if (direction === "right" && leftPos < containerWidth - boxSize) leftPos += step;

    box.style.top = topPos + "px";
    box.style.left = leftPos + "px";
  }
});
