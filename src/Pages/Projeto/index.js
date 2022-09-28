import React from 'react';

import './Projeto.css';

export default function Projeto(){
    return(
        <>
            <main>
                <h1>O Projeto</h1>
                <p className="p_normal">O projeto EBA Contemporânea teve início em 2016, 
                    a partir das comemorações dos 200 anos da Escola de Belas Artes 
                    da UFRJ. Na época, seu título era "Contagem regressiva para os 200, 
                    começando ao contrário" e já propunha a realização de um mapeamento 
                    de artistas visuais formados pela Escola, além de algumas iniciativas 
                    coletivas, envolvendo vínculos com o que se nomeou "história recente 
                    da EBA", desde seu deslocamento para a Cidade Universitária, na Ilha 
                    do Fundão, em 1975, até o dias atuais, de modo a dar maior 
                    visibilidade à produção de arte contemporânea, na e a partir da Escola.</p>
                
                <br/>
            <div className="text_img">
                <p className="p_img">Com o desenvolvimento do projeto, frente a inúmeras
                    dificuldades encontradas desde então - como o
                    incêndio ocorrido no prédio da Reitoria e a pandemia
                    de COVID-19 - optou-se pela reconfiguração do escopo
                    inicial da pesquisa, que agora divide-se em uma
                    primeira etapa, centrada na concepção deste site, um
                    banco de dados da pesquisa disponível para ampla
                    consulta, e em uma segunda, correspondendo a
                    entrevistas com artistas, a serem realizadas no
                    futuro, de modo a constituir novas fontes de pesquisa.</p>
                
                <img id="projetoIMG" src="https://static.wixstatic.com/media/8b4bc0_d7649933a9a147f7a435d9968b618197~mv2.jpg/v1/fill/w_429,h_295,al_c,q_80,usm_0.66_1.00_0.01/ebacontemporanea.webp" width="400px"></img>
            </div>
                <br/>
                <p className="p_normal">Até o momento, o grupo formado por estudantes de graduação 
                    da Escola de Belas Artes da UFRJ fez um primeiro mapeamento, 
                    compreendendo 208 artistas e 12 coletivos/eventos/espaços autônomos, 
                    da passagem pelos diversos cursos de graduação à pós-graduação 
                    (mestrado, doutorado e pós-doutorado) no Programa de Pós-graduação 
                    em Artes Visuais - PPGAV/UFRJ. Esse quantitativo representa um 
                    recorte metodológico inicial, e tenderá a crescer, a partir do 
                    desenvolvimento de etapas futuras da pesquisa.</p>

                <br/>

                <p className="p_normal">Assim, o projeto EBA Contemporânea objetiva dar maior 
                    visibilidade a artistas visuais que se formaram na Escola de 
                    Belas Artes e a certos aspectos da história recente da instituição, 
                    sem perder de vista as contradições, conflitos e problemáticas 
                    inerentes a esse processo. Não pretende instituir um tom celebratório, 
                    mas articular múltiplas vozes, que constituem fragmentos dessa história, 
                    do ponto de vista de artistas. Ao mesmo tempo, reforçar um caráter plural 
                    da Escola, apresentando a produção contemporânea como parte significativa 
                    desse contexto, junto a outras formas de atuação que caracterizam a EBA.</p>

                <p><b>O projeto EBA Contemporânea contou com apoio da Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do Rio de Janeiro - FAPERJ, a partir do Programa Auxílio à Pesquisa (APQ1), 2019-2022.</b></p>
                
            </main>
        </>
    ) 
};