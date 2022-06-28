
function showError(errorElement, errorMessage){
  document.querySelector("."+errorElement).classList.add("display-error");
  document.querySelector("."+errorElement).innerHTML = errorMessage;
}
function clearError(){
  let errors = document.querySelectorAll(".error");
  for(let error of errors){
    error.classList.remove("display-error");
  }
}
let form = document.forms['submit-form'];
form.onsubmit = function(event){

  clearError();

  if (form.fname.value === ""){
       showError("fname-error", "First Name cannot be empty");
       returnFalse;
  }
  if (form.lname.value === ""){
    showError("lname-error", "Last Name cannot be empty");
    returnFalse;
  }
 if (form.email.value === ""){
  showError("email-error", "Looks like this is not an email");
  returnFalse;
 }
 if (form.password.value === ""){
  showError("password-error", "password cannot be empty");
  returnFalse;
 }
 document.querySelector(".success").classList.add("display-success");
 document.querySelector(".success").innerHTML = "your registration was sucessful"
  event.preventDefault();
}