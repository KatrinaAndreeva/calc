document.querySelectorAll('.number')
.forEach( el => el.addEventListener('click', clickNumber));
document.querySelector('.operation').addEventListener('click', operation);
document.querySelector('.calc').addEventListener('click', calc);
const display = document.querySelector('.display');

function clickNumber(event) {
    display.value += event.target.innerHTML;
}

function operation() {
    display.value += '+';
}
function calc() {
    display.value = eval(display.value);
}


// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8


// 'use strict';

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   static createGuest() {
//     return new User("Гость", "Сайта");
//   }
// };

// let user = User.createGuest();

// alert( user.firstName ); // Гость

// alert( User.createGuest ); // createGuest ... (функция)