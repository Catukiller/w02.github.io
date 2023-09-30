function add(number1, number2) {
    return number1 + number2;
  }

  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }

  document.querySelector('#addNumbers').addEventListener('click', addNumbers);

  const subtract = function(number1, number2) {
    return number1 - number2;
  };

  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  const multiply = (factor1, factor2) => factor1 * factor2;

  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
 
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

  function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  const divideNumbers = function() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

  const currentDate = new Date();
  let currentYear;
  currentYear = currentDate.getFullYear();
  document.querySelector('#year').value = currentYear;

  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  document.querySelector('#array').innerHTML = numbersArray.join(', ');
  document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1).join(', ');
  document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', ');
  document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);

  document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(', ');
  const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
  document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
  

