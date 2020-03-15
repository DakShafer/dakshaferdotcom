import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';


class IntroCard extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>
                        <h5>About me:</h5>
                    </CardTitle>
                    <CardText>
                        My name is Dakota Shafer and I'm a Machine Learning Engineer for the Booz Allen Hamilton Cyber AI team.
                    </CardText>
                </CardBody>
            </Card>
    )};
}

export default IntroCard