'use strict';

const fieldConfigOptions = {
  input: {
    text: ['id', 'name', 'maxlength'],
    number: ['id', 'name', 'min', 'max']
  },
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




function getInputs(types) {
  const inputTypes = Object.keys(types);
  const inputs = [...document.querySelectorAll('input')].filter(item=>{
    return inputTypes.includes(item.type);
  });
  return inputs;
}





function getElements(list) {
  const elements = Object.keys(list);
  let myElements = [];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const domEls = (element === "input") ? getInputs(list.input) : document.querySelectorAll(element);
    
    myElements = [...myElements, ...domEls];
  }

  return myElements;
}





function checkFields(options) {
  const rules = {
    input: {
      text: checkTextField,
      number: checkNumberField,
    },
    textarea: checkTextaraField
  };
  const elements = getElements(options);
  console.log('>', elements);

  // TODO: Hasta aquí llega bien y hay que engancharlo con las reglas

  // for (let i = 0; i < elements.length; i++) {
  //   const element = elements[i];
  //   console.log(field);
  //   //rules[element.type](element, options);
  // }
}


checkFields(fieldConfigOptions);