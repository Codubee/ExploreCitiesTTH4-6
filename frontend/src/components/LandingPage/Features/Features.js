import React from 'react'
import './Features.css'

function Features()
{
    return(
    <div class = "container timesnewroman bgcolor spacing">
        <h1 className = "header">Features included in our website</h1>
            <h4 className = "tab">- Displays cities located near given zipcode and mile radius</h4>
            <h4 className = "tab">- User can virtually explore any city listed</h4>
                <p className = "doubletab">* Nearby tourist attractions</p>
                <p className = "doubletab">* Restaurants (as well as their ratings!)</p>
            <h4 className = "tab">- Additional information provided:</h4>
                <p className = "doubletab">* Flight costs</p>
                <p className = "doubletab">* Uber costs</p>
                    <p className = "doubletab">(In case you are interested in visiting!)</p>
    </div>
    );
}
export default Features;