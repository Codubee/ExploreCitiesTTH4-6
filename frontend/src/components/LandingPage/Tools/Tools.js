import React from 'react'
import "./Tools.css"
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const react_logo = "/react-logo.gif"

function Tools()  {
    return (
        <>
            <h1 id="header">Tools Used</h1>

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

            </div>

          </>
    )
}

export default Tools;
