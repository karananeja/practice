let buttonClick = document.querySelector('button');

const event = new CustomEvent('click');

// buttonClick.dispatchEvent(event);

buttonClick.addEventListener('click', function (e) {
  console.log('hello', e);
}, false);

