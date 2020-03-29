import React from 'react';
import {
    Grid,
    Row,
    Col,
    Container,
    Sidebar
} from 'rsuite';


// page view components
import PageHeader from '../shared/PageHeader';


class ResumePage extends React.Component {
    render() {
        return (
            <Container>
                <PageHeader headerText="Resume" bgColor="#048464"/>
                <Container style={{padding: 10}}>
                     
                </Container>
            </Container>
        );
    }
}

export default ResumePage