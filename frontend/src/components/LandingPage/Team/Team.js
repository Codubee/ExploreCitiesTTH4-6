import React from 'react';
import './Team.css'
import {
    Card, CardHeader, CardTitle, CardText, CardDeck, CardBody, CardColumns
} from 'reactstrap';

//Displays the team's information using cards. The cards are contained in a Card deck and arranged by card columns.
// Cards have header and text components with slightly varying colors. Other styling handled by imported CSS file.
//The entire functional component is contained in a div tag that uses a container to add whitespace.
//Before the card deck is a header.
function Team (props) {
    return (

        <div className = "container"> {/*Container tag adds whitespace to both sides of element*/}
            <h1 className = "text-center">Meet The Team</h1> {/*header*/}
            <CardDeck className = "Deck">
            
                <CardColumns>

                    <Card body inverse style={{ backgroundColor: '#ffc107', borderColor: '#ffc107'}}> {/* Miguel's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#BC900B', borderColor: '#BC900B', textAlign:"center"}}>Miguel Zavala</CardHeader> {/*Name*/}
                        <CardBody>
                            <CardTitle tag="h2" className = "text-center">Team Lead</CardTitle> {/*Position*/}
                            <CardText tag = "h5" className = "text-center"> Miguel Zavala is the founder of Codubee. Miguel also acts as the team's leader and mentor.</CardText> {/*Description*/}
                        </CardBody>
                    </Card>

                    {/*The remaining cards follow the same format as the one above*/}
                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Aarushi's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292', textAlign:"center"}}>Aarushi Pandey</CardHeader>
                        <CardBody>
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Aarushi Pandey is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Gustavo's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292', textAlign:"center"}}>Gustavo Oviedo</CardHeader>
                        <CardBody>
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Gustavo Oviedo is a Junior at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Jerry's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292', textAlign:"center"}}>Jerry Teng</CardHeader>
                        <CardBody>
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Jerry Teng is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Michael's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292', textAlign:"center"}}>Michael George</CardHeader>
                        <CardBody>
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Michael George is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Suleman's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292', textAlign:"center"}}>Suleman Butta</CardHeader>
                        <CardBody>
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Suleman Butta is a Junior at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                </CardColumns>

            </CardDeck>
        </div>

    )
}
export default Team;