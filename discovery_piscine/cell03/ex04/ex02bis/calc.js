const $jsAddition = $('#addition');
const $jsSubtract = $('#subtract');
const $jsMultiply = $('#multiply');
const $jsDivide = $('#divide');
const $jsPercent = $('#percent');

const $inputBoxes = $('.box input');
const $submitButton = $('#submit');

let currentOperator = '+';

$jsAddition.on('click', () => { currentOperator = '+'; });
$jsSubtract.on('click', () => { currentOperator = '-'; });
$jsMultiply.on('click', () => { currentOperator = '*'; });
$jsDivide.on('click', () => { currentOperator = '/'; });
$jsPercent.on('click', () => { currentOperator = '%'; });

$submitButton.on('click', function() {
    const num1 = Number($inputBoxes.eq(0).val());
    const num2 = Number($inputBoxes.eq(1).val());
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
    console.log('Result: ', result);
    alert('Result: ' + result);
});

let time = 30;
const afkTimer = setInterval(function(){
    if (time <= 0){
        clearInterval(afkTimer);
        alert('Please, use me...');
        time = 30;
    }   
    time--;
}, 1000);