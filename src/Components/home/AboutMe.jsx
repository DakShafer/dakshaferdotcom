import React from 'react';

import {
    Panel,
    Icon,
    Content,
    //TODO: delete this later
    Placeholder,
    Divider
} from 'rsuite';

const { Paragraph } = Placeholder


// Interests!
class Interests extends React.Component {
    render() {
        return (
        <Panel icon={<Icon icon="desktop"/>} header="Interests">
            <Paragraph />
            <Icon icon="desktop"> I like Programming.</Icon>
        </Panel>
        );
    }
}

// Interests!
class Hobbies extends React.Component {
    render() {
        return (
        <Panel header="Hobbies">
            <Paragraph />
            <Icon icon="music">I play drums and guitar!!</Icon>
        </Panel>
        );
    }
}

class AboutMe extends React.Component {
    render() {
        return (
            <Content>
                <Interests />
                <Divider />
                <Hobbies />
            </Content>
        );
    }
}

export default AboutMe