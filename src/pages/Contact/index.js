import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const ContactPage = () => {
    // Create state variables and initial them with empty string
    
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // target input 
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // setting the state for all the input 
        if (inputType === 'username') {
            setName(inputValue);
        }
        if (inputType === 'email') {
            setEmail(inputValue);
        }
        if (inputType === 'message') {
            setMessage(inputValue);
        }
    };
    // validating email address
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleFormSubmit = (e) => {
        // Prevent browser from refreshing the page after click submit/sent
        e.preventDefault();

        // Check if all the input are invalid
        if (!username || !validateEmail(email) || !message) {
            setErrorMessage('Name, Email or Message is invalid');
            // this will exit if something went wrong
            return;
            // set error message if input is invalid
        } else {
            setErrorMessage('Message sent!');
        }
        // set empty input if everything ok
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className='contact-container'>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <form className="form">
                    <h2 className='contact-heading'>Contact Form</h2>
                    <div className='input-container'>
                        <input className='form-control'
                            value={username}
                            name="username"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                        />
                        <input className='form-control'
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="email"
                        />
                        <textarea className='text-area'
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="message"
                        />
                        <button className='submit' type="button" onClick={handleFormSubmit}>Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default ContactPage;