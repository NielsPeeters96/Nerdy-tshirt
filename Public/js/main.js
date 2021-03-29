const fieldset = document.getElementById("kleur");
const radioKleur = fieldset.querySelectorAll('input[type=radio]');
const fieldsetMaat = document.getElementById("maat");
const radioMaat = fieldsetMaat.querySelectorAll('input[type=radio]');
const fieldsetGeslacht = document.getElementById("geslacht");
const radioGeslacht = fieldsetGeslacht.querySelectorAll('input[type=radio]');

document.getElementById("buttonKleur").style.display='none';

radioKleur.forEach((radiobutton) =>{ 
  radiobutton.addEventListener("change", (event) => {
    changeColor(event.target.value);
})
})

function changeColor(value) {
    const shirt = document.getElementById("changeColor");
  
    shirt.style.fill = value;
}

function storeColor() {
  radioKleur.forEach((radiobutton) =>{ 
    radiobutton.addEventListener("change", (event) => {
      localStorage.setItem("kleur", event.target.value)
    })
  })
  radioMaat.forEach((radiobutton) =>{ 
    radiobutton.addEventListener("change", (event) => {
      localStorage.setItem("maat", event.target.value)
})
})
radioGeslacht.forEach((radiobutton) =>{ 
  radiobutton.addEventListener("change", (event) => {
    localStorage.setItem("geslacht", event.target.value)
})
})
}

window.onload = () => getColor()

function getColor(){
  localStorage.getItem("kleur")
  const dataKleur = localStorage.getItem("kleur")
  localStorage.getItem("maat")
  const dataMaat = localStorage.getItem("maat")
  localStorage.getItem("geslacht")
  const dataGeslacht = localStorage.getItem("geslacht")

radioKleur.forEach((radiobutton) => {  
  console.log('test');
  if (radiobutton.value === dataKleur) {
    radiobutton.checked = true
    changeColor(dataKleur)
  }
})
radioMaat.forEach((radiobutton) => {  
  if (radiobutton.value === dataMaat) {
    radiobutton.checked = true
  }
})
radioGeslacht.forEach((radiobutton) => {  
  if (radiobutton.value === dataGeslacht) {
    radiobutton.checked = true
  }
})
}

storeColor();

