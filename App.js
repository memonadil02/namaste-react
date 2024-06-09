import React from "react";
import  ReactDOM  from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", xyz: "adil memon" }, [
    React.createElement("h1", {}, "namste react"),
    React.createElement("h2", {}, "i am an h2"),
  ]),
  React.createElement("div", { id: "child2", xyz: "adil memon" }, [
    React.createElement("h1", {}, "kya bolte pasha "),
    React.createElement("h2", {}, "aaj kamayenga to kal khayenga aa meri jaan"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
