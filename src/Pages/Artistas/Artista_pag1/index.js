import { Link } from 'react-router-dom';
import Artista_modelpage1 from '../../../Components/artista_modelpage1'


export default function Artista_pag1(){
   
    const informacoes={
        banner:'',
        foto:'ADass/ADass_p.jpg',
        artistname:"Angélica Dass",
        local:"Nasceu no Rio de Janeiro.",
        ondevive:"Vive e trabalha em Madrid, Espanha.",
        graduacao:['Graduação em Artes Cênicas - Indumentária(2003 - 2006)'],
        atalhonavegacao: "Atalho de Navegação",
        profissao:"",
        detalhestitulo: "Detalhes Acadêmicos",
        curriculolattes:"Currículo Lattes",
        dissertacao:"Dissertações",
        tese:"Tese",
        biografia:"Angélica Dass tem formação em Indumentária pela EBA-UFRJ e Estilismo pelo SENAI, possui mestrado em Jornalismo pela UNED e em Fotografia pela Escola EFTI na Espanha. Artista Visual, pesquisadora e humanitária nascida no Brasil, porém vive e trabalha na Espanha, Dass é reconhecida e premiada no mundo inteiro, tendo realizado residências e exposições em lugares como Itália, Suiça, EUA, Holanda, Equador, Irlanda, índia, Nigéria, Croácia, entre outros. O trabalho de Dass mescla sua prática como fotógrafa e ativista social, dessa combinação que surgiu o Humanæ, projeto que vem sendo desenvolvido desde 2012 onde a artista documenta, por meio de retratos, as diversas colorações de pele presentes no mundo, para além das denominações que vão do “preto” ao “branco”. O Humanæ, que atualmente conta com mais de 4000 fotografias de pessoas de 20 países diferentes, pode ser considerado o trabalho que caracteriza toda a obra de Dass, sempre propondo um diálogo sobre as questões sociais globais de maneira educativa e acessível.",
        galeria:['ADass/angelica_dass_obra1.jpg','ADass/angelica_dass_obra2.jpg','ADass/angelica_dass_obra3.jpg','ADass/angelica_dass_obra4.jpg','ADass/angelica_dass_obra5.jpg','ADass/angelica_dass_obra6.jpg'],
        youtube:"yt.png",
        site:"site.png"
    }

    return(
        <>
            <section>
                <Artista_modelpage1 info={informacoes}/>
            </section>
        </>
    ) 
};