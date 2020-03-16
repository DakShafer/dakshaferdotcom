// Author: Dakota Shafer
// File Summary:
//    - Builds out navigation bar and defines the app routes for each
//      endpoint defined.
//

import React, { active } from "react";

// React Suite Navigatino UI imports
import {
  Nav,
  Icon,
  Dropdown,
} from 'rsuite';

import { Link } from 'react-router-dom';

// build custom nav layout
const NavigationBar = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect}>

      <Nav.Item 
        eventKey="about" 
        componentClass={Link} 
        to="/" 
        icon={<Icon icon="home" />}>
        About Me
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

      <Dropdown
        title="Contact"
        icon={<Icon icon="group" />}>

        <Dropdown.Item
          icon={<Icon icon="twitter" />}
          href="https://www.twitter.com/dakshafer"
          target="_blank">
          Twitter
        </Dropdown.Item>

        <Dropdown.Item
          icon={<Icon icon="linkedin" />}
          href="https://www.linkedin.com/in/dakotashafer/"
          target="_blank">
          LinkedIn
        </Dropdown.Item>

        <Dropdown.Item
          icon={<Icon icon="envelope" />}
          href="mailto:dakota.shafer@outlook.com">
          Email
        </Dropdown.Item>

      </Dropdown>

    </Nav>
  );
};

export default NavigationBar