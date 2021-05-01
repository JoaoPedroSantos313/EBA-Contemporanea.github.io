import React, { useState } from 'react';
import ImgComp from './ImgComp';
import './slider.css';
import img1 from './Imgs/img1.jpg'
import img2 from './Imgs/img2.jpg'
import img3 from './Imgs/img3.jpg'

function Slider(){

    let sliderArr = [<ImgComp src={img1}/>,
                     <ImgComp src={img2}/>,
                     <ImgComp src={img3}/>];
    const [x, setX] = useState(0)
   
    const goLeft = () => {
        x=== 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100);
    };
    const goRight = () => {
        x=== -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100);
    };

    return(
        <div className="slider">
            
            { sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}

                        <button id="goLeft" onClick={goLeft}>
                            <span class="material-icons">keyboard_arrow_left</span>
                        </button>

                        <button id="goRight" onClick={goRight}>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </div>
                );
            })}
            
           
       
        </div>
    )

}

export default Slider;