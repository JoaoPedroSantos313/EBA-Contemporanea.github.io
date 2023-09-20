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
        getHomeInfo
    } = useHomepage();

    useEffect(() => {
        getHomeInfo();
    }, []);
    return (
        <section className="home_main">
            <img id='titulo' src='/EBACONTEMPORANEA.png' />

            <div className="firstPost">
                <Home_post 
                    title="Sobre o Projeto"
                    text="EBA Contemporânea compreende um mapeamento de artistas visuais que se formaram na Escola de Belas Artes da UFRJ, desde a transferência da Escola para a Cidade Universitária, na Ilha do Fundão, em 1975. Divide-se entre a pesquisa e constituição de um banco de dados, disponibilizado nesta plataforma, e a realização de entrevistas, que estarão acessíveis na medida em que forem realizadas." 
                    direction="left"
                    buttonLink="/projeto"
                />
            </div>

            <Slider imgs={[
                { img: img1, id: 1, nome: 'Lorem Ipsum' },
                { img: img2, id: 2, nome: 'Lorem Ipsum' },
                { img: img3, id: 3 },
                { img: img4, id: 4 }
            ]} />

            <div className="secondPost">
                <Home_post 
                    title="Cidade Universitária"
                    text="Bairro da Zona Norte do Rio de Janeiro, localizado na Ilha do Fundão, às margens da Baía de Guanabara. Nele se localiza o campus principal da Universidade Federal do Rio de Janeiro."
                    direction="right"
                    buttonLink="/cidade_universitaria"
                />
            </div>
        </section>
    )
}