import React from 'react';

// other cards
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardLink
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const introText = "My name is Dakota Shafer and I am a Machine Learning Engineer on the Booz Allen Hamilton Cyber AI team.";


class AboutMeCard extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>About Me:</CardTitle>
                        <CardText>
                          My name is Dakota Shafer and I am a Machine Learning Engineer on the Booz Allen Hamilton Cyber AI team.
                        </CardText>
                        <CardLink href="/resume">My Resume</CardLink>
                        <CardLink href="https://github.com/dakshafer" target="_blank">My GitHub</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AboutMeCard
