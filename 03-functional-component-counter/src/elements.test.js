import { getByText, fireEvent } from '@testing-library/dom';

import $ from './elements';

describe('createElement', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('text child', () => {
    const element = $.h1({}, ['Hello, World!']);

    document.body.appendChild(element);

    expect(document.body).toHaveTextContent('Hello, World!');
  });

  test('node child', () => {
    const element = $.h1({}, [
      $.h2({}, ['Hi, Hi']),
    ]);

    document.body.appendChild(element);

    expect(document.body).toHaveTextContent('Hi, Hi');
  });

  test('text attribute', () => {
    const element = $.button({ id: 'input-button' }, ['click']);

    document.body.appendChild(element);

    expect(getByText(element, 'click')).toHaveAttribute(
      'id',
      'input-button',
    );
  });

  test('function attribute', () => {
    const handleClick = jest.fn();

    const element = $.button({
      id: 'input-button',
      onClick: handleClick,
    }, ['click']);

    document.body.appendChild(element);

    fireEvent.click(getByText(element, 'click'));

    expect(handleClick).toBeCalled();
  });
});
