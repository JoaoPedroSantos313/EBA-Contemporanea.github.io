import React, { Component } from 'react';
import './card.css';

class card_artist extends Component{
    
    constructor(props){
        super(props);
            this.state = {
                icon: props.icon,
                title: props.title,
                image: props.image
        };
    }
  
    render(){
        return(
            <>
            <div className='card_label'>
            <button className='card_title'><img src={this.state.icon}></img> {this.state.title}</button>
            <button className='card_image'><img src={this.state.image}></img></button>
            </div>
            </>
        )
    }
    
}

export default card_artist;