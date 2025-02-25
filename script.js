// Variable init
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function get_input() {
  // This is a separate function so value_check() can use return statements
  output.innerHTML = value_check(numberInput.value);
  if (output.style.color === "#f00") {
    output.style.color = "#ff0";
    output.style.paddingLeft = "100px"
    shake_offset(output, 5);
  }
}

function value_check(val) {
  let numberVal = parseInt(val);
  output.style.color = "#f00"; 
  if (val.toString() === "" || val%1 > 0) {
    // Checks if value is empty or contains a decimal
    shake_offset(output, 15);
    return `<p>Please enter a valid number</p>`;
  } else if (numberVal < 1) {
    shake_offset(output, 12);
    return `<p>Please enter a number greater than or equal to 1</p>`;
  } else if (numberVal > 3999) {
    shake_offset(output, 15);
    return `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
    output.style.color = "#000"; 
    const romanValues = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let roman = "";

    for (let key in romanValues) {
      // Checks if number is greater than the current key,
      // then adds the numberal and subtracts until it isn't
      while (numberVal >= romanValues[key]) {
        roman += key;
        numberVal -= romanValues[key];
      }
    }
    
    return roman;
  }
}

function shake_offset(element, amt=10, timer=0) {
  element.style.paddingLeft = `${Math.sin(timer*1)*amt}px`

  if (amt > 0) {
    amt -= 1;
    setTimeout(() => { shake_offset(element, amt, timer+1) }, 15);
  } else {
    element.style.color = "#000";
  }
}

convertBtn.addEventListener("click", get_input);