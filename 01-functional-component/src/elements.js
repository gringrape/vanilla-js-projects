function createElement(tag, props, children) {
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }

    element.appendChild(
      document.createTextNode(child),
    );
  });

  return element;
}

const factory = (tagName) => (...args) => createElement(tagName, ...args);

const elements = {
  h1: factory('h1'),
  div: factory('div'),
  button: factory('button'),
};

export default elements;
