import React from "react";
import "./Restaurants.css";
import axios from "axios";
import { withRouter } from "react-router";
// import dummy from "./dummy_restaurants.json";

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
			.get(`/restaurants/${this.state.zip}`)
			.then((response) => {
				this.setState({
					restaurants: response.data.businesses.sort(
						(a, b) => parseInt(a.distance) - parseInt(b.distance)
					),
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		const restaurantItems = this.state.restaurants.map((restaurant) => (
			<div key={restaurant.id} className="restaurant">
				<div className="image-div">
					<img
						src={restaurant.image_url}
						alt="restaurant"
						style={{
							width: "100%",
							"border-radius": "10px",
							"align-items": "center",
						}}
					/>
				</div>

				<div className="text-div">
					{/* displays restaurant name */}
					<h3 className="font-weight-bold">{restaurant.name}</h3>
					<hr
						style={{
							margin: ".25rem",
						}}
					/>

					<div className="description">
						{/* displays address */}
						<div>
							{/* Bootstrap icon for location */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-geo-alt-fill"
								viewBox="0 0 16 16"
							>
								<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
							</svg>{" "}
							{restaurant.location.display_address.join(" ")}
						</div>

						{/* displays phone number */}
						<div>
							{/* Bootstrap icon for telephone */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-telephone-fill"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
								/>
							</svg>{" "}
							{restaurant.display_phone}
						</div>

						{/* displays available transaction methods */}
						<div>
							{restaurant.transactions.map((transaction) => {
								if (transaction === "delivery") {
									return (
										<>
											<i class="fas fa-check"></i>{" "}
											Delivery{" "}
										</>
									);
								} else if (transaction === "pickup") {
									return (
										<>
											<i class="bi bi-check2"></i> Pickup
										</>
									);
								} else if (
									transaction === "restaurant_reservation"
								) {
									return <>&#x2705; Reservation</>;
								}
							})}
						</div>

						{/* displays rating and review count */}
						<div>
							{parseInt(restaurant.review_count) > 0 && (
								<>
									{restaurant.rating}&#9733; (
									{restaurant.review_count})
								</>
							)}
						</div>

						{/* displays restaurant categories */}
						<div>
							{restaurant.categories.map((category) => {
								return <>{category["title"]} </>;
							})}
						</div>

						{/* Yelp button */}
						<a
							className="btn btn-danger"
							href={restaurant.url}
							target="_blank"
							rel="noreferrer"
						>
							Yelp
						</a>
					</div>
				</div>
			</div>
		));

		return <div className="restaurants container">{restaurantItems}</div>;
	}
}

export default withRouter(Restaurants);
