import React, { useEffect } from 'react';
import Home_post from '../../Components/home_post';
import Slider from '../../Components/Slider';
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