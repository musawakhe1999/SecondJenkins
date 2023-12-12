

const form = document.getElementById('form');
  const Name = document.getElementById('Name');
  const Email = document.getElementById('Email');
  const Message = document.getElementById('Message');
  
  
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

const isValidEmail = Email =>{
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(Email).toLowerCase());
  }
  
  const isValidName = Name => {
      var red = /^[A-za-z]+$/;
      return red.test(Name);
  }
  
  
  const isValidMessage = Message => {
      var red = /^[A-za-z]+$/;
      return red.test(Message);
  }
  
  
  
  
  
  
  const validateInputs = () => {
      const NameValue = Name.value.trim();
      const EmailValue = Email.value.trim();
      const MessageValue = Message.value.trim();
  

    
  
      if(NameValue === '') {
          setError(Name, 'First Name is required');
    
      } else if (!isValidName(NameValue)) {
          setError(Name, 'Please enter characters only');
     
      } else {
          setSuccess(Name);
      }
  
    
      
      if(EmailValue === '') {
          setError(Email, 'Email is required');
       
      } else if (!isValidEmail(EmailValue)) {
          setError(Email, 'Provide a valid email address');
       
      } else {
          setSuccess(Email);
      }
  
      if(MessageValue === '') {
          setError(Message, 'Message is required');
        
      }  else {
          setSuccess(Message);
      }
      return valid;
  
  
  
  };
  
  
  

  

   