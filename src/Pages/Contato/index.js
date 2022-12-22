import { useState } from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contato.css';

export default function Contato() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (info, inputName) => {
        setContact(curr => ({ ...curr, [inputName]: info }));
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(contact);
    }

    return (
        <main className="contato_main">
            <img className="cover-img" src='/EBACONTEMPORÂNEA.png' width="100%" />
            
            <h2 className="form-title">Entre em contato conosco</h2>

            <form className="form-container" onSubmit={submit}>
                <input 
                    className="form-input" 
                    placeholder="Nome (obrigatório)" 
                    required
                    onChange={({ target }) => handleChange(target.value, 'name')}
                />
                <input 
                    className="form-input" 
                    placeholder="E-mail (obrigatório)"
                    type="email"
                    required
                    onChange={({ target }) => handleChange(target.value, 'email')} 
                />
                <textarea 
                    className="form-input" 
                    rows="10"
                    placeholder="Sua mensagem..." 
                    required
                    onChange={({ target }) => handleChange(target.value, 'message')}
                />
                <div className='form-submit-section'>
                    <button className="form-submit" type="submit">
                        <h2>Enviar</h2>
                    </button>
                </div>
            </form>
        </main>
    )
};