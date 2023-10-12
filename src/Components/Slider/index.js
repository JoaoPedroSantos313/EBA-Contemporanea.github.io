import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './slider.css';

const Slider = ({ imgs }) => {
    const sliderArr = imgs?.map(i =>
        <>
            <img
                src={i.img}
                alt="slide-img"
                height="100%"
            />
            {i?.name && <div className='subtitle'><p>{i.name}</p></div>}
        </>
    );

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">

            {sliderArr?.map((item, index) => (
                <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                    <button className="seta goLeft" onClick={goLeft}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    {item}
                </div>
            ))}

            <button className="seta goRight" onClick={goRight}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )

}

export default Slider;