import React from 'react';
import { Nav, Dropdown, Icon} from 'rsuite';


class NavigationBar extends React.Component {
  render() {
    return (
    <Nav>
      <Nav.Item 
        icon={<Icon icon="home" />}
        href="/">
          Home
      </Nav.Item>
      <Nav.Item 
        icon={<Icon icon="file-text"/>}
        href="/">
          Resume
      </Nav.Item>
      <Dropdown 
        icon={<Icon icon="area-chart" />} 
        title="Projects">
          <Dropdown.Item
            icon={<Icon icon="cloud"/>}
            href="/">
            This Website
          </Dropdown.Item>
          <Dropdown.Item
            icon={<Icon icon="bar-chart"/>}
            href="/">
            NHL Goal Probabilities
          </Dropdown.Item>
          <Dropdown.Item
            icon={<Icon icon="file-text-o"/>}
            href="/">
            NHL Contract Predictions
          </Dropdown.Item>
          <Dropdown.Item
            icon={<Icon icon="github"/>}
            href="/">
            GitHub
          </Dropdown.Item>
      </Dropdown>
      <Dropdown icon={<Icon icon="group" />} title="Social">
        <Dropdown.Item 
          icon={<Icon icon='twitter' />}
          href="https://twitter.com/dakshafer"
          target="_blank">
            Twitter
        </Dropdown.Item>
        <Dropdown.Item 
          icon={<Icon icon='linkedin' />}
          href="https://www.linkedin.com/in/dakotashafer/"
          target="_blank">
            LinkedIn
        </Dropdown.Item>
      </Dropdown>
    </Nav>
  )};
}

export default NavigationBar