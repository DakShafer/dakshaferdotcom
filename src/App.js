import React from 'react';
import { Container } from 'rsuite';

// css styling
import './App.css';
import './index.css';

// Import App Components
import AppRouter from './NavigationBar';


function App() {
  return (
    <Container id="app-container">
        <AppRouter />
    </Container>
  );
}

export default App;
