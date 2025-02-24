// Variable init
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function get_input() {
  // This is a separate function so value_check() can use return statements
  output.innerHTML = value_check(numberInput.value);
}

function value_check(val) {
  let numberVal = parseInt(val);
  if (val.toString() === "" || val%1 > 0) {
    // Checks if value is empty or contains a decimal
    return `<p>Please enter a valid number</p>`;
  } else if (numberVal < 1) {
    return `<p>Please enter a number greater than or equal to 1</p>`;
  } else if (numberVal > 3999) {
    return `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
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

convertBtn.addEventListener("click", get_input);