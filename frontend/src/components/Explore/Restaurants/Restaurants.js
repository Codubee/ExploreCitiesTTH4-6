import React from "react";
import "./Restaurants.css";
import axios from "axios";
import { withRouter } from "react-router";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	CardSubtitle,
	Button,
} from "reactstrap";

class Restaurants extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zip: this.props.match.params.zip,
			restaurants: [],
		};
	}

	componentDidMount() {
		axios
			.get("/restaurants/" + this.state.zip)
			.then((response) => {
				this.setState({
					restaurants: response.data.businesses,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		return (
			// 	<div>
			// 		{this.state.restaurants.map((restaurant) => (
			// 			<div key={restaurant.id}>
			// 				<img
			// 					src={restaurant.image_url}
			// 					alt=""
			// 					width="30%"
			// 					height="auto"
			// 				/>
			// 				{/* <div>{restaurant.name}</div> */}
			// 			</div>
			// 		))}
			// 		{/* {this.state.restaurants.map((restaurant) => (
			// 			<div key={restaurant.id}>
			// 				<img src={restaurant.image_url} alt="" />
			// 			</div>;
			// ))} */}
			// 	</div>

			<div className="card-container">
				{this.state.restaurants.map((restaurant) => (
					<div key={restaurant.id}>
						<Card className="restaurant">
							<CardImg
								src=""
								alt="restaurant image"
								width="auto"
								height="auto"
							/>
							<CardBody>
								<CardTitle tag="h5">
									{restaurant.name}
								</CardTitle>
								<CardSubtitle
									tag="h6"
									className="mb-2 text-muted"
								>
									{restaurant.location.display_address}
								</CardSubtitle>
								<CardText>{restaurant.display_phone}</CardText>
								<Button
									color="danger"
									href={restaurant.url}
									target="_blank"
								>
									Yelp
								</Button>
							</CardBody>
						</Card>
					</div>
				))}
			</div>
		);
	}
}

export default withRouter(Restaurants);
