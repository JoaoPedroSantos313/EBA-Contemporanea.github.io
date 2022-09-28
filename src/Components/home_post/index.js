import { Component } from 'react';
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
                <p>{Ft(this.state.text)}</p>
            </>
        )
    }
    
}

export default Home_post;