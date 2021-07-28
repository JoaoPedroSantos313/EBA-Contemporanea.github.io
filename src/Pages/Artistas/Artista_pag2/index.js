import { Link } from 'react-router-dom';
import Artista_modelpage2 from '../../../Components/artista_modelpage2'



export default function Artista_pag2(){
   
    const informacoes={
        banner:'',
        title:"Vogler",
        outrostextos: ["MORAES, Alexandre Vogler de. Atrocidades maravilhosas: ação independente dearte no contexto público. Arte & Ensaios, v. 8, pp. 112-117, 2001.", "MORAES, Alexandre Vogler de. Fé em Deus / Fé em Diabo. Concinnitas (UERJ), v. 1, n. 10, pp. 133-142, 2007.", "MORAES, Alexandre Vogler de. Comentários sobre a Constituição de Acervos Públicos no Brasil e o Caso MAR. Concinnitas (Online) (Rio de Janeiro), v. 1, n. 28, pp. 61-75, 2016."],
        entrevistasdestaque: ["Alexandre Vogler (2009)", "Artistas indicados PIPA 2011: Alexandre Vogler", "PIPA 2014 - Alexandre Vogler", "PIPA 2016 | artistas indicados | Alexandre Vogler", "Paulo Tiefenthaler e Alexandre Vogler participam de videochat na TV O TEMPO", "Entrevista feita a Alexandre Vogler para o painel “Ações Independentes/Novas iniciativas nas artes visuais” por Gloria Ferreira"],
        galeriascomerciais: ["Anita Schwartz"],
        eventoscoletivos: ["Atrocidades Maravilhosas", "Imaginário Periférico"],
        premiosresidencias: ["6° Prêmio Flaboyant, Salão Nacional de Arte de Goiás", "Indicado ao PIPA em 2011, 2012, 2014 e 2016"]
    }

    return(
        <>
            <section>
                <Artista_modelpage2 info={informacoes}/>
            </section>
        </>
    ) 
};