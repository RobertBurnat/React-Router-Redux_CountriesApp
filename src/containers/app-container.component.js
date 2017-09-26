import React from "react";
import { Router, hashHistory} from 'react-router';

import DevTools from './../DevTools';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router history={hashHistory} routes={this.props.routes} />
                <DevTools />
            </div>
        )
    }
}

export default AppContainer;