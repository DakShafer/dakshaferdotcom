import React from 'react';

import {
  Panel
} from 'rsuite';


class IntroCard extends React.Component {
    render() {
        return (
        <Panel shaded bordered bodyFill>
            <img src="https://via.placeholder.com/240x240" alt="this is me"/>
            <Panel header="About Me:">
                <p>
                    My name is Dakota Shafer and I am a Machine Learning Engineer on the Booz Allen Hamilton Cyber AI team.
                </p>
            </Panel>
        </Panel>
        )
    }
}

export default IntroCard