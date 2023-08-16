import React, { useEffect } from 'react';

function SignIn() {

    //useEffect code block added by ChatGPT when asked to convert original class component to functional
    useEffect(() => {
        // Code here will be equivalent to componentDidMount
        // You can perform any necessary setup or fetch data
        // and clean up in the returned function for componentWillUnmount
        return () => {
            // Clean up code here will be equivalent to componentWillUnmount
        };
    }, []);

    return (
        <div>
            <h1>Sign In Page</h1>
        </div>
    );
};

export default SignIn;