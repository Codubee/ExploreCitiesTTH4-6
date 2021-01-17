import React from "react";
import "./ThingsToDo.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import axios from "axios";
import { withRouter } from "react-router";

class ThingsToDo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			zip: this.props.match.params.zip,
			thingsToDo: [],
		};
    }

    componentDidMount() {
        axios.get(`/thingstodo/`+ this.state.zip)
        .then(res => {
            const thingsToDo = res.data.businesses;
            this.setState({ thingsToDo });
        })
    }
    render() {
        return (
        <div id="things-container">
            {this.state.thingsToDo.map(thingsToDo =>
            <Card className="things-card">
                <CardImg src={thingsToDo.image_url} alt="Card image cap" className="things-image"/>
                <CardBody>
                    <CardTitle tag="h3" className="things-title">{thingsToDo.name}</CardTitle>
                    <hr style={{margin: ".25rem"}}/>
                    <CardText className ="things-text">

                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>{" "}
                        {thingsToDo.location.display_address.join("\r\n")}<br/>

                        <div>
							{thingsToDo.display_phone === "" ?
								(null):
                                (<div><svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>{" "}
                                    {thingsToDo.display_phone}<br/>
                                    </div>)
                                }
                        </div>

                        {thingsToDo.rating}&#9733; ({thingsToDo.review_count})<br/>

                        {thingsToDo.categories[0].title}
                    </CardText>
                    <div class="mt-auto">
                        <Button color="danger" href={thingsToDo.url} rel="noreferrer" >Yelp</Button>
                    </div>
                </CardBody>
            </Card>
            )}
        </div>
        )
    }

}
export default withRouter(ThingsToDo);