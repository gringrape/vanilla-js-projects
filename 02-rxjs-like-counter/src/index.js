import { fromEvent } from './rx.js';

const root = document.getElementById('root');

const element = document.createElement('div');

let number = 50;
const plusNumber = () => {
  number += 1;
};

const view = () => `
  <h1>Counter</h1>
  <input id="simple-input" />
  <p>${number}</p>
  <p>
    <button id="plus-button">plus</button>
    <button>minus</button>
  </p>
  `;

function bind({ update }) {
  const button = document.getElementById('plus-button');
  const input = document.getElementById('simple-input');

  const clicks = fromEvent(button, 'click');
  const inputs = fromEvent(input, 'input');

  clicks.subscribe(() => {
    plusNumber();
    update();
  });

  inputs
    .map(({ target: { value } }) => value)
    .subscribe((value) => {
      console.log(value);
    });
}

const update = () => {
  element.innerHTML = '';
  element.innerHTML = view();
  bind({ update });
};

root.appendChild(element);

update();
