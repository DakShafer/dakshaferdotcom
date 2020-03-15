import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import './index.css';
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';

// Import App Components
import PageTitle from './Components/PageTitle';
import NavigationBar from './Components/NavBar';



function App() {
  return (
    <Container>
      <Row>
        <PageTitle></PageTitle>
      </Row>
      <Row>
        <NavigationBar></NavigationBar>
      </Row>
    </Container>
  );
}

export default App;
