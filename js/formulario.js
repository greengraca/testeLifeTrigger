var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submeter";
  } else {
    document.getElementById("nextBtn").innerHTML = "Seguinte";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length && document.querySelector("#perfilForm")) {
    //...the form gets submitted:
    document.getElementById("perfilForm").submit();
    return false;
  }
  if (currentTab >= x.length && document.querySelector("#comunicacaoForm")) {
    //...the form gets submitted:
    document.getElementById("comunicacaoForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

let oQueProcuraPergunta = document.querySelector("#oQueProcura")
let situacaoMuitoMotivadoPergunta = document.querySelector("#situacaoMuitoMotivado")
let outraSituacaoMuitoMotivadoPergunta = document.querySelector("#outraSituacaoMuitoMotivado")
var areaDaVida

var radioWarning = document.querySelector(".radioWarning")

let visual = 0
let auditivo = 0
let cinestesico = 0

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].querySelectorAll("#perfilForm input");
  z = x[currentTab].getElementsByTagName("textarea")
  var radios = x[currentTab].querySelectorAll('input[type="radio"]:checked');
  var checked = radios.length > 0 ? true : false;

  radios.forEach (radio => {
    if(radio.value == "Visual") visual++
    if(radio.value == "Auditivo") auditivo++
    if(radio.value == "Cinestesico") cinestesico++
  })

  if(currentTab == 0 && document.querySelector("#perfilForm")) {
    areaDaVida = x[0].querySelector('input[type="radio"]:checked') ? x[0].querySelector('input[type="radio"]:checked').value : ""
    oQueProcuraPergunta.innerHTML = `O que procura na área em questão? (${areaDaVida})`
    situacaoMuitoMotivadoPergunta.innerHTML = `Fale-me de uma situação da actividade em questão (${areaDaVida}) em que se sentia muito feliz e motivado`
    outraSituacaoMuitoMotivadoPergunta.innerHTML = `Fale-me de outra situação distinta da actividade em questão (${areaDaVida}) em que se sentia muito feliz e motivado`
  }

  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    
    if (y[i].type === 'radio' && !checked) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      radioWarning.style.display = "block"
      // and set the current valid status to false:
      valid = false;
    } else if (y[i].value == "" && !y[i].classList.contains("resultadoValido")) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    } 
    
  }

  for (i = 0; i < z.length; i++) {
    
    if (z[i].value == "") {
      // add an "invalid" class to the field:
      z[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    } 
    
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    radioWarning.style.display = "none"
  }

  if(currentTab == 13 && document.querySelector("#comunicacaoForm")) {
    document.querySelector("#visual").value = visual
    document.querySelector("#auditivo").value = auditivo
    document.querySelector("#cinestesico").value = cinestesico
  }

  return valid; // return the valid status
}




function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

let temAgenda = document.querySelector("#temAgenda")
let naoTemAgenda = document.querySelector("#naoTemAgenda")
let agendaHidden = document.querySelector("#agendaHidden")

if(temAgenda) {
  temAgenda.addEventListener("input", () => {
    agendaHidden.removeAttribute("hidden")
  })
}

if(naoTemAgenda) {

  naoTemAgenda.addEventListener("input", () => {
    agendaHidden.hidden = true
  })
}

