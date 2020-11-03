import React from 'react'
import "./Tools.css"
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const react_logo = "/react-logo.gif"

class Tools extends React.Component {
    render() {
        return (
          <div>
            <h1 id="header">Tools Used:</h1>
            <div id="cards-container">
                <a href="https://reactjs.org" target="_blank">
                    <Card className="cards">
                        <CardImg class="logo" src={react_logo} alt="react logo" />
                        <CardBody>
                            <CardTitle>React.js</CardTitle>
                            <CardSubtitle>A JavaScript Framework</CardSubtitle>
                        </CardBody>
                    </Card>
                </a>
            </div>
          </div>
        );
    }
}

export default Tools;