const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

/*var zipcode = sessionStorage.getItem("zipcode");
console.log(zipcode);
var zipcode = sessionStorage.getItem("distance");
console.log(distance);*/

const zipcode = 75080;
const distance = 50;

app.get('/getZipcodes',(req,res)=>{
    //res.send('Hello world');

    const headers = {headers: {authorization: process.env.API_KEY}}

    axios.get('https://www.zipcodeapi.com/rest/radius.json/'+zipcode+'/'+distance+'/km')
    .then((response) => {
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error: "An error occured"})
    })
})

app.listen(port,()=>{
    console.log('API is up and running')

})

module.exports = app;