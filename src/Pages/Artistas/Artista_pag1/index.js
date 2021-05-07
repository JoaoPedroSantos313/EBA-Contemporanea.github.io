import { Link } from 'react-router-dom';
import Artista_modelpage1 from '../../../Components/artista_modelpage1'
import './artistapag1.css';

export default function Artista_pag1(){
    const informacoes={
        banner:'',
        title:"Artista",
        foto:'https://static.wixstatic.com/media/8b4bc0_9ffd147fc9c1490088c89002622734a0~mv2.png/v1/fill/w_241,h_325,al_c,q_85,usm_0.66_1.00_0.01/imagem.webp',
        artistname:"Alexandre Vogler",
        local:"Nasceu no Rio de Janeiro",
        ondevive:"Vive e trabalha no Rio de Janeiro",
        graduacao:['Graduado em Pintura (1992-1996)','Mestre em Artes Visuais (1998-2000)','Doutor em Artes Visuais (2014-2019)'],
        profissao:"Trabalha em faculdade",
        curriculolattes:"Currículo Lattes",
        dissertacao:"Dissertaçãoe",
        tese:"Tese",
        biografia:"Alexandre Volger é formado em Pintura pela EBA-UFRJ (1996), além de ser mestre (2000) e doutor (2019) em Linguagens Visuais pelo PPGAV-UFRJ. Na década de 1990 fez parte do Atelier 491 em Santa Teresa. Como parte de seu projeto de mestrado, que investiga a percepção da imagem pelo espectador em movimento, idealizou a ação coletiva Atrocidades Maravilhosas no ano 2000. Entre 2001 e 2002 coproduziu o evento Zona Franca, na Fundição Progresso. Entre outros coletivos que integrou, estão o Rradial e o Tupinambá Lambido (em atividade). Como parte de sua pesquisa de doutorado (Monumento-contra-monumento), desenvolveu em um espaço ocioso do galpão do PPGAV-UFRJ o Horto que voa, uma agrofloresta com 50 espécies plantadas, que também abrange o projeto MACAs: esculturas/mobiliários que agenciam a fruição de elementos naturais naquele ambiente. Vogler desenvolve desde 2000 trabalhos em contexto público e sistemas de comunicação. Atualmente é professor no Instituto de Artes da Uerj. (TF)",
        galeria:['https://static.wixstatic.com/media/8b4bc0_82ccb9875e4249df822792886c3454e5~mv2.jpg','https://static.wixstatic.com/media/8b4bc0_66bdf6e9fd124f7ba3bfe41d3dcf60cf~mv2.jpg','https://static.wixstatic.com/media/8b4bc0_49cab035eb6c46f78228c94d6b5edcdc~mv2.jpg'],
        site:"fb.png",
        youtube:"yt.png"
    }

    return(
        <>
            <section>
                <Artista_modelpage1 info={informacoes}/>
            </section>
        </>
    ) 
};