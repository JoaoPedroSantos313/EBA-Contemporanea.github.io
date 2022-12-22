import Slider from '../../Components/Slider';
import img1 from '../../Components/Slider/Imgs/img1.jpg'
import img2 from '../../Components/Slider/Imgs/img2.jpg'
import img3 from '../../Components/Slider/Imgs/img3.jpg'
import img4 from '../../Components/Slider/Imgs/img4.png'
import './Projeto.css';

export default function Projeto(){
    return(
        <>
            <main>
                <h1>O Projeto</h1>
                <Slider 
                    imgs={[
                        { img: img1, id: 1, nome: 'teste1' },
                        { img: img2, id: 2, nome: 'teste1' },
                        { img: img3, id: 3, nome: 'teste1' },
                        { img: img4, id: 4, nome: 'teste1' }
                    ]}
                />
                <p className="p_normal">
                    O projeto EBA Contemporânea objetiva dar maior visibilidade a artistas visuais que se formaram na Escola de Belas Artes e a certos aspectos da história recente da instituição, sem perder de vista as contradições, conflitos e problemáticas inerentes a esse processo. Não pretende instituir um tom celebratório, mas articular múltiplas vozes, que constituem fragmentos dessa história, do ponto de vista de artistas. Ao mesmo tempo, busca reforçar o caráter plural da Escola, apresentando a produção contemporânea como parte significativa desse contexto, entre as demais atuações que caracterizam a EBA.
                    <br /> <br/>
                    O projeto teve início em 2016, a partir das comemorações dos 200 anos da Escola de Belas Artes da UFRJ. Na época, seu título era "Contagem regressiva para os 200, começando ao contrário" e já propunha a realização de um mapeamento de artistas visuais formados pela Escola, além de algumas iniciativas coletivas, envolvendo vínculos com o que se nomeou "história da EBA", do seu deslocamento para a Cidade Universitária, na Ilha do Fundão, em 1975, até o dias atuais. 
                    <br /> <br />
                </p>
                <p className='p_normal'>
                    Com o desenvolvimento da pesquisa, frente a inúmeras dificuldades encontradas desde então - como o incêndio ocorrido no prédio da Reitoria, em outubro de 2016, e a pandemia de COVID-19 -, optou-se pela reconfiguração de seu escopo inicial, que agora divide-se em uma primeira etapa, centrada na concepção deste site, um banco de dados disponível para ampla consulta, e em uma segunda, correspondendo à realização de entrevistas com artistas, que serão disponibilizadas gradualmente ao público, de modo a constituir novas fontes de pesquisa.
                    <br /><br />  
                    Até o momento, o grupo de pesquisadores e pesquisadoras formado por estudantes de graduação da Escola de Belas Artes da UFRJ fez um primeiro mapeamento, compreendendo o quantitativo atual de artistas - e de coletivos/eventos/espaços autônomos -, seja entre os diversos cursos de graduação da Escola, seja na pós-graduação, a partir do Programa de Pós-graduação em Artes Visuais - PPGAV/UFRJ. Assim, este quantitativo representa o recorte metodológico que delimita o raio de ação inicial da investigação, tendendo a crescer, a partir da continuidade desse mapeamento.
                </p>
                <br /><br /> 
                <p className='p_normal p_bold'>
                    O projeto EBA Contemporânea contou com apoio da Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do Rio de Janeiro - FAPERJ, a partir do Programa Auxílio à Pesquisa (APQ1), 2019-2022.
                </p>
            </main>
        </>
    ) 
};