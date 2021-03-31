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
      history.pushState(null, 'Nerdy T-shirts', `/?shirtColor=${event.target.value}&shirtSize=${localStorage.getItem('maat')}&gender=${localStorage.getItem('geslacht')}`)
    })
  })
  radioMaat.forEach((radiobutton) =>{ 
    radiobutton.addEventListener("change", (event) => {
      localStorage.setItem("maat", event.target.value)
      history.pushState(null, 'Nerdy T-shirts', `/?shirtSize=${event.target.value}&shirtColor=${localStorage.getItem('kleur')}&gender=${localStorage.getItem('geslacht')}`)
})
})
radioGeslacht.forEach((radiobutton) =>{ 
  radiobutton.addEventListener("change", (event) => {
    localStorage.setItem("geslacht", event.target.value)
    history.pushState(null, 'Nerdy T-shirts', `/?gender=${event.target.value}&shirtColor=${localStorage.getItem('kleur')}&shirtSize=${localStorage.getItem('maat')}`)
})
})
}

window.onload = () => getColor()

function getColor(){
  const url = new URL(window.location.href)
  const queries = url.searchParams
  const dataKleur = localStorage.getItem("kleur")
  const dataMaat = localStorage.getItem("maat")
  const dataGeslacht = localStorage.getItem("geslacht")

radioKleur.forEach((radiobutton) => {  
  if (radiobutton.value === dataKleur && queries.get('shirtColor')) {
    radiobutton.checked = true
    changeColor(dataKleur)
  }
  else if (!queries.get('shirtColor')) {
    localStorage.removeItem('kleur')
  }
})
radioMaat.forEach((radiobutton) => {  
  if (radiobutton.value === dataMaat && queries.get('shirtSize')) {
    radiobutton.checked = true
  }
  else if (!queries.get('shirtSize')) {
    localStorage.removeItem('maat')
  }
})
radioGeslacht.forEach((radiobutton) => {  
  if (radiobutton.value === dataGeslacht && queries.get('gender')) {
    radiobutton.checked = true
  }
  else if (!queries.get('gender')) {
    localStorage.removeItem('geslacht')
  }
})
}

storeColor();
tekstTshirt();

