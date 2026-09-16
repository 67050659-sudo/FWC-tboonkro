const jsAddition = document.getElementById('addition');
const jsSubtract = document.getElementById('subtract');
const jsMultiply = document.getElementById('multiply');
const jsDivide = document.getElementById('divide');
const jsPercent = document.getElementById('percent');

const inputBoxes = document.querySelectorAll('.box input');
const submitButton = document.getElementById('submit');


let currentOperator = '+';

jsAddition.addEventListener('click', () => { currentOperator = '+'; });
jsSubtract.addEventListener('click', () => { currentOperator = '-'; });
jsMultiply.addEventListener('click', () => { currentOperator = '*'; });
jsDivide.addEventListener('click', () => { currentOperator = '/'; });
jsPercent.addEventListener('click', () => { currentOperator = '%'; });

submitButton.addEventListener('click', function() {
    const num1 = Number(inputBoxes[0].value);
    const num2 = Number(inputBoxes[1].value);
    let result;

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        alert('Error :(');
        return;
    }

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "It's over 9000!";
            break;
        case '%':
            result = num2 !== 0 ? num1 % num2 : "It's over 9000!";
            break;
    }
    console.log('Result: ', result)
    alert('Result: ' + result);




});

let time = 30;
const afkTimer = setInterval(function(){

    if (time <= 0){
        clearInterval(afkTimer);
        alert('Please, use me...')
        time = 30;
    }   
    time--;
}, 1000);