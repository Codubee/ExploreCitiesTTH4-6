import React from 'react'
import { Jumbotron } from 'reactstrap'
//Imported React and Jumbotron from Reactstrap

//returns a Jumbotron component with a title (h1 element), subheading (p element), a horizontal line (for aesthetic purposes)
//and a short description of the website and its features (p element).
function Explanation(){
    return(
        <Jumbotron>
            <h1 className="display-3">Explanation</h1>
            <p className="lead">What does Explorezy do?</p>
            <hr className="my-2"></hr>  
            <p>Want to explore new places but COVID-19 happened? Try this website, which will let you explore places virtually in a fun way! 
               Enter your zip code, choose a radius, and get a list of cities near you within that radius. If there's any city you want to visit, 
               just click on it and get tons of information about fun things to do in that city. Along with popular tourist spots, you'll receive 
               information about transportation to those places, flights (in case you want to visit in real life!) and restaurants nearby. 
               (Basically we'll plan your whole trip out for you for free!) Happy travelling!!</p>
        </Jumbotron>
    )
}

export default Explanation;

