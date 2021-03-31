function formValidation() {
    const form = document.getElementById("bestelForm");
    const naamForm = document.querySelector("#naamForm input");
    const postcodeForm = document.querySelector("#postcodeForm input");
    const adresForm = document.querySelector("#adresForm input");
    const mobielForm = document.querySelector("#mobielForm input");
    const errorElement = document.getElementById("errorMsg");
  
    // if javascript is enabled remove required attributes
    
      naamForm.required = false
      postcodeForm.required = false
      adresForm.required = false
      mobielForm.required = false
  
    // all inputs aren't checked, these messages gets pushed into an array
    form.addEventListener("submit", (e) => {
      let messages = []
      if (naamForm.value.length <= 0) {
        messages.push('Naam niet ingevuld')
      }
      if (postcodeForm.value.length <= 0) {
        messages.push('Postcode niet ingevuld')
      }
      if (adresForm.value.length <= 0) {
        messages.push('Adres niet ingevuld')
      }
      if (mobielForm.value.length <= 0) {
        messages.push('Mobiel niet ingevuld')
      }
  
      // if this array is not empty prevent submit and set fill error element with error text
      if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
      }
    });
  }
  
  formValidation();