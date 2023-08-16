import React, { useEffect } from 'react';

function Home() {

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
            <h1>Project In Development!!!</h1>
            <p>Current State:</p>
            <ul>
                <li>Rough Sign Up page has been made but encountering some errors....</li>
                <li>Submitting the form is yielding a 404 error claiming the route to the UserController/Register method cannot be found.</li>
                <li>ChatGPT servers are burining down from my begging for help.</li>
            </ul>
        </div>
    );
};

export default Home;