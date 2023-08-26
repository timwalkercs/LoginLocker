import React, { useState } from 'react';
import { Container } from 'reactstrap';
import './SignUp.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [masterpass, setMasterpass] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            masterpass: masterpass,
        };

        try {
            console.log(JSON.stringify(newUser)); //print the JSON string 
            const response = await fetch('api/user/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
            } else {
                const data = await response.json();
                setMessage('Failed to register user. ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };


    return (
        <div className="outerDiv">
            <h2 id="header">User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id="userinput"
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        id="passinput"
                        placeholder="Master Password"
                        type="password"
                        value={masterpass}
                        onChange={(e) => setMasterpass(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                </form>
            <p>{message}</p>
        </div>
    );
}

export default SignUp;