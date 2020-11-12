'use strict';

const fieldChecks = {
  text: ['id', 'name', 'maxlength'],
  number: ['id', 'name', 'min', 'max'],
  textarea: ['id', 'name', 'maxlength']
}; 

function checkFieldAttribute(field, attr) {
  const check = !(!field.hasAttribute(attr) || field.getAttribute(attr) === '');
  
  console.log(attr, check);
  
  !check && field.classList.add('check--error');
}

function checkTextField(field, option) {
  const textOptions = option.text;
  for (let i=0; i<textOptions.length; i++) {
    const attr = textOptions[i];
    checkFieldAttribute(field, attr);
  }
}

function checkNumberField(options) {
  console.log('2', options.number);
}

function checkTextaraField(options) {
  console.log('3', options.textarea);
}

function checkFields(options) {
  const rules = {
    text: checkTextField,
    number: checkNumberField,
    textarea: checkTextaraField
  };
  const inputs = document.querySelectorAll('input');
  const textarea = document.querySelectorAll('textarea');

  const fields = [...inputs, ...textarea];

  console.log('>', fields.length); // 6

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    console.log(field.type);
    rules[fields[i].type](field, options);
  }
}


checkFields(fieldChecks);