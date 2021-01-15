import React from 'react'
import { Jumbotron } from 'reactstrap'
import "./Explanation.css"
//Imported React and Jumbotron from Reactstrap and the css file

const locations = [{"src": "/images/paris-france.jpg", "location": "Paris, France"}, {"src": "/images/new-york-city-usa.jpg", "location": "New York City, USA"}
                    ,{"src": "/images/london-england.jpg", "location": "London, England"},{"src": "/images/bangkok-thailand.jpg", "location": "Bnagkok, Thailand"}
                    ,{"src": "/images/hong-kong-china.jpg", "location": "Honk Kong, China"},{"src": "/images/dubai-united-arab-emirates.jpg", "location": "Dubai, United Arab Emirates"},
                    {"src": "/images/singapore.jpg", "location": "Singapore"},{"src": "/images/rome-italy.jpg", "location": "Rome, Italy"},
                    {"src": "/images/istanbul-turkey.jpg", "location": "Istanbul, Turkey"}]

/*const images = locations.map((src, location) => (
    <div>
        <img src={src} className="img" alt={src} />
        <figcaption>{location}</figcaption>
    </div>   
));

function getImages() {
    return (
        locations.map((src, location) => (
            <div>
                <img src={src} className="img" alt={src} />
                <figcaption>{location}</figcaption>
            </div>   
    )));
} */

//returns a Jumbotron component with a title (h1 element), a horizontal line (for aesthetic purposes)
//and a short description of the website in bullet points and some images of locations that the user can visit.
function Explanation(){
    return(
        <Jumbotron className="container">
            <h1 className="heading">What is Explorezy?</h1>
            <hr className="my-2"></hr>  
            <p style={{"font-size": "1.5rem"}}>Want to explore new places but COVID-19 happened? Explorezy might be able to help!</p>
            <ul style={{"font-size": "1rem"}}>
                <li>This website will let you explore places virtually in a fun way.</li>
                <li>Enter your zip code, choose a radius, and get a list of cities near you within that radius.</li>
                <li>If there's any city you want to visit, 
                    just click on it and get tons of information about fun things to do in that city.</li>
                <li>Along with popular tourist spots, you'll receive 
                    information about transportation to those places, and flights and restaurants nearby. </li>
            </ul>
            <p style={{"font-size": "1.5rem"}}>Happy travelling!</p>
            <div className="imgContainer">
                <div className="location">
                    <img src={locations[0].src} className="img" alt={locations[0].src} />
                    <figcaption>{locations[0].location}</figcaption>     
                </div>
                <div className="location">
                    <img src={locations[1].src} className="img" alt={locations[1].src} />
                    <figcaption>{locations[1].location}</figcaption>   
                </div>  
                <div className="location">
                    <img src={locations[2].src} className="img" alt={locations[2].src} />
                    <figcaption>{locations[2].location}</figcaption>  
                </div>
                <div className="location">
                    <img src={locations[3].src} className="img" alt={locations[3].src} />
                    <figcaption>{locations[3].location}</figcaption>  
                </div>
                <div className="location">
                    <img src={locations[4].src} className="img" alt={locations[4].src} />
                    <figcaption>{locations[4].location}</figcaption>  
                </div>
                <div className="location">
                    <img src={locations[5].src} className="img" alt={locations[5].src} />
                    <figcaption>{locations[5].location}</figcaption>  
                </div>
                <div className="location">
                    <img src={locations[6].src} className="img" alt={locations[6].src} />
                    <figcaption>{locations[6].location}</figcaption>  
                </div>
                <div className="location">
                    <img src={locations[7].src} className="img" alt={locations[7].src} />
                    <figcaption>{locations[7].location}</figcaption>  
                </div>
                <div className="location">
                    <img src={locations[8].src} className="img" alt={locations[8].src} />
                    <figcaption>{locations[8].location}</figcaption>  
                </div>
            </div>  
        </Jumbotron>
    )
}

export default Explanation;

