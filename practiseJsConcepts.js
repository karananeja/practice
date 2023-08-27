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
  const notes = {};

  while (amount !== 0) {
    if (amount >= 1000) {
      amount -= 1000;
      notes[1000] ? ++notes[1000] : notes[1000] = 1;
    } else if (amount >= 500) {
      amount -= 500;
      notes[500] ? ++notes[500] : notes[500] = 1;
    } else if (amount >= 100) {
      amount -= 100;
      notes[100] ? ++notes[100] : notes[100] = 1;
    } else if (amount >= 50) {
      amount -= 50;
      notes[50] ? ++notes[50] : notes[50] = 1;
    } else if (amount >= 20) {
      amount -= 20;
      notes[20] ? ++notes[20] : notes[20] = 1;
    } else if (amount >= 10) {
      amount -= 10;
      notes[10] ? ++notes[10] : notes[10] = 1;
    }
  }

  return notes;
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
