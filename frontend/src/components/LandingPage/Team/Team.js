import React from 'react';
import './Team.css'
import {
    Card, CardHeader, CardTitle, CardText, CardDeck, CardBody, CardColumns
} from 'reactstrap';

//Displays the team's information using cards. The cards are contained in a Card deck and arranged by card columns.
// Cards have header and text components with slightly varying colors. Styling handled by imported CSS file.
//The entire functional component is contained in a div tag that uses a container to add whitespace.
//Before the card deck is a header.
function Team (props) {
    return (

        <div className = "container"> {/*Container tag adds whitespace to both sides of element*/}
            <h1 className = "text-center">Meet The Team</h1> {/*header*/}
            <CardDeck className = "Deck">
            
                <CardColumns>

                    <Card> {/* Miguel's card*/}
                        <div className = "LeadCardHeader"> <CardHeader tag = "h2">Miguel Zavala</CardHeader> </div> {/*Name. Needs to be surrounded by div for css*/}
                        <CardBody className = "LeadCardBody">
                            <CardTitle tag="h2" className = "text-center">Team Lead</CardTitle> {/*Position*/}
                            <CardText tag = "h5" className = "text-center"> Miguel Zavala is the founder of Codubee. Miguel also acts as the team's leader and mentor.</CardText> {/*Description*/}
                        </CardBody>
                    </Card>

                    {/*The remaining cards follow the same format as the one above*/}
                    <Card> {/* Aarushi's card*/}
                        <div className = "DeveloperCardHeader"> <CardHeader tag = "h2">Aarushi Pandey</CardHeader> </div>
                        <CardBody  className = "DeveloperCardBody">
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Aarushi Pandey is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card> {/* Gustavo's card*/}
                    <div className = "DeveloperCardHeader"> <CardHeader tag = "h2">Gustavo Oviedo</CardHeader> </div>
                        <CardBody className = "DeveloperCardBody">
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Gustavo Oviedo is a Junior at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card> {/* Jerry's card*/}
                    <div className = "DeveloperCardHeader"> <CardHeader tag = "h2">Jerry Teng</CardHeader> </div>
                        <CardBody className = "DeveloperCardBody">
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Jerry Teng is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card> {/* Michael's card*/}
                    <div className = "DeveloperCardHeader"> <CardHeader tag = "h2">Michael George</CardHeader> </div>
                        <CardBody className = "DeveloperCardBody">
                            <CardTitle tag="h2" className = "text-center">Developer</CardTitle>
                            <CardText tag = "h5" className = "text-center">Michael George is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                        </CardBody>
                    </Card>

                    <Card> {/* Suleman's card*/}
                    <div className = "DeveloperCardHeader"> <CardHeader tag = "h2">Suleman Butta</CardHeader> </div>
                        <CardBody className = "DeveloperCardBody">
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