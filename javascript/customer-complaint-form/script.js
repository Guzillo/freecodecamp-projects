const form = document.getElementById('form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNoInput = document.getElementById('order-no');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');
const complaintsGroupCheckboxes = document.getElementById('complaints-group');
const complaintDescriptionInput = document.getElementById('complaint-description');
const solutionsGroupRadioButtons = document.getElementById('solutions-group');
const solutionDescriptionInput = document.getElementById('solution-description');
const otherCheckbox = document.getElementById('other-complaint');
const otherRadioButton = document.getElementById('other-solution');
const submitButton = document.getElementById('submit-btn');

const validateFullName = () => /(.|\s)*\S(.|\s)*/.test(fullNameInput.value);
const validateEmail = () => /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(emailInput.value);
const validateOrderNo = () => /^2024\d{6}$/.test(orderNoInput.value);
const validateProductCode = () => /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCodeInput.value);
const validateQuantity = () =>  /^[1-9]\d*$/.test(quantityInput.value);

function validateComplaintsGroupCheckboxes() {
  const checkboxes = complaintsGroupCheckboxes.querySelectorAll('input[type="checkbox"]');
  const checkboxesArray = Array.from(checkboxes);
  for(const element of checkboxesArray) {
    if(element.checked) {
      return true;
    }
  }
  return false;
}

function validateComplaintDescription() {
  if(otherCheckbox.checked) {
    return complaintDescriptionInput.value.length >= 20 ? true : false;   
  }
  return true;
}

function validateSolutionGroupRadioButtons() {
  let isChecked = false;
  let radioButtons = solutionsGroupRadioButtons.querySelectorAll('input[type="radio"]');
  radioButtons = Array.from(radioButtons);
  radioButtons.forEach( (item)=> {
    if(item.checked){
      isChecked = true;
    }
  });
  return isChecked;
}

function validateSolutionDescription() {
  if(otherRadioButton.checked) {
    if(solutionDescriptionInput.value.length > 20){
      return true;
    }else {
      return false;
    }
  }
  return true;
}

function validateForm() {
  return {
    'full-name': validateFullName(),
    'email': validateEmail(),
    'order-no': validateOrderNo(),
    'product-code': validateProductCode(),
    'quantity': validateQuantity(),
    'complaints-group': validateComplaintsGroupCheckboxes(),
    'complaint-description': validateComplaintDescription(),
    'solutions-group' : validateSolutionGroupRadioButtons(),
    'solution-description': validateSolutionDescription(),
  }
}

function isValid(formResults) {
  for(const prop in formResults) {
    if(!formResults[prop]) {
      return false;
    }
  }
  return true;
}

form.addEventListener('change', (e)=> {
      const validObj = validateForm();
      const eventElement = document.getElementById(e.target.id);
      if(eventElement.type === 'checkbox') {
        complaintsGroupCheckboxes.style.borderColor =  validObj['complaints-group']? 'green' : 'red';
        return;
      }
      if(eventElement.type === 'radio') {
        solutionsGroupRadioButtons.style.borderColor = validObj['solutions-group'] ? 'green' : 'red';
        return;
      }
      eventElement.style.borderColor = validObj[eventElement.id] ? 'green' : 'red';

})

form.addEventListener('submit', (e)=> {
    e.preventDefault();
  if(isValid(validateForm())) {
    console.log('form submitted')
  }else {
    console.log('form declined')
  }
 
  
})
  