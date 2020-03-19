import React from 'react';
import { Container, Header, Content } from 'rsuite';

// css styling
import './App.css';
import './index.css';

// rsuite css helpers
// import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/themes/dark/index.less';

// Import App Components
import PageTitle from './Components/PageTitle';
import AppRouter from './Components/NavigationBar';


function App() {
  return (
    <Container id="app-container">
        <AppRouter />
    </Container>
  );
}

export default App;
