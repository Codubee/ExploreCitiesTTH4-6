import React from 'react'
import './Cities.css'
import City from './City'
import {
    CardColumns,
} from 'reactstrap'


let cityMap = new Map() // map that contains cities that have been read from data
let uniqueCities = [] // array of unique objects from JSON array. No duplicate cities.

           
            class Cities extends React.Component{

                constructor(props)
                {
                    super(props)
                }

                render(){
                normalizeData(this.props.zipCodeData)
                return(
                <div className = "container">
                <CardColumns className = "cityColumns">
                    {

                            uniqueCities.map((data)=> // loop through unique JSON objects and create individual city components
                        {
                            return(
                                   <City city = {data.city} state = {data.state} zipCode = {data.zip_code} distance = {data.distance}/>
                            )
                        })
                        
                    }
                </CardColumns>
                </div>
                )
                }
            }

            function normalizeData(jsondata) // ensures there are no duplicate cities and that distance is rounded
            {
                if(jsondata != null && Object.keys(jsondata)!=0) //checks to make sure there is data before mapping over it
                {
                jsondata.zip_codes.map((data)=> // Loops through entire JSON array and if the object's city isn't in the map add it to the map and array
            {
                if(!cityMap.has(data.city)) // checks if city is not in map
                {
                    cityMap.set(data.city, true) // add new city to map
                    let miles = data.distance // get distance
                    data.distance = Math.round(miles) //round distance
                    uniqueCities.push(data) // add new object to array
                }
            })
        }
            }


export default Cities