let buttonClick = document.querySelector('button');

const event = new CustomEvent('click');

// buttonClick.dispatchEvent(event);

buttonClick.addEventListener(
  'click',
  function (e) {
    console.log('hello', e);
  },
  false
);

/**
 * Hoisting kicks in and the value of sayHello is declared as undefined so, sayHello() will throw an error as it not a function
 */
sayHi();

function sayHi() {
  console.log('Hi');
}

// sayHello();

var sayHello = function () {
  console.log('Hello');
};

let countNotes = (amount) => {
  switch (amount) {
    case amount / 100:
      return amount;
    default:
      console.log('something went wrong the previous case!');
      return null;
  }
};
console.log({ val: countNotes(1330) });

function update(a) {
  return (a = a / 2);
}

function a() {
  let a = 14;
  let val = update(14);
  console.log({ a, val });
}

a();
