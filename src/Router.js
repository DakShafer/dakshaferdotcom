
import React from 'react';

// react-router-dom imports for view routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import the navigation bar 
import NavigationBar from './Components/NavigationBar';

// import the different app views
import HomePage from './Views/Home';


// Construct a router to switch between App views
class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/resume">
              <About />
            </Route>

            <Route exact path="/projects">
              <Projects />
            </Route>

            <Route exact path="/contact">
              <h1>Contact me!!</h1>
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

function Projects() {
  return <h1>Projects</h1>
}

export default AppRouter