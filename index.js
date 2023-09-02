//to show something on the caculator screen
function addToDisplay(value) {
  const display = document.querySelector('.equation');
  display.value += value;
}

//to clear the display
function clearDisplay() {
  const display = document.querySelector(".equation");
  display.value = '';
}

//calculate
function calculate() {
  const display = document.querySelector('.solution');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


function percentage() {
  const display = document.querySelector('.solution');
  display.value = display.value / 100;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === 'C') {
      clearDisplay();
    } else if (button.textContent === '=') {
      calculate();
    } else if(button.textContent === '%'){
      percentage();
    }
    else {
      addToDisplay(button.textContent);
    }
  });
});

// function displayResult() {
//   const result = document.querySelector('.solution')
//   display.value
// }
 //write a funtion that displays the result


