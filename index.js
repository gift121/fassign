const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementsById('email');
const Password = document.getElementsById('password')

form.addEventListener('submit', e=> {
    
    e.preventDefault();

    validateInput();
});
const setError = (element, message) => {
    const inputControl = element.parentElements;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.InnerText = message;
    inputControl,classList.add('error');
    inputControl.classList.remove('success');
}

const validateInputs = ()=> {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fnameValue ==='null'||fname=="") {
        setError(fname, 'firstname cannot be empty');
    }
    else{
        setSuccess(fname,'firstname is valid');
    }
    if(lnameValue ===''){
        setError(lname, 'lastname cannot be empty');
    }
    else{
        setSuccess(lname, 'lastname is valid');
    }
    if (emailValue ==='') {
        setError(email, 'this is not an example of email');
    }
    else{
        setSuccess(email, 'email is valid');
    }
    if(passwordValue ==='') {
        setError(Password, 'password cannot be empty');
    }
    else{
        setSuccess(Password, 'password is valid');
    }
}
