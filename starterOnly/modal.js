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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((span) => span.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal
function closeModal () {
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

// Form validation function
function validate() {

}

// check email
function checkName() {
  var name = document.getElementById("first").value;

  if (name.length == 0) {
    nameError.innerHTML = "veuillez renseigner votre prénom";
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

}
function checkEmail() {}
function checkBirthdate() {}
function checkNbTournois() {}
function checkSelect() {}
function checkConditions() {}

