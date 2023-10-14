import { useEffect } from 'react';
import Slider from '../../Components/Slider';
import useProject from '../../contexts/project';
import './Projeto.css';

export default function Projeto(){
    const { 
        getProjectInformation,
        fullText,
        boldText,
        galleryImages
    } = useProject();

    useEffect(() => {
        getProjectInformation();
    }, []);

    return (
        <>
            <main>
                <h1>O Projeto</h1>
                <Slider imgs={galleryImages} />
                <p className="p_normal" dangerouslySetInnerHTML={{ __html: fullText }}></p>
                <br /><br /> 
                <p className='p_normal p_bold'>
                    {boldText}
                </p>
            </main>
        </>
    ) 
};