import React from 'react'
import './Cities.css'
import City from './City'
import {
    CardColumns,
} from 'reactstrap'

class Cities extends React.Component {

    constructor(props) {
        
        super(props)
        this.state = {uniqueCities: [],
            incomingData:this.props.data}
    }

    componentDidMount(){
        this.normalizeData(this.props.data) //normalizes props and stores in state
    }



    normalizeData(jsondata) // ensures there are no duplicate cities and that distance is rounded
    {

        let cityMap = new Map() // map that contains cities that have been read from data
        if (jsondata !== null && Object.keys(jsondata) !== 0) //checks to make sure there is data before mapping over it
        {
            let tempArray = []
             // Loops through entire JSON array and if the object's city isn't in the map add it to the map and array
            for(var x in jsondata.zip_codes)
            {
                var curr = jsondata.zip_codes[x]
                var city = jsondata.zip_codes[x].city

                if (!cityMap.has(city)) // checks if city is not in map
                {
                    cityMap.set(curr.city, true) // add new city to map
                    let miles = curr.distance // get distance
                    curr.distance = Math.round(miles) //round distance
                    tempArray.push(curr) // add new object to array
                }

                if(tempArray.length > 11) // terminates loop if 12 objects are added and stores result in state
                {
                    this.setState({uniqueCities:tempArray})
                    break
                }

            }
            this.setState({uniqueCities:tempArray}) //stores result in state
        }
    }



    render() {

        console.log("Cities render")


        return (
            <div className="container">
                <CardColumns className="cityColumns">
                    {
                        this.state.uniqueCities.map((data,id) => // loop through unique JSON objects and create individual city components
                        {
                            return (
                                <City key={id} city={data.city} state={data.state} zipCode={data.zip_code} distance={data.distance} />
                            )
                        })
                    }
                </CardColumns>
            </div>
        )
    }
}


export default Cities