import React, { useState } from 'react';

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
            const response = await fetch('User/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                console.log("OK"); //response was good
                const data = await response.json();
                setMessage(data.message);
            } else {
                console.log("NOT OK"); //response was bad
                setMessage('Failed to register user.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };


    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Masterpass:</label>
                    <input
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