import React, { Component } from 'react';  
import Hoc from './HOC'; 
class HOCApp extends Component {
    render() {
        let props = this.props;
        debugger;
        return (
            <div>
                <h2>Hello World!!</h2>
                <p> Have a Great day.</p>
            </div>
        )
    }
}
HOCApp = Hoc(HOCApp);  
export default HOCApp;