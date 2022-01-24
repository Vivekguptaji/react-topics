import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
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
function AccessingRef() {
    let callRef = useRef();
    const addingRefInput = () => {
        callRef.current.focus();
    }
    return (
        <div>
            <h1>Hello World</h1>
            <input
                type="text"
                ref={callRef} />
            <input
                type="button"
                value="Enter text"
                onClick={addingRefInput}
            />
        </div>
    );
    
}
 
ReactDOM.render( <AccessingRef />, document.getElementById('root'));
