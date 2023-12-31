import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './SignUp.css';

function SignIn() {
    const [username, setUsername] = useState('');
    const [masterpass, setMasterpass] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const attemptedUser = {
            username: username,
            masterpass: masterpass,
        };

        try {
            console.log(JSON.stringify(attemptedUser)); // Print the JSON string
            const response = await axios.post('/api/user/SignIn', attemptedUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const data = response.data;
                setMessage(data.message);
            } else {
                setMessage('Failed to sign in.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    return (
        <div className="outerDiv">
            <h1 id="header">Sign In</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <legend>Please enter your account information.</legend>
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
                            type="password" // Change this to 'password' to hide the password
                            value={masterpass}
                            onChange={(e) => setMasterpass(e.target.value)}
                            required
                        />
                    </div>
                    <input type="submit" value="Sign In" />
                </form>
                <p>Don't have an account? <a href="/sign-up">Sign Up!</a></p>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default SignIn;