import React from "react";
import Quote from "./components/Quote.js";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="primary-heading"> Quote App </h1>
				<Quote />
			</div>
		);
	}
}

export default App;
