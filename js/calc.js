document.querySelectorAll('.number')
.forEach( el => el.addEventListener('click', clickNumber));
document.querySelector('.minus').addEventListener('click', minus);
document.querySelector('.plus').addEventListener('click', plus);
document.querySelector('.multiply').addEventListener('click', multiply);
document.querySelector('.divide').addEventListener('click', divide);
document.querySelector('.dot').addEventListener('click', dot);
document.querySelector('.clr').addEventListener('click', clr);
document.querySelector('.calc').addEventListener('click', calc);
const display = document.querySelector('.display');

function clickNumber(event) {
    display.value += event.target.innerText;
}


function minus()  {
    display.value += '-';
}
function plus()  {
    display.value += '+';
}
function multiply()  {
    display.value += '*';
}
function divide()  {
    display.value += '/';
}
function dot()  {
    display.value += '.';
}
function clr() {
    display.value = "";

}


function calc() {
    display.value = eval(display.value);
}

