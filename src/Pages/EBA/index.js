
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from  "@fortawesome/free-solid-svg-icons";
import './eba.css';

const TimelinePoint = ({ year, isUp = false }) => {
    return (
        <a className='timelineFullPoint' href={`#${year}`}>
            <p className='yearPoint'>{isUp && year}</p>
            <div className='point'>
                <FontAwesomeIcon icon={faCircle} size={16} />
            </div>
            <p className='yearPoint'>{!isUp && year}</p>
        </a>
    );
}

export default function EBA(){
    const isUnderConstruction = true;

    return (
        <main>
            {isUnderConstruction ? 
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Página Em Construção</h1>
            : <><h1>EBA - Linha do Tempo</h1><br /><div className="timeline">
                    <TimelinePoint year={2000} isUp />
                    <TimelinePoint year={2001} />
                    <TimelinePoint year={2002} isUp />
                </div><br /><ol className='information'>
                        <li id="2000">
                            • Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </li>
                        <br /><br />
                        <br /><br />
                        <li id="2001"> • It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                        <br /><br />
                        <br /><br />
                        <li id="2002">• Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </li>
                    </ol></>}
        </main>
    ) 
};