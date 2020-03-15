
import React, { active } from "react";

// React Suite Navigatino UI imports
import {
  Nav,
  Icon,
} from 'rsuite';

// react-router-dom imports for view routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Dropdown, DropdownMenu } from "reactstrap";


// View imports for each page



// build custom nav layout
const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect}>

      <Nav.Item 
        eventKey="home" 
        componentClass={Link} 
        to="/" 
        icon={<Icon icon="home" />}>
        Home
      </Nav.Item>

      <Nav.Item 
        eventKey="resume" 
        componentClass={Link} 
        to="/resume" 
        icon={<Icon icon="file-text" />}>
        Resume
      </Nav.Item>

      <Nav.Item
        eventKey="projects"
        componentClass={Link}
        to="/projects"
        icon={<Icon icon="bar-chart" />}>
        Projects
      </Nav.Item>

      <Nav.Item
        eventKey="contact"
        componentClass={Link}
        to="/contact"
        icon={<Icon icon="group" />}>
        Contact
      </Nav.Item>

    </Nav>
  );
};

// construct navigation bar component
class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'home'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }
  render() {
    const { active } = this.state;
    return (
      <Router>
        <div>
          <CustomNav appearance="subtle" reversed active={active} onSelect={this.handleSelect} />

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

export default NavigationBar