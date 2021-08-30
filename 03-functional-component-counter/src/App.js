import $ from './elements.js';

import { useStore } from './store.js';

export default function App() {
  const [state, dispatch] = useStore();

  const { count } = state;

  const handleClickPlus = () => {
    dispatch({ type: 'plus' });
  };

  const handleClickMinus = () => {
    dispatch({ type: 'minus' });
  };

  return (
    $.div({}, [
      $.h1({}, ['Simple Counter']),
      $.p({}, [count]),
      $.p({}, [
        $.button({ onClick: handleClickPlus }, ['plus']),
        $.button({ onClick: handleClickMinus }, ['minus']),
      ]),
    ])
  );
}
