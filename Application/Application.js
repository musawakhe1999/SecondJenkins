const Form = document.getElementById('Form');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const IDNumber = document.getElementById('IDNumber');
const DateInput = document.getElementById('DateInput');
const GenderInput = document.getElementById('GenderInput');
const CurrentAddress = document.getElementById('CurrentAddress');
const PhoneNumber = document.getElementById('PhoneNumber');
const EmailAddress = document.getElementById('EmailAddress');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success')
}

const setSuccess = element => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
};

const isValidEmailAddress = EmailAddress => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(EmailAddress).toLowerCase());
}

const isValidPhoneNumber = PhoneNumber => {
    var regex =  /^(\+?27|0)[6-8][0-9]{8}$/;
    return regex.test(PhoneNumber);
}

const isValidIDNumber = IDNumber => {
    var reg = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
    return reg.test(IDNumber);
}

const isValidFirstName = FirstName => {
    var red = /^[A-za-z]+$/;
    return red.test(FirstName);
}

const isValidLastName = LastName => {
    var red = /^[A-za-z]+$/;
    return red.test(LastName);
}



const validateInputs = () => {
    const FirstNameValue = FirstName.value.trim();
    const LastNameValue = LastName.value.trim();
    const IDNumberValue = IDNumber.value.trim();
    const DateInputValue = DateInput.value.trim();
    const GenderInputValue = GenderInput.value
    const PhoneNumberValue = PhoneNumber.value.trim();
    const CurrentAddressValue = CurrentAddress.value.trim();
    const EmailAddressValue = EmailAddress.value.trim();

    


    if(FirstNameValue === '') {
        setError(FirstName, 'First Name is required');
    } else if (!isValidFirstName(FirstNameValue)) {
        setError(FirstName, 'Please enter characters only');
    } else {
        setSuccess(FirstName);
    }

    if(LastNameValue === '') {
        setError(LastName, 'Last Name is required');
    } else if (!isValidLastName(LastNameValue)) {
        setError(LastName, 'Please enter characters only');
    } else {
        setSuccess(LastName);
    }

    if(IDNumberValue === '') {
        setError(IDNumber, 'ID Number is required');
    } else if (!isValidIDNumber(IDNumberValue)) {
        setError(IDNumber, 'Please enter a valid ID Number');
    } else {
        setSuccess(IDNumber);
    }


    if (DateInputValue === '') {
        setError(DateInput, 'Select your date of birth');
    } else {
        setSuccess(DateInput)
    }

    if (GenderInputValue === '') {
        setError(GenderInput, 'Select your gender');
    } else {
        setSuccess(GenderInput)
    }

    if(PhoneNumberValue === '') {
        setError(PhoneNumber, 'Phone number is required');
    } else if (!isValidPhone(PhoneNumberValue)) {
        setError(PhoneNumber, 'Please enter a valid 10 digit mobile number');
    } else {
        setSuccess(PhoneNumber);
    }

    if(CurrentAddressValue === '') {
        setError(CurrentAddress, 'Current Address is required');
    } else {
        setSuccess(CurrentAddress);
    }

    
    if(EmailAddressValue === '') {
        setError(EmailAddress, 'Email is required');
    } else if (!isValidEmail(EmailAddressValue)) {
        setError(EmailAddress, 'Provide a valid email address');
    } else {
        setSuccess(EmailAddress);
    }



};


function validate(){
    var valid = false;

    if(document.getElementById('Mathematics').checked){
        valid = true;
    }
    else if(document.getElementById('Physics').checked){
        valid = true;
    }
    else if(document.getElementById('Accounting').checked){
        valid = true;
    }
    if(valid){
       alert("successful")
    }
    else {
        document.getElementById("disp").innerHTML
              = "Please select atleast one checkbox";
              return false;
    }
   
}

 
