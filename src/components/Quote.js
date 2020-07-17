import React from "react";
import "../App.css";

class Quote extends React.Component {
	render() {
		return (
			<div class="quote-box">
				<p class="paragraph">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
					nostrum inventore architecto doloribus aliquid eligendi cumque quibusdam
					odit sapiente quasi asperiores expedita voluptatibus autem, tenetur vitae
					rem reiciendis excepturi.
				</p>
				<p class="author">
					<em> - John Doe </em>
				</p>
			</div>
		);
	}
}

export default Quote;
