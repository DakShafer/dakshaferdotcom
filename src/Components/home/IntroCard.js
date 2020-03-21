import React from 'react';

import {
  PanelGroup,
  Panel,
  //TODO: delete this later
  Placeholder
} from 'rsuite';

const { Paragraph } = Placeholder


class IntroCard extends React.Component {
    render() {
        return (
            <PanelGroup>
            <Panel header="Panel 1">
              <Paragraph />
            </Panel>
            <Panel header="Panel 2">
              <Paragraph />
            </Panel>
            <Panel header="Panel 3">
              <Paragraph />
            </Panel>
          </PanelGroup>
        )
    }
}

export default IntroCard