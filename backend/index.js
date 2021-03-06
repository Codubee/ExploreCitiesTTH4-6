const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();
app.use(express.json());

const port = process.env.PORT || 8080;

const log = (req, _, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};

app.use(log);

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.get('/api/zipcodes/',(req,res)=>{

    zipcode = req.query.zipcode;
    distance = req.query.distance;
    console.log(zipcode);
    console.log(distance);

    const headers = { headers: { 'Authorization': 'Bearer ' + process.env.ZIPCODE_KEY}}

    axios.get('https://www.zipcodeapi.com/rest/radius.json/'+zipcode+'/'+distance+'/mile', headers)
    .then((response) => {
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error: "An error occured with the zipcode API"})
    })
})

app.get('/restaurants/:zip', (req, res) => {

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

app.get('/thingstodo/:zip', (req, res) => {

    console.log(req.params.name)
    let zip = req.params.zip;
    const headers = { headers: { 'Authorization': 'Bearer '+process.env.YELP_KEY}}

    axios.get('https://api.yelp.com/v3/businesses/search?term=things%20to%20do&location='+zip, headers)
    .then(function (response) {
        console.log(response);
        res.status(200).json(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })
})

app.get("/api/weather/", (req, res) => {
  postal_code = req.query.postal_code;
  console.log(postal_code);
  axios
    .get("https://api.weatherbit.io/v2.0/current", {
      params: {
        key: process.env.WEATHER_KEY,
        postal_code: postal_code,
        units: 1,
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({
        error: "Error when calling Weather API",
      });
    });
});

app.listen(port, () => {
  console.log(`API is up and running on port ${port}`);
});

module.exports = app;
