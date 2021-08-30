import App from './App.js';

import store from './store.js';

const root = document.getElementById('root');

function update() {
  root.innerHTML = '';
  root.appendChild(
    App(),
  );
}

store.initiate({ update });

function main() {
  update();
}

main();
