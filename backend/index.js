const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/restaurants/:zip', (req, res) => {

    console.log(req.params.name)
    let zip = req.params.zip;
    const headers = { headers: { 'Authorization': 'Bearer '+process.env.YELP_KEY}}

    axios.get('https://api.yelp.com/v3/businesses/search?term=restaurants&location='+zip, headers)
    .then(function (response) {
        console.log(response);
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })
})

app.listen(port,()=>{
    console.log('API is up and running')
})

module.exports = app;