import React from 'react'
import "./Zipcode.css"
import TextField from '@material-ui/core/TextField';
import { Jumbotron } from 'reactstrap'
import Cities from '../Cities/Cities'
import Button from '@material-ui/core/Button';
const axios = require("axios");


class Zipcode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            zipcode: null,
            distance: null,
            zipData:{},
            key:0
        };

        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.updateKey = this.updateKey.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleZipcodeChange(event) {
        this.setState({ zipcode: event.target.value });
    }

    handleDistanceChange(event) {
        this.setState({ distance: event.target.value });
    }

    updateKey()
    {
        let change =  Math.round(Math.random()*1000) // gets a random number
        while(change === this.state.key) // keeps generating a random number until it is different from the current key
        {
            change =  Math.round(Math.random()*1000)
        }
        this.setState({key:change}) // updates key
    }

    handleSubmit() {
        axios.get('/api/zipcodes/?zipcode='+this.state.zipcode+'&distance='+this.state.distance ) //calls zipcode api
        .then((response)=>{ // stores response in state and updates key
            console.log(response)
            this.setState({zipData:response.data})
            this.updateKey()
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render() {

        return (
            <Jumbotron className="container zipcode-container">
                <form className="zipcode-form" noValidate autoComplete="off">
                    <label>
                        <h2 className="pr-2">Enter your zip code:</h2>
                    </label>
                    <TextField id="outlined-basic" label="Zip code" variant="outlined" size="small" onChange={this.handleZipcodeChange} value={this.state.zipcode} />
                    <br />
                    <label>
                        <h2 className="pr-2">Enter how far you want to travel:</h2>
                    </label>
                    <TextField id="outlined-basic" label="Distance (in miles)" variant="outlined" size="small" onChange={this.handleDistanceChange} value={this.state.distance} />
                    <br />
                    <Button variant="contained" color="primary" size="medium" onClick={this.handleSubmit} >
                        Submit
                    </Button>
                </form>
                <div className="zipcode-break"></div>
                <Cities data = {this.state.zipData} key = {this.state.key}/> {/*assigns a key which is updated when props change to force remount*/}
            </Jumbotron>
        );
    }
}

export default Zipcode;