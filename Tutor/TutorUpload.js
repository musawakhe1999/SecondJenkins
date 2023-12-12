const form = document.getElementById('form');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const mathematics = document.getElementById('mathematics');
const physics = document.getElementById('physics');
const accounting = document.getElementById('accounting');




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidnameInput = nameInput => {
    var red = /^[A-za-z]+$/;
    return red.test(nameInput);
}

const isValidEmail = emailInput => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
}

const validateInputs = () => {
    const nameInputValue = nameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const mathematicsValue = mathematics.value.trim();
    const physicsValue = physics.value.trim();
    const accountingValue = accounting.value.trim();

    if(nameInputValue === '') {
        setError(nameInput, 'First Name is required');
    } else if (!isValidnameInput(nameInputValue)) {
        setError(nameInput, 'Please enter characters only');
    } else {
        setSuccess(nameInput);
    }
    
    if(emailInputValue === '') {
        setError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInputValue)) {
        setError(emailInput, 'Provide a valid email address');
    } else {
        setSuccess(emailInput);
    }

    if(mathematicsValue === '') {
        setError(mathematics, 'Mathematics student marks are required');
    } else {
        setSuccess(mathematics);
    }
    
    if(physicsValue === '') {
        setError(physics, 'Physics student marks are required');
    } else {
        setSuccess(physics);
    }

    if(accountingValue === '') {
        setError(accounting, 'Accounting student marks are required');
    } else {
        setSuccess(accounting);
    }
   

};
