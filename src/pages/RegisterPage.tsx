import React, { useState } from 'react';
import './RegisterPage.css';

export const RegisterPage = () => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const startRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
        const payload = {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email }),
        };

        fetch('/api/register', payload)
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch(e => { console.log(e) });

        e.preventDefault();
    }

    return (
        <form>
            <h3>Please provide the following information</h3>
            <div>
                <input
                    type='text'
                    name='Name'
                    placeholder='Mary'
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input
                    type='text'
                    name='Surname'
                    placeholder='Smith'
                    value={surname}
                    onChange={e => setSurname(e.target.value)} />
            </div>
            <div>
                <input
                    type='email'
                    name='Email'
                    placeholder='marysmith@email.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                An email will be sent to the above email with the link to
                continue the registration process.
            </div>
            <button onClick={e => startRegistration(e)}>Next</button>
        </form>
    );
}
