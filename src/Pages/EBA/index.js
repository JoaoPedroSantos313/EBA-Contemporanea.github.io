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
    return(
        <main>
            <h1>EBA - Linha do Tempo</h1>
            <br />
            <div className="timeline">
                <TimelinePoint year={2000} isUp />
                <TimelinePoint year={2001} /> 
                <TimelinePoint year={2002} isUp />
            </div>
            <br/>
            <ul className='information'>
                <li id="2000">
                    dois mil lololol
                </li>
                <br />
                <li id="2001">lalala dois mil e um</li>
                <br />
                <li id="2002">eh sobre dois mil e dois</li>
            </ul>
        </main>
    ) 
};