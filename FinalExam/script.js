//Monica Sanchez 5-1-25
//Created JavaScript functions to calculate given number
function calculateAddition(num){
  let result = '';
  for (let i = 1; i <= 10; i++) {
      result += `${num} + ${i} = ${num + i}\n`; //Using the \n special character so that the line breaks are displayed since I am using <p> tags
  }
  document.getElementById('addition').innerHTML = result; 
}

function calculateSubtraction(num){
  let result = '';
  let i = 1;
  while (i <= 10) {
      result += `${num} - ${i} = ${num - i}\n`;
      i++;
  } 
  document.getElementById('subtraction').innerHTML = result; 
}

function calculateMultiplication(num){
  let result = '';
  let i = 1;
  do {
      result += `${num} * ${i} = ${num * i}\n`;
      i++;
  } while(i <= 10);
  document.getElementById('multiplication').innerHTML = result; 
}

function calculateDivision(num){
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${num} / ${i} = ${(num / i).toFixed(2)}\n`; //return only two digits to the right of the decimal point in the division function
  }
  document.getElementById('division').innerHTML = result; 
}

function calculateAll() {
  const num = parseFloat(document.getElementById('num').value);
  if(!isNaN(num)) {
    calculateAddition(num);
    calculateSubtraction(num);
    calculateMultiplication(num);
    calculateDivision(num);
  } else {
    alert("PLEASE ENTER A VALID NUMBER!");
  }
}

document.getElementById('calculate').addEventListener('click', calculateAll);

