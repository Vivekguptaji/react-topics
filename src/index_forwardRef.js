import React from 'react';  
import Auxi from './Auxi';

const AnotherComp = React.forwardRef((props, ref) => {

    return (
        <input type="text" placeholder="Welcome" ref={ref} />
    )
});


// const AnotherCompX = (props, ref) => {

//     return (
//         <input type="text" placeholder="Welcome" ref={ref} />
//     )
// };

const passInputRefFrom_OtherComp = React.createRef(); 

class App extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        debugger;
        console.log(passInputRefFrom_OtherComp.current.value);
    };
    render() {
        return (
            <>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <AnotherComp ref={passInputRefFrom_OtherComp} />
                    <button>Submit</button>
                </form>
            </> 
        );
    }
}
export default App; 
 