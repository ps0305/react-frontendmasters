const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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
