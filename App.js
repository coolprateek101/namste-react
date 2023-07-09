import React from "react";
import ReactDOM from "react-dom/client";

let TitleComponent = () => (
	<h1>This is Namste React 🚀</h1>
)

let HeadingComponent = () => (
	<div>
		<TitleComponent />
		<h1 id="headingComponent">This is HeadingComponent 😆</h1>
	</div>
)

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)