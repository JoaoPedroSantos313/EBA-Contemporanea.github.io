import React, { Component } from 'react';
import Ft from '../../helpers/format_text';

class  Home_post extends Component{
    
    constructor(props){
        super(props);
            this.state = {
                title: props.title,
                text: props.text
        };
    }
  
    render(){
        return(
            <>
                <h1>{this.state.title}</h1>
                <h3>{Ft(this.state.text)}</h3>
            </>
        )
    }
    
}

export default Home_post;