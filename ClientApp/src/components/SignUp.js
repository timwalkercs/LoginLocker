import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
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
            console.log(JSON.stringify(newUser)); // Print the JSON string
            const response = await axios.post('/api/user/Register', newUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const data = response.data;
                setMessage(data.message);
            } else {
                const data = response.data;
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
                <legend>Create your username...</legend>
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
                <legend>and a secure Master Password.</legend>
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