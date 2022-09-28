import React, { useState } from 'react';
import ImgComp from './ImgComp';
import './slider.css';

const Slider = ({ img_slider }) => {
    const sliderArr = img_slider?.map(i => <ImgComp key={i.id} src={i.img}/>)

    const [x, setX] = useState(0)
   
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {sliderArr?.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}

                        <button id="goLeft" onClick={goLeft}>
                            <span className="material-icons">keyboard_arrow_left</span>
                        </button>

                        <button id="goRight" onClick={goRight}>
                            <span className="material-icons">keyboard_arrow_right</span>
                        </button>
                    </div>
                );
            })}
            
           
       
        </div>
    )

}

export default Slider;