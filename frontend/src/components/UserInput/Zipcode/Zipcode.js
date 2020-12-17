import React from 'react'
import "./Zipcode.css"
import TextField from '@material-ui/core/TextField';
import { Jumbotron } from 'reactstrap'
import Button from '@material-ui/core/Button';

class Zipcode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            zipcode: null,
            distance: null
        };

        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleZipcodeChange(event) {
        this.setState({zipcode: event.target.value});
    }

    handleDistanceChange(event) {
        this.setState({distance: event.target.value});
    }

    handleSubmit(event) {
        //will make zipcode api call here and then route to another component
    }

    render() {
        return(
            <Jumbotron className="zipcode-container">
                <form className="zipcode-form" noValidate autoComplete="off">
                    <label><h2>Enter your zip code:&nbsp;</h2></label>
                    <TextField id="outlined-basic" label="Zip code" variant="outlined" size="small" onChange={this.handleZipcodeChange} value={this.state.zipcode} />
                    &nbsp;&nbsp; <br />
                    <label><h2>Enter how far you want to travel:&nbsp;</h2></label>
                    <TextField id="outlined-basic" label="Distance (in km)" variant="outlined" size="small" onChange={this.handleDistanceChange} value={this.state.distance} />
                    &nbsp;&nbsp;
                    <br />
                    <Button variant="contained" color="primary" size="medium" onClick={this.handleSubmit} >
                        Submit
                    </Button> 
                </form>
                <div className="zipcode-break">
                    <h2>Zipcode entered is: {this.state.zipcode}, Distance entered is: {this.state.distance} </h2>
                </div>
            </Jumbotron>
        );
    }
}

export default Zipcode;