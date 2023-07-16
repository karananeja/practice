let buttonClick = document.querySelector('button');

const event = new CustomEvent('click');

// buttonClick.dispatchEvent(event);

buttonClick.addEventListener('click', function (e) {
  console.log('hello', e);
}, false);


/**
 * Hoisting kicks in and the value of sayHello is declared as undefined so, sayHello() will throw an error as it not a function
 */
sayHi();

function sayHi() {
  console.log('Hi');
}

sayHello();

var sayHello = function () {
  console.log('Hello');
};