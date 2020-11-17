import React from 'react'
import { Jumbotron } from 'reactstrap'
import "./Explanation.css"
//Imported React and Jumbotron from Reactstrap and the css file

const locations = [{"src": "/logo512.png", "location": "Location1"}, {"src": "/logo512.png", "location": "Location2"}
                    ,{"src": "/logo512.png", "location": "Location3"},{"src": "/logo512.png", "location": "Location4"}
                    ,{"src": "/logo512.png", "location": "Location5"},{"src": "/logo512.png", "location": "Location6"},
                    {"src": "/logo512.png", "location": "Location7"}]

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
            <h1>What is Explorezy?</h1>
            <hr className="my-2"></hr>  
            <p>Want to explore new places but COVID-19 happened? Explorezy might be able to help!</p>
            <ul>
                <li>This website will let you explore places virtually in a fun way.</li>
                <li>Enter your zip code, choose a radius, and get a list of cities near you within that radius.</li>
                <li>If there's any city you want to visit, 
                    just click on it and get tons of information about fun things to do in that city.</li>
                <li>Along with popular tourist spots, you'll receive 
                    information about transportation to those places, and flights and restaurants nearby. </li>
            </ul>
            <p>Happy travelling!</p>
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
            </div>  
        </Jumbotron>
    )
}

export default Explanation;

