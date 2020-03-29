import React from 'react';
import {
    Grid,
    Row,
    Col,
    Container,
    Sidebar
} from 'rsuite';


// page view components
import IntroCard from './IntroCard';
import AboutMe from './AboutMe';
import PageHeader from '../shared/PageHeader';


class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <PageHeader headerText="About Me" bgColor="#2069e0"/>
                <Container style={{padding: 10}}>
                    <Sidebar>
                        <IntroCard />
                    </Sidebar>
                    <Container style={{paddingLeft: 20}}>
                        <AboutMe />
                    </Container>
                </Container>
            </Container>
        );
    }
}

export default HomePage