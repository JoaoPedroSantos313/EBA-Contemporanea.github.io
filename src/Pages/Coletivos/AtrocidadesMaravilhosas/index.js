import { Link } from 'react-router-dom';
import Coletivo_modelpage from '../../../Components/coletivo_modelpage'

export default function AtrocidadesMaravilhosas(){

    const informacoes={
        title:'Atrocidades Maravilhosas',
        participantes: [
            {
                title: 'Roberto',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            }, 

            {
                title: 'Evelyn',
                url: 'https://www.amazon.com.br/progress-tracker/package/ref=ppx_od_dt_b_track_package?_encoding=UTF8&itemId=mmnilrornomsqn&orderId=702-2696184-9853001&vt=ORDER_DETAILS',
            }, 
        ],
        sobre_title: 'Atrocidades Maravilhosas',
        sobre: 'O projeto Atrocidades Maravilhosas surgiu a partir da pesquisa de mestrado de Alexandre Vogler. Em abril do ano 2000, Vogler deu início à primeira e mais conhecida ação do Atrocidades Maravilhosas, reunindo um grupo de 20 artistas (em maioria estudantes da EBA- UFRJ) que espalharia cartazes lambe-lambes em zonas de grande circulação de motoristas, passageiros e pedestres. Cada participante desenvolveu uma imagem para ser reproduzida em grande escala, com tiragem de 250 cópias. Muros, telefones públicos e rampas receberam intervenções do grupo, que, por meio da aplicação dos 250 cartazes, formavam painéis de aproximadamente 120 metros, cujo conteúdo se diferenciava de acordo com a poética de cada. Os integrantes variam de acordo com as diferentes ações. Em 2001 houve continuidade trabalhos em lambe-lambe em um tapume localizado na Lapa. O grupo participou de exposições como o 27º Panorama da Arte Brasileira (MAM-SP, 2001), Caminhos do Contemporâneo: 1952/2002 (Paço Imperial, RJ, 2002) e Mídia Tática Brasil (Casa das Rosas, SP, 2003).',
        sobre_assing: 'TF',
        galeria: ['https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png', 'https://static.wixstatic.com/media/8b4bc0_3c8b995516ae477f84e931065c7d754c~mv2.png'],
        links: [
            {
                title: 'Link1',
                url: "https://www.youtube.com/watch?v=_io15ZQlod0&list=RDMMUXgSy7Q1McY&index=6"
            },

            {
                title: 'Link2',
                url: "https://www.youtube.com/watch?v=uJ56kmVjFpI&list=RDMMUXgSy7Q1McY&index=7"
            },
        ]
    }

    return(
        <>           
            <section>
                <Coletivo_modelpage info={informacoes}/>
            </section>
        </>
    )
};