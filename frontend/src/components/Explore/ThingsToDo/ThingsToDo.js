import React from "react";
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
        //axios.get(`/thingstodo/`+ 75040)
        axios.get(`/thingstodo/`+ this.state.zip)
        .then(res => {
            const thingsToDo = res.data.businesses;
            this.setState({ thingsToDo });
        })
    }
    
    render() {
        return (
        <div>
            { this.state.thingsToDo.map(thingsToDo => <div>{thingsToDo.name}</div>)}
        </div>
        )
    }
}
export default withRouter(ThingsToDo);
