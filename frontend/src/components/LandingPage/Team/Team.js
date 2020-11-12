import React from 'react';
import './Team.css'
import {
    Card, CardHeader, CardText, CardDeck, CardBody, CardColumns
} from 'reactstrap';

//Displays the team's information using cards. The cards are contained in a Card deck and arranged by card columns.
// Cards have header and text components with slightly varying colors. Other styling handled by imported CSS file.
//The entire functional component is contained in a div tag that uses a container to add whitespace.
//Before the card deck is a header.
function TeamCardDeck (props) {
    return (

        <div className = "container"> {/*Container tag adds whitespace to both sides of element*/}
            <h1 style = {{textAlign:"center"}}>Meet The Team</h1> {/*header*/}
            <CardDeck className = "Deck">
            
                <CardColumns>

                    <Card body inverse style={{ backgroundColor: '#ffc107', borderColor: '#ffc107'}}> {/* Miguel's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#BC900B', borderColor: '#BC900B'}}>Team Lead</CardHeader> {/*Position*/}
                        <CardBody>
                            <CardText tag = "h5"> Miguel Zavala is the founder of Codubee. Miguel also acts as the team's leader and mentor.</CardText> {/*Description*/}
                        </CardBody>
                    </Card>

                    {/*The remaining cards follow the same format as the one above*/}
                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Aarushi's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292'}}>Developer</CardHeader>
                        <CardBody>
                            <CardText tag = "h5">Aarushi Pandey is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Gustavo's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292'}}>Developer</CardHeader>
                        <CardBody>
                            <CardText tag = "h5">Gustavo Oviedo is a Junior at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Jerry's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292'}}>Developer</CardHeader>
                        <CardBody>
                            <CardText tag = "h5">Jerry Teng is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Michael's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292'}}>Developer</CardHeader>
                        <CardBody>
                            <CardText tag = "h5">Michael George is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#17A2B8', borderColor: '#17A2B8'}}> {/* Suleman's card*/}
                        <CardHeader tag = "h2" body inverse style={{ backgroundColor: '#208292', borderColor: '#208292'}}>Developer</CardHeader>
                        <CardBody>
                            <CardText tag = "h5">Suleman Butta is a Junior at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                </CardColumns>

            </CardDeck>
        </div>

    )
}
export default TeamCardDeck;