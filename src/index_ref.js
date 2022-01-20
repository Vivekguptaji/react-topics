import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import App from "./index_forwardRef";

// class FirstRefComp extends React.Component {
//     constructor(props) {
//         super(props); 
//         this.callRef = React.createRef();
//     }
//     componentDidMount() { 
//     }
  
//     render() {
//         return <div ref={this.callRef}>My First Ref Example</div>;
//     }
// }
// adding focus onclick of button
class AccessingRef extends React.Component {
    constructor(props) {
        super(props); 
        this.callRef = React.createRef();
        this.addingRefInput = this.addingRefInput.bind(this);
    }
    addingRefInput() { 
        this.callRef.current.focus();
    }

    render() { 
        return (
            <div>
                <h1>Hello World</h1>
                <input
                    type="text"
                    ref={this.callRef} />
                <input
                    type="button"
                    value="Enter text"
                    onClick={this.addingRefInput}
                />
            </div>
        );
    }
}
 

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
