function createElement(tagName, attributes, children) {
  const element = document.createElement(tagName);

  Object.entries(attributes).forEach(([key, value]) => {
    if (typeof value === 'string') {
      element.setAttribute(key, value);
      return;
    }
    element[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild((
      document.createTextNode(child)
    ));
  });

  return element;
}

const getElement = (tagName) => (...args) => createElement(tagName, ...args);

const tags = [
  'h1', 'h2', 'div', 'li', 'ul', 'button', 'label', 'input', 'p',
];

const elements = Object.fromEntries(
  tags.map((tag) => [tag, getElement(tag)]),
);

export default elements;
