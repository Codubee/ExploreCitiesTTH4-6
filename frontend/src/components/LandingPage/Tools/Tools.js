import React from 'react'
import "./Tools.css"
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const react_logo = "/react.png"
const node_logo = "/node.png"
const yelp_logo = "/yelp.png"
const zip_code_logo = "/house.jfif"
const weatherbit_logo = "/weatherbit.jpg"
const eventbrite_logo = "/eventbrite.png"
const aws_logo = "/aws.jpg"
const heroku_logo = "/heroku.png"

function Tools()  {
    return (
        <>
            <h1 id="header">Technologies Used</h1>

            <div id="tools-container">

                <Card className="card">
                    <a href="https://reactjs.org" rel="noreferrer" target="_blank">
                        <CardImg src={react_logo} alt="react logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">React</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Framework</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

                <Card className="card">
                    <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
                        <CardImg src={node_logo} alt="node logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">Node</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Runtime</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

                <Card className="card">
                    <a href="https://www.yelp.com/developers" rel="noreferrer" target="_blank">
                        <CardImg src={yelp_logo} alt="yelp logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">Yelp API</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Runtime</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

                <Card className="card">
                    <a href="https://www.zipcodeapi.com/" rel="noreferrer" target="_blank">
                        <CardImg src={zip_code_logo} alt="zip code logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">Zip Code API</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Runtime</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

                <Card className="card">
                    <a href="https://www.weatherbit.io/api" rel="noreferrer" target="_blank">
                        <CardImg src={weatherbit_logo} alt="weatherbit logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">Weatherbit API</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Runtime</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

                <Card className="card">
                    <a href="https://www.eventbrite.com/platform/api" rel="noreferrer" target="_blank">
                        <CardImg src={eventbrite_logo} alt="eventbrite logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">Eventbrite API</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Runtime</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

                <Card className="card">
                    <a href="https://aws.amazon.com/" rel="noreferrer" target="_blank">
                        <CardImg src={aws_logo} alt="eventbrite logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">AWS</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Runtime</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

                <Card className="card">
                    <a href="https://www.heroku.com/home" rel="noreferrer" target="_blank">
                        <CardImg src={heroku_logo} alt="eventbrite logo" />
                        <CardBody className="bg-dark">
                            <CardTitle className="tool-name">Heroku</CardTitle>
                            <CardSubtitle className="tool-description">A JavaScript Runtime</CardSubtitle>
                        </CardBody>
                    </a>
                </Card>

            </div>

          </>
    )
}

export default Tools;
