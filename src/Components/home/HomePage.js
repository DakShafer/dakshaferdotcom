import React from 'react';
import {
    Divider
} from 'rsuite';


// page view components
import IntroCard from './IntroCard';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <IntroCard />
            </div>
        );
    }
}

export default HomePage