import { Link } from 'react-router-dom';
import Artista_modelpage2 from '../../../Components/artista_modelpage2'



export default function Artista_pag2(){
   
    const informacoes={
        title:"Vogler",
        outrostextos: [
            {
              title: "MORAES, Alexandre Vogler de. Atrocidades maravilhosas: ação independente dearte no contexto público. Arte & Ensaios, v. 8, pp. 112-117, 2001.",
              url: 'https://google.com',
            },
            {
            title: "MORAES, Alexandre Vogler de. Fé em Deus / Fé em Diabo. Concinnitas (UERJ), v. 1, n. 10, pp. 133-142, 2007.",
              url: 'https://facebook.com',
            },
            {
              title: "MORAES, Alexandre Vogler de. Comentários sobre a Constituição de Acervos Públicos no Brasil e o Caso MAR. Concinnitas (Online) (Rio de Janeiro), v. 1, n. 28, pp. 61-75, 2016.",
              url: 'https://twitter.com',
            }
          ],
        entrevistasdestaque: [
            {
               title: "Alexandre Vogler (2009)",
               url: "https://www.youtube.com/watch?v=yaHy8ru4FS8",
            },
             
            {
                title: "Artistas indicados PIPA 2011: Alexandre Vogler",
                url: "https://www.youtube.com/watch?v=7TkrZ9Nx2CY&feature=emb_title",
             },

             {
                title: "PIPA 2014 - Alexandre Vogler",
                url: "https://www.youtube.com/watch?v=HhJpoLWu7aI&feature=emb_title",
             },
            
             {
                title: "PIPA 2016 | artistas indicados | Alexandre Vogler",
                url: "https://www.youtube.com/watch?v=yab5_2V7h-0&feature=emb_title",
             },

             {
                title: "Paulo Tiefenthaler e Alexandre Vogler participam de videochat na TV O TEMPO",
                url: "https://www.otempo.com.br/tempo-tv/paulo-tiefenthaler-e-alexandre-vogler-%20-participam-de-videochat-na-tv-o-tempo-3.18275",
             },

             {
                title: "Entrevista feita a Alexandre Vogler para o painel “Ações Independentes/Novas iniciativas nas artes visuais” por Gloria Ferreira",
                url: "http://www.alexandrevogler.com.br/texto/entrevista-feita-a-alexandre-vogler-%20-para-o-painel-acoes-independentesnovas-iniciativas-nas-artes-visuais-por-gloria-%20-ferreira/",
             },
          ],
        galeriascomerciais: [
            {
                title:"Anita Schwartz",
                url:"https://www.anitaschwartz.com.br/artista/alexandre-vogler/",
            }
        ],
        eventoscoletivo1: "Atrocidades Maravilhosas",
        eventoscoletivo2: "Imaginário Periférico",    
        premiosresidencias: [
            {
                title:"6° Prêmio Flaboyant, Salão Nacional de Arte de Goiás",
                url:"",
            }, 

            {
                title:"Indicado ao PIPA em 2011, 2012, 2014 e 2016",
                url:"https://www.premiopipa.com/pag/artistas/alexandre-vogler/",
            },
        ]
    }

    return(
        <>
            <section>
                <Artista_modelpage2 info={informacoes}/>
            </section>
        </>
    ) 
};