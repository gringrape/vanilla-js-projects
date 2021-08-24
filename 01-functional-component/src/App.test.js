import {
  fireEvent,
  getByText,
  getByLabelText,
} from '@testing-library/dom';

import App from './App';

jest.mock('./index.js', () => ({
  update: () => {},
}));

jest.mock('./services.js', () => ({
  addTask: () => {},
  useSelector: (selector) => selector({
    tasks: [{ id: 1, title: '밥 먹기', complete: false }],
  }),
}));

describe('App', () => {
  function renderApp() {
    const app = App();

    document.body.appendChild(app);

    return app;
  }

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders title', () => {
    const app = renderApp();

    expect(app).toHaveTextContent('Todo list');
  });

  it('add todo', () => {
    const app = renderApp();

    fireEvent.change(getByLabelText(app, '할 일'), {
      target: { value: '밥 먹기' },
    });

    fireEvent.click(getByText(app, '등록'));

    expect(app).toHaveTextContent('밥 먹기');
  });
});
