import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/artistas_pag1"> 
                <button className='card_title'>
                    <img src={this.state.icon}></img> 
                    {this.state.title}
                </button>
            </Link>
            
            <Link to="/artistas_pag1"> 
                <button className='card_image'>
                    <img src={this.state.image}></img>
                </button>
            </Link>
            </div>
            </>
        )
    }
    
}

export default card_artist;