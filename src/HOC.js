import React, { Component } from 'react';  

export default function Hoc(HocComponent) {
    return class extends Component {
        render() {
            this.newValue = 'IBM';
            return (
                <div>
                    <HocComponent newValue={this.newValue}></HocComponent>
                    <br></br>
                    <div>Welcome with HOC</div>
                </div>
            );
        }
    }
}