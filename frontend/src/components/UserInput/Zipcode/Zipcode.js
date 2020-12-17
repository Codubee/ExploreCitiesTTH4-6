import React from 'react'
import "./Zipcode.css"
//import { Form, Input, Button } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Jumbotron } from 'reactstrap'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

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

   /* handleSubmit(event) {
        this.setState({zipcode: event.target.value});
        return () => {
            <div className="break">
                    <h2>Zipcode entered is: {this.state.zipcode} </h2>
                </div>
        };
    }*/

    /*handleSubmit(event) {
        var zipcode = this.state.zipcode;
        sessionStorage.setItem("zipcode", zipcode);

        var distance = this.state.distance;
        sessionStorage.setItem("distance", distance);
    }*/

    handleSubmit(event) {
        const express = require('express');
        const app = express();
        const axios = require('axios');
        require('dotenv').config();
        app.use(express.json())

        const port = 8080;

        const zipcode = 75080;
        const distance = 50;
        app.get('/api/zipcodes',(req,res)=>{
            //res.send('Hello world');
        
            const headers = {headers: {authorization: process.env.API_KEY}}
        
            axios.get('https://www.zipcodeapi.com/rest/radius.json/'+zipcode+'/'+distance+'/km')
            .then((response) => {
                console.log(response)
                res.status(200).json(response.data)
            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({error: "An error occured with the zipcode API"})
            })
        })

        app.listen(port,()=>{
            console.log('Zipcode API is up and running')
        })
        
        module.exports = app;
    }

    render() {
        return(
            <Jumbotron className="container">
                <form className="form" noValidate autoComplete="off">
                    <label><h2>Enter your zip code:&nbsp;</h2></label>
                    <TextField id="outlined-basic" className={useStyles.margin} label="Zip code" variant="outlined" size="small" onChange={this.handleZipcodeChange} value={this.state.zipcode} />
                    &nbsp;&nbsp; <br />
                    <label><h2>Enter how far you want to travel:&nbsp;</h2></label>
                    <TextField id="outlined-basic" className={useStyles.margin} label="Distance (in km)" variant="outlined" size="small" onChange={this.handleDistanceChange} value={this.state.distance} />
                    &nbsp;&nbsp;
                    <br />
                    <Button variant="contained" className={useStyles.margin} color="primary" size="medium" onClick={this.handleSubmit}>
                        Submit
                    </Button> 
                </form>
                <div className="break">
                    <h2>Zipcode entered is: {this.state.zipcode}, Distance entered is: {this.state.distance} </h2>
                </div>
            </Jumbotron>
        );
    }
}

export default Zipcode;