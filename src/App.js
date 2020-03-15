import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// css styling
import './App.css';
import './index.css';
import './Components/PageTitle.css';

// rsuite css helpers
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';

// Import App Components
import PageTitle from './Components/PageTitle';
import NavigationBar from './Components/NavBar';
import IntroCard from './Components/IntroCard';



function App() {
  return (
    <Container>
      <Row>
        <PageTitle></PageTitle>
      </Row>
      <Row>
        <NavigationBar></NavigationBar>
      </Row>
      <Row>
        <div id="content">
          <IntroCard></IntroCard>
        </div>
      </Row>
    </Container>
  );
}

export default App;
