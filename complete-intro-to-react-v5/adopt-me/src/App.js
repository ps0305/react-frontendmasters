import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me !"),
    [
      React.createElement(Pet, {
        name: "rusty",
        animal: "dog",
        breed: "havnese"
      }),
      React.createElement(Pet, {
        name: "ketty",
        animal: "cat",
        breed: "mixed"
      }),
      React.createElement(Pet, {
        name: "tile",
        animal: "bird",
        breed: "sparrow"
      })
    ]
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
