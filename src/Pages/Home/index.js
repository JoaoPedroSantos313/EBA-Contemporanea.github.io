import React, { useEffect } from 'react';
import Home_post from '../../Components/home_post';
import Slider from '../../Components/Slider';
import img1 from '../../Components/Slider/Imgs/img1.jpg'
import img2 from '../../Components/Slider/Imgs/img2.jpg'
import img3 from '../../Components/Slider/Imgs/img3.jpg'
import img4 from '../../Components/Slider/Imgs/img4.png'
import './Home.css';
import useHomepage from '../../contexts/homepage';

export default function home() {
    const {
        getHomeInfo,
        firstParagraph,
        secondParagraph,
        galleryImages
    } = useHomepage();

    useEffect(() => {
        getHomeInfo();
    }, []);

    return (
        <section className="home_main">
            <img id='titulo' src='/EBACONTEMPORANEA.png' />

            <div className="firstPost">
                <Home_post 
                    title={firstParagraph.title}
                    text={firstParagraph.text}
                    direction="left"
                    buttonLink={firstParagraph.buttonLink}
                />
            </div>

            <Slider imgs={galleryImages} />

            <div className="secondPost">
                <Home_post 
                    title={secondParagraph.title}
                    text={secondParagraph.text}
                    direction="right"
                    buttonLink={secondParagraph.buttonLink}
                />
            </div>
        </section>
    )
}