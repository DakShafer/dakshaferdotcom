import React from 'react';
import { Container } from 'reactstrap';

// css styling
import './App.css';
import './index.css';
import './Components/Shared/PageTitle.css';

// rsuite css helpers
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';

// Import App Components
import PageTitle from './Components/PageTitle';
import AppRouter from './Router';



function App() {
  return (
    <Container>
      <PageTitle />
      <AppRouter />
    </Container>
  );
}

export default App;
