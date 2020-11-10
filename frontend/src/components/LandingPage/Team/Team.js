import React from 'react';
import './Team.css'
import {
    Card, CardHeader, CardText, CardDeck, CardBody, CardColumns
} from 'reactstrap';

//Displays the team's information using cards. The cards are contained in a Card deck and arranged by card columns.
// Cards use info background and border color. Cards have header and text components. Other styling handled by imported CSS file.
const TeamCardDeck = (props) => {
    return (
        <CardDeck class = "Deck">

            <CardColumns>

                <Card body inverse color  = "info"> {/* Miguel's card*/}
                    <CardHeader tag = "h2">Team Lead</CardHeader> {/*Position*/}
                    <CardBody>
                        <CardText tag = "h5"> Miguel Zavala is the founder of Codubee. Miguel also acts as the team's leader and mentor.</CardText> {/*Description*/}
                    </CardBody>
                </Card>

                {/*The remaining cards follow the same format as the one above*/}
                <Card body inverse color  = "info"> {/* Aarushi's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardText tag = "h5">Aaurushi Pandey is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Gustavo's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardText tag = "h5">Gustavo Oviedo is a Junior at The University of Texas at Dallas majoring in Computer Science.</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Jerry's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardText tag = "h5">Jerry Teng is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Michael's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardText tag = "h5">Michael George is a Sophomore at The University of Texas at Dallas majoring in Computer Science.</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Suleman's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardText tag = "h5">Suleman Butta is a Junior at The University of Texas at Dallas majoring in Computer Science.</CardText>
                    </CardBody>
                </Card>

            </CardColumns>

        </CardDeck>

    )
}
export default TeamCardDeck;