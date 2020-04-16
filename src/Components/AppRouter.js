import React from 'react';
import {
    Header,
    Container,
    Content
} from 'rsuite';


// react-router-dom imports for view routing
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

// import the navigation bar
import NavigationBar from './NavigationBar';

// import the different views
import HomePage from './home/HomePage';
import ResumePage from './resume/ResumePage';
import ProjectsPage from './projects/ProjectsPage';

// Construct a router to switch between App views
class AppRouter extends React.Component {
    render() {
      return (
        <Router>       
          <Header>
            <NavigationBar />
          </Header>
          <Container id="content-container">
            <Content id="app-body">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
  
                <Route exact path="/resume">
                  <ResumePage />
                </Route>
  
                <Route exact path="/projects">
                  <ProjectsPage />
                </Route>
  
                <Route exact path="/contact">
                  <h1>Contact me!!</h1>
                </Route>
                
              </Switch>
            </Content>
          </Container>
        </Router>
      );
    }
  }

  
export default AppRouter