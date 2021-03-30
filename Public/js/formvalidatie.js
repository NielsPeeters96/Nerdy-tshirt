function formValidation() {
    const form = document.getElementById("bestelForm");
    const naamForm = document.querySelectorAll("naamForm");
    const postcodeForm = document.querySelectorAll("postcodeForm");
    const mobielForm = document.querySelectorAll('mobielForm')
    const adresForm = document.querySelectorAll("adresForm");
    const errorElement = document.getElementById("error");
  
    naamForm.forEach((form) => {
      form.required = false
    })
    postcodeForm.forEach((form) => {
      form.required = false
    })
    mobielForm.forEach((form) => {
      form.required = false
    })
    adresForm.forEach((form) => {
        form.required = false
    })
  
    form.addEventListener("submit", (e) => {
      let messages = [];
      if (![...naamForm].some((el) => el.checked == true)) {
        messages.push("Vul je naam in");
      }
      if (![...postcodeForm].some((el) => el.checked == true)) {
        messages.push("Vul je postcode in");
      }
      if (![...mobielForm].some((el) => el.checked == true)) {
        messages.push("Vul je nummer in");
      }
      if (![...adresForm].some((el) => el.checked == true)) {
        messages.push("Vul je adres in");
      }
  
      if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
      }
    });
  }