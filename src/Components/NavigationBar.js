// Author: Dakota Shafer
// File Summary:
//    - Builds out navigation bar and defines the app routes for each
//      endpoint defined.
//

import React, { active } from "react";
import { Container, Header, Content, Footer } from 'rsuite';

import './NavigationBar.css';

// React Suite Navigatino UI imports
import {
  Navbar,
  Nav,
  Icon,
  Dropdown,
} from 'rsuite';

// react-router-dom imports for view routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// build custom nav layout
const BarLayout = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Header>
        <h3 className="namelogo" >
          Dakota Shafer
        </h3>
      </Navbar.Header>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>

          <Nav.Item 
            icon={<Icon icon="home" />} 
            eventKey="1" 
            componentClass={Link}
            to="/">
              Home
          </Nav.Item>

          <Nav.Item 
            icon={<Icon icon="file-text" />} 
            eventKey="2" 
            componentClass={Link}
            to="/resume">
              Resume
          </Nav.Item>


          <Nav.Item 
            icon={<Icon icon="bar-chart" />} 
            eventKey="3"
            componentClass={Link}
            to="/projects">
              Projects
          </Nav.Item>


          <Dropdown icon={<Icon icon="group" />} title="Social">

            <Dropdown.Item
              icon={<Icon icon="twitter" />}
              eventKey="4">
                Twitter
            </Dropdown.Item>

            <Dropdown.Item
              icon={<Icon icon="linkedin" />}
              eventKey="5">
                LinkedIn
            </Dropdown.Item>

            <Dropdown.Item
              icon={<Icon icon="envelope" />}
              eventKey="6">
                Email Me
            </Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item 
            icon={<Icon icon="github" />}
            href="https://github.com/DakShafer"
            target="_blank">
              My GitHub
            </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: null
    };
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const { activeKey } = this.state;
    return (
      <BarLayout activeKey={activeKey} onSelect={this.handleSelect} />
    );
  }
}


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
                <Home />
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
          </Content>
        </Container>
      </Router>
    );
  }
}

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>Resume</h1>
}

function Projects() {
  return <h1>Projects</h1>
}


export default AppRouter