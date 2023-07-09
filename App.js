import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", { id: "parent"}, [
	React.createElement("div", {id: "child"}, [
		React.createElement("h1", {}, "This is Namste React 🚀 😆"),
		React.createElement("h2", {}, "By Prateek Pandey"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "I am h1 tag"),
		React.createElement("h2", {}, "I am h2 tag"),
	]),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)  