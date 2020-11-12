import React from 'react'
import './Features.css'

//Displays the features of website to user
function Features()
{
    return(
    <div class = "container">
        <h1 className = "header">Features included in our website</h1>
            <h3 className = "tab">-Displays cities located near given zipcode and mile radius</h3>
            <h3 className = "tab">-User can virtually explore any city listed</h3>
                <h5 className = "doubletab">*Nearby tourist attractions</h5>
                <h5 className = "doubletab">*Restaurants (as well as their ratings!)</h5>
            <h3 className = "tab">-Additional information provided:</h3>
                <h5 className = "doubletab">*Flight costs</h5>
                <h5 className = "doubletab">*Uber costs</h5>
                    <h6 className = "doubletab">*(In case you are interested in visiting!)</h6>
    </div>
    );
}
export default Features;