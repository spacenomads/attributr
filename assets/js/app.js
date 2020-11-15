'use strict';

const fieldConfigOptions = {
  input: {
    text: ['id', 'name', 'maxlength'],
    number: ['id', 'name', 'min', 'max']
  },
  textarea: ['id', 'name', 'maxlength']
}; 

function checkElementAttribute(element, attr) {
  const check = !(!element.hasAttribute(attr) || element.getAttribute(attr) === '');
  
  console.log(attr, check);
  
  !check && element.classList.add('check--error');
}

function checkTextField(field, option) {
  const textOptions = option.text;
  for (let i=0; i<textOptions.length; i++) {
    console.log("1", i);  
    const attr = textOptions[i];
    checkElementAttribute(field, attr);
  }
}

function checkNumberField(element, option) {
  console.log('2', option.number);
}

function checkTextaraField(element, option) {
  console.log('3', option);
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

  // TODO: Hasta aquí llega bien y hay que engancharlo con las reglas

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const tag = element.tagName.toLowerCase();
    const isInput = (tag === 'input');
    isInput ? rules.input[element.type](element, options.input) : rules[tag](element, options.textarea);
  }
}


checkFields(fieldConfigOptions);


/* 
  TODO:
  
  - ids duplicados
  - img sin alt
  - label sin for
  - input sin label

*/