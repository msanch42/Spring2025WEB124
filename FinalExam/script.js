//Monica Sanchez 5-1-25
//Created JavaScript functions to calculate given number
function doAddition(num){
  let result = "";
  for (let i = 1; i <= 10; i++) {
      result += `${num} + ${i} = ${num + i}<br>`;
  }
  document.getElementById("addition").innerHTML = result; 
}

function doSubtraction(num){
  let result = "";
  let i = 1;
  while (i <= 10) {
      result += `${num} - ${i} = ${num - i}<br>`;
      i++;
  } 
  document.getElementById("subtraction").innerHTML = result; 
}

function doMultiplication(num){
  let result = "";
  let i = 1;
  do {
      result += `${num} * ${i} = ${num * i}<br>`;
      i++;
  } while(i <= 10);
  document.getElementById("multiplication").innerHTML = result; 
}

function doDivision(num){
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} / ${i} = ${(num / i).toFixed(2)}<br>` //return only two digits to the right of the decimal point in the division function
  }
  document.getElementById("division").innerHTML = result; 
}

function calculateAll() {
  const num = parseFloat(document.getElementById("num").value);
  if(!isNan(num)) {
    doAddition(num);
    doSubtraction(num);
    doMultiplication(num);
    doDivision(num);
  } else {
    alert("PLEASE ENTER A VALID NUMBER!");
  }
}

document.getElementById("calculate").addEventListener("click", calculateAll);
