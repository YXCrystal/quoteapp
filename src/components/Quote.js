import React from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../actions";
import "../App.css";

class Quote extends React.Component {
	componentDidMount() {
		this.props.fetchQuote();
	}

	newQuote = () => {
		this.props.fetchQuote();
	};

	render() {
		if (this.props.quote) {
			return (
				<div>
					<div className="quote-box">
						<p className="paragraph">{this.props.quote.text}</p>
						<p className="author">
							<em> - {this.props.quote.author || "Anonymous"} </em>
						</p>
					</div>
					<div className="buttons">
						<a
							onClick={() => {
								this.newQuote();
							}}
							className="buttons--new"
							href="#"
						>
							New quote
						</a>
					</div>
				</div>
			);
		} else {
			return <div className="loader"></div>;
		}
	}
}

const mapStateToProps = state => {
	return { quote: state.quote };
};
export default connect(mapStateToProps, { fetchQuote })(Quote);
