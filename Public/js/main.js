const fieldset = document.getElementById("kleur");
const radiobuttons = fieldset.querySelectorAll('input[type=radio]');
console.log(fieldset);
console.log(radiobuttons);

radiobuttons.forEach((radiobutton) =>{ 
  radiobutton.addEventListener("change", (event) => {
    changeColor(event.target.value);
})
})

function changeColor(value) {
    const shirt = document.getElementById("changeColor");
  
    shirt.style.fill = value;
    console.log(value);
}