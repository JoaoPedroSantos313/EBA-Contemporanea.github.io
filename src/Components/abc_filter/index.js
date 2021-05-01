import React, { Component } from 'react';

class abc_filter extends Component{
    
    constructor(props){
        super(props);
            this.state = {
                letter: props.letter
        };
    }
  
    render(){
        return(
            <>
            <button>{this.state.letter}</button>
            </>
        )
    }
    
}

export default abc_filter;