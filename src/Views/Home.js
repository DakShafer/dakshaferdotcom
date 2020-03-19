import React, { Component , ReactDOM} from 'react';

// import comonents to build the view
//import AboutMeCard from '../Components/AboutMeCard';
import { Container } from 'rsuite';
// other cards
import {
    PanelGroup,
    Panel
} from 'rsuite';

const MyCards = (
    <PanelGroup>
    <Panel header="Panel 1">
      <Paragraph />
    </Panel>
    <Panel header="Panel 2">
      <Paragraph />
    </Panel>
    <Panel header="Panel 3">
      <Paragraph />
    </Panel>
  </PanelGroup>
  );



class HomePage extends Component {
    render() {
        return (
            <Container>
                <h1>We out here at the home page</h1>
            </Container>
    )};
}

function Paragraph() {
    return (
        <h4>Test Test.</h4>
    );
}

export default HomePage