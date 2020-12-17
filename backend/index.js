const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

const zipcode = 75080;
const distance = 50;

app.get('/api/zipcodes',(req,res)=>{

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