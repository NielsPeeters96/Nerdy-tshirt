function fillShirt() {
    var white = document.getElementById("color-white");
    var black = document.getElementById("color-black");
    var blue = document.getElementById("color-blue");
    var yellow = document.getElementById("color-yellow");
    if (white) {
      white.addEventListener("change", () => {
        changeColor(white.value);
      });
      black.addEventListener("change", () => {
        changeColor(black.value);
      });
      blue.addEventListener("change", () => {
        changeColor(blue.value);
      });
      yellow.addEventListener("change", () => {
        changeColor(yellow.value);
      });
    }
  }
  
  function changeColor(value) {
    const shirt = document.getElementById("t-shirt");
  
    shirt.style.fill = value;
  }