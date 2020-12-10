import React from 'react'
import './City.css'
import {
    Card, CardHeader, CardText, CardBody
} from 'reactstrap'
import{
    withRouter
} from 'react-router-dom'



class City extends React.Component{
    constructor(props){
        super(props)
        this.state = { // state property determines whether or not to show data other than city and explore button
            showMore:false
        }
        this.showClicked = this.showClicked.bind(this)
        this.exploreClicked = this.exploreClicked.bind(this)
    }


    exploreClicked = ()=> // if explore button is click route to page with restaurant and activity components
    {
        this.props.history.push({pathname:"/explore/", state: this.props.zipCode});//placeholder file name for page
    }

    showClicked = ()=> // if show more/less button is clicked change state
    {
        this.setState({
            showMore:!this.state.showMore
        })
    }

    render(){

            return(
            <Card>
               <div  className = "cityCardHeader"> <CardHeader>{this.props.city}</CardHeader> </div>
            <CardBody  className = "cityCardBody">
            
            {
                this.state.showMore? // shows all the city data and explore button if showMore is true
            <div>               
            <CardText>
                <p>State: {this.props.state}</p>
                <p>Zip Code: {this.props.zipCode}</p>
                <p>Distance: {this.props.distance} mi</p>
                <button className = "Button" onClick = {this.exploreClicked}>Explore</button>
            </CardText>
            <div className = "container">
            <button className = "Button" onClick = {this.showClicked}>Show Less</button>
            </div>
            </div>
                :<button   className = "Button" onClick = {this.showClicked}>Show More</button> // only shows show more button if showMore is false
            }
             </CardBody>
            </Card>
            )
        }
}

export default withRouter(City); //exports withRouter so history can be used
