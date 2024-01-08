function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const form = document.getElementById("resaForm");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((span) => span.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  ValidationMessage.innerHTML = "";
  form.style.display = "block";
  modalbg.style.display = "block";
}

// Close modal
function closeModal () {
  // Reset error messages
  nameError.innerHTML = "";
  lastNameError.innerHTML = "";
  emailError.innerHTML = "";
  birthdateError.innerHTML = "";
  nbTournoisError.innerHTML = "";
  selectError.innerHTML = "";
  conditionsError.innerHTML = "";
  form.reset();
  modalbg.style.display = "none";
}

// Form management
//  Form elements
var nameError = document.getElementById("prenom-error");
var lastNameError = document.getElementById("nom-error");
var emailError = document.getElementById("email-error");
var birthdateError = document.getElementById("birthdate-error");
var nbTournoisError = document.getElementById("nbtournois-error");
var selectError = document.getElementById("select-error");
var conditionsError = document.getElementById("conditions-error");
var ValidationMessage = document.getElementById("sucess");

// Forms checks
function checkName() {
  var name = document.getElementById("first").value;

  if (name==0) {
    nameError.innerHTML = "Ce champs est requis";
    return false;
  }
  if (name.length < 2 || name.length > 20) {
    nameError.innerHTML = "votre prénom doit compris entre 2 et 20 caracteres";
    return false;
  }
  if (name.match(/\d/)) {
    nameError.innerHTML = "Votre prénom ne doit pas contenir de chiffres";
    return false;
  }

  nameError.innerHTML = "";
  return true;
}
function checkLastName() {
  var name = document.getElementById("last").value;

  if (name==0) {
    lastNameError.innerHTML = "Ce champs est requis";
    return false;
  }
  if (name.length < 2 || name.length > 20) {
    lastNameError.innerHTML = "votre nom doit compris entre 2 et 20 caracteres";
    return false;
  }
  if (!name.match(/^[a-zA-Z ]+$/)) {
    lastNameError.innerHTML = "Votre nom ne doit pas contenir de chiffres ni de caracteres spéciaux";
    return false;
  }

  lastNameError.innerHTML = "";
  return true;
}
function checkEmail() {
  var email = document.getElementById("email").value;
  var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

  if (!email.match(emailRegEx)) {
    emailError.innerHTML = "Veuillez entrer un email conforme";
    return false;
  }
  if (email.length == 0) {
    emailError.innerHTML = "ce chanmps est requis";
    return false;
  }

  emailError.innerHTML = "";
  return true;
}
function checkBirthdate() {
  var birthdate = document.getElementById("birthdate").value;
  var birthdateRegEx = /^(?:19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!birthdate.match(birthdateRegEx)) {
    birthdateError.innerHTML = "Veuillez entrer un email conforme";
    return false;
  }
  if (birthdate.length == 0) {
    birthdateError.innerHTML = "ce chanmps est requis";
    return false;
  }

  birthdateError.innerHTML = "";
  return true;
}
function checkNbTournois() {
  var nbTournois = document.getElementById("quantity").value;
  var nbTournoisRegEx = /^[0-9]+$/;

  if (!nbTournois.match(nbTournoisRegEx)) {
    nbTournoisError.innerHTML = "Veuillez entrer un email conforme";
    return false;
  }
  if (nbTournois.length == 0) {
    nbTournoisError.innerHTML = "ce chanmps est requis";
    return false;
  }

  nbTournoisError.innerHTML = "";
  return true;
}
function checkSelect() {
  const radios = document.querySelectorAll('#resaForm input[type="radio"][name="location"]');
  const checkedRadios = Array.from(radios).filter(radio => radio.checked);

  if (checkedRadios.length > 0) {
    selectError.innerHTML = "";
    return true;
  } else {
    selectError.innerHTML = "Veuillez sélectionner un lieu";
    return false;
  }
}
function checkConditions() {
  const checkbox = document.getElementById("checkbox1");
  
  if (checkbox.checked) {
    conditionsError.innerHTML = "";
    return true;

  } else {
    conditionsError.innerHTML = "veuillez accepter les conditions d'utilisation";
    return false;
  }
}

// Validation function
function validate() {
  // Reset error messages
  nameError.innerHTML = "";
  lastNameError.innerHTML = "";
  emailError.innerHTML = "";
  birthdateError.innerHTML = "";
  nbTournoisError.innerHTML = "";
  selectError.innerHTML = "";
  conditionsError.innerHTML = "";

  // Run validation functions
  const isNameValid = checkName();
  const isLastNameValid = checkLastName();
  const isEmailValid = checkEmail();
  const isBirthdateValid = checkBirthdate();
  const isNbTournoisValid = checkNbTournois();
  const isSelectValid = checkSelect();
  const isConditionsValid = checkConditions();

  // Check if any validation failed
  if (!isNameValid || !isLastNameValid || !isEmailValid || !isBirthdateValid || !isNbTournoisValid || !isSelectValid || !isConditionsValid) {
    return false;
  }

  // Form submission is successful
  form.style.display = "none";
  ValidationMessage.innerHTML = "Merci ! Votre réservation a été reçue"; // You can customize this message
  return false;
}

// Submit prevent
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});