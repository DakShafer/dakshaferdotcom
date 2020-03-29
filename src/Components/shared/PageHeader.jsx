import React from 'react';
import './PageHeader.css';

import {
    Container
} from 'rsuite';


class PageHeader extends React.Component {
    render() {
        var color = this.props.bgColor;
        return (
            <Container id="header-block" style={{backgroundColor: color}}>
                <h1 id="header-text">{this.props.headerText}</h1>
            </Container>
        );
    }
}

export default PageHeader
