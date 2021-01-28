import './Intro.css';
import React, {Component}  from 'react';


class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: true
           //referenceNode: <Todo/>
        }
    }    
    EventVisible = () => {
        return this.setState({
            isVisible: false
        });
    }
        render() {
            if(this.state.isVisible === true){
                return (
                <div class="intro">Welcome!
                <button id='_introbutton' class="intro" onClick={this.EventVisible}>Get started</button>
                </div>
                );   
            }
            else{
                return this.props.nextNode;
            }
            
    }
}


export default Intro;