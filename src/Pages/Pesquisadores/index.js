import Pesquisadores from '../../Components/pesquisadores';
import usePesquisadores from '../../contexts/pesquisadores';
import { CircularProgress } from '@material-ui/core';
import './style.css';
import { useEffect } from 'react';

export default function pesquisadores() {
    const {
        coordenador,
        bolsistasAnteriores,
        bolsistasAtuais,
        voluntarios,
        isLoading,
        getResearchers
    } = usePesquisadores();

    useEffect(() => {
        getResearchers();
    }, [])

    return (
        isLoading
            ? <CircularProgress />
            : (
                <section className="container">
                    {coordenador.length > 0 && (
                        <div className="role-section">
                            <h2 className='title-section'>Coordenador</h2>
                            {coordenador.map(i => <Pesquisadores pesquisador={i} />)}
                        </div>
                    )}
                    {bolsistasAtuais.length > 0 && (
                        <div className="role-section">
                            <h2 className='title-section'>Bolsistas Atuais</h2>
                            {bolsistasAtuais.map(i => <Pesquisadores pesquisador={i} />)}
                        </div>
                    )}
                    {bolsistasAnteriores.length > 0 && (
                        <div className="role-section">
                            <h2 className='title-section'>Bolsistas Anteriores</h2>
                            {bolsistasAnteriores.map(i => <Pesquisadores pesquisador={i} />)}
                        </div>
                    )}
                    {voluntarios.length > 0 && (
                        <div className="role-section">
                            <h2 className='title-section'>Voluntários</h2>
                            {voluntarios.map(i => <Pesquisadores pesquisador={i} />)}
                        </div>
                    )}

                    <h2 className='title-section'>Participações</h2>
                    <div className="names-container">
                        Alice Miada, André Chaves, Beatriz Lopes, Claudio Marques, Cynthia Seage,
                        Gabriel Mendes, Lucas Henrique Guimarães, Maíza França, Mônica Coster
                    </div>
                </section>
            )
    )
};