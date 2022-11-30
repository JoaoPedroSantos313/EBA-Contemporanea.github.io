import React, { useState } from 'react';
import './slider.css';

const Slider = ({ imgs }) => {
    const sliderArr = imgs?.map(i => 
        <img 
            src={i.img} 
            alt="slide-img" 
            width="auto" 
            height="100%" 
        />);

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }; 

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // }

    return (
        <div className="slider">
            <button id="goLeft" onClick={goLeft}>
                <span className="material-icons">keyboard_arrow_left</span>
            </button>
            {sliderArr?.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        {item}
                        {imgs[index]?.nome && <p>{imgs[index].nome}</p>}
                    </div>
                );
            })}
            <button id="goRight" onClick={goRight}>
                <span className="material-icons">keyboard_arrow_right</span>
            </button>
        </div>
    )

}

export default Slider;