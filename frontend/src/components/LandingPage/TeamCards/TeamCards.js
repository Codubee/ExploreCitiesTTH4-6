import React from 'react';
import {
    Card, CardHeader, CardTitle, CardText, CardDeck, CardBody
} from 'reactstrap';

const TeamCardDeck = (props) => {
    return (
        <CardDeck>
            <Card body inverse color  = "info">
                <CardHeader tag = "h2">Team Lead</CardHeader>
                <CardBody>
                    <CardTitle tag = "h2"> Miguel Zavala</CardTitle>
                    <CardText tag = "h5"> Miguel Zavala is the founder of Codubee and the team's leader and mentor</CardText>
                </CardBody>
            </Card>

            <Card body inverse color  = "info">
                <CardHeader tag = "h2">Developer</CardHeader>
                <CardBody>
                    <CardTitle tag = "h3">Aarushi Pandey</CardTitle>
                    <CardText tag = "h5">Aaurushi Pandey is a student at The University of Texas at Dallas and a developer on the team</CardText>
                </CardBody>
            </Card>

            <Card body inverse color  = "info">
                <CardHeader tag = "h2">Developer</CardHeader>
                <CardBody>
                    <CardTitle tag = "h3">Gustavo Oviedo</CardTitle>
                    <CardText tag = "h5">Gustavo Oviedo is a student at The University of Texas at Dallas and a developer on the team</CardText>
                </CardBody>
            </Card>

            <Card body inverse color  = "info">
                <CardHeader tag = "h2">Developer</CardHeader>
                <CardBody>
                    <CardTitle tag = "h3">Jerry Teng</CardTitle>
                    <CardText tag = "h5">Jerry Teng is a student at The University of Texas at Dallas and a developer on the team</CardText>
                </CardBody>
            </Card>

            <Card body inverse color  = "info">
                <CardHeader tag = "h2">Developer</CardHeader>
                <CardBody>
                    <CardTitle tag = "h3">Michael George</CardTitle>
                    <CardText tag = "h5">Michael George is a student at The University of Texas at Dallas and a developer on the team</CardText>
                </CardBody>
            </Card>

            <Card body inverse color  = "info">
                <CardHeader tag = "h2">Developer</CardHeader>
                <CardBody>
                    <CardTitle tag = "h3">Sulemanb Butta</CardTitle>
                    <CardText tag = "h5">Sulemanb Butta is a student at The University of Texas at Dallas and a developer on the team</CardText>
                </CardBody>
            </Card>

        </CardDeck>

    )
}
export default TeamCardDeck;