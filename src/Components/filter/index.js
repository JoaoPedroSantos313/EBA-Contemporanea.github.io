import { useState } from 'react';
import './style.css';

const DefaultLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const Filter = ({ letters = DefaultLetters, filterFunction }) => {
    
    const [currentLetter, setCurrentLetter] = useState();

    const filtrar = (letra) => {
        if (letra === currentLetter) {
            setCurrentLetter(null);
            filterFunction(1);
        } else {
            setCurrentLetter(letra);
            filterFunction(1, letra);
        }
    }

    return (
        <div className='abc_filter'>
            {letters?.map((item, index) => (
                <button 
                    className={currentLetter === item ? 'active-button' : ''}
                    key={index} 
                    onClick={() => filtrar(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}