const fieldset = document.getElementById("kleur");
const radiobuttons = fieldset.querySelectorAll('input[type=radio]');

radiobuttons.forEach((radiobutton) =>{ 
  radiobutton.addEventListener("change", (event) => {
    changeColor(event.target.value);
})
})

function changeColor(value) {
    const shirt = document.getElementById("changeColor");
  
    shirt.style.fill = value;
}

function storeColor() {
  radiobuttons.forEach((radiobutton) =>{ 
    radiobutton.addEventListener("change", (event) => {
      localStorage.setItem("chosen", event.target.value)
    })
  })
}

function getColor(){
  
}

storeColor();