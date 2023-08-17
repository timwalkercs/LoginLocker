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
                <li>Submitting the form is now yielding a 400 error (Bad POST Request)</li>
                <li>Test method added to UserController which shows the fron and back ends do in fact reach each other. (see button in sign-up page)</li>
                <li>I am single-handedly burning the GPT servers to the ground</li>
            </ul>
        </div>
    );
};

export default Home;