const parent = React.createElement("div", { id: "parent"}, [
  React.createElement("div", { id: "child", xyz: "adil memon" }, [
    React.createElement("h1", {}, "i am an h1"),
    React.createElement("h2", {}, "i am an h2"),
  ]),
  React.createElement("div", { id: "child2", xyz: "adil memon" }, [
    React.createElement("h1", {}, "i am an h1"),
    React.createElement("h2", {}, "i am an h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
