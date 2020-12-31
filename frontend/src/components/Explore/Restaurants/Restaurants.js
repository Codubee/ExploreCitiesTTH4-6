import React from "react";
import "./Restaurants.css";
import axios from "axios";

class Restaurants extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zip: props.match.params.zip,
			restaurants: [],
		};
	}

	componentDidMount() {
		console.log(this.state.zip);
		axios
			.get("/restaurants/" + this.state.zip)
			.then((response) => {
				console.log(response);
				this.setState({
					restaurants: response.data.restaurants,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				{this.state.restaurants.map((restaurant) => (
					<div>{restaurant.name}</div>
				))}
			</div>
		);
	}
}

export default Restaurants;
