import React from 'react';
import {
    Card, CardHeader, CardTitle, CardText, CardDeck, CardBody, CardColumns
} from 'reactstrap';

//Displays the team's information using cards. The cards are contained in a Card deck and arranged by card columns.
// Cards use info background and border color. Cards have header, title, and text components with decreasing size for each.
const TeamCardDeck = (props) => {
    return (
        <CardDeck>

            <CardColumns>

                <Card body inverse color  = "info"> {/* Miguel's card*/}
                    <CardHeader tag = "h2">Team Lead</CardHeader> {/*Position*/}
                    <CardBody>
                        <CardTitle tag = "h3"> Miguel Zavala</CardTitle> {/*Name*/}
                        <CardText tag = "h5"> Miguel Zavala is the founder of Codubee and the team's leader and mentor</CardText> {/*Description*/}
                    </CardBody>
                </Card>

                {/*The remaining cards follow the same format as the one above*/}
                <Card body inverse color  = "info"> {/* Aarushi's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardTitle tag = "h3">Aarushi Pandey</CardTitle>
                        <CardText tag = "h5">Aaurushi Pandey is a student at The University of Texas at Dallas and a developer on the team</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Gustavo's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardTitle tag = "h3">Gustavo Oviedo</CardTitle>
                        <CardText tag = "h5">Gustavo Oviedo is a student at The University of Texas at Dallas and a developer on the team</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Jerry's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardTitle tag = "h3">Jerry Teng</CardTitle>
                        <CardText tag = "h5">Jerry Teng is a student at The University of Texas at Dallas and a developer on the team</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Michael's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardTitle tag = "h3">Michael George</CardTitle>
                        <CardText tag = "h5">Michael George is a student at The University of Texas at Dallas and a developer on the team</CardText>
                    </CardBody>
                </Card>

                <Card body inverse color  = "info"> {/* Sulemanb's card*/}
                    <CardHeader tag = "h2">Developer</CardHeader>
                    <CardBody>
                        <CardTitle tag = "h3">Sulemanb Butta</CardTitle>
                        <CardText tag = "h5">Sulemanb Butta is a student at The University of Texas at Dallas and a developer on the team</CardText>
                    </CardBody>
                </Card>

            </CardColumns>

        </CardDeck>

    )
}
export default TeamCardDeck;