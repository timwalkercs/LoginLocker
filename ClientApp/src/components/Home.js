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
            <p>Things to do:</p>
            <ul>
                <li>Convert template-generated class components to functional (Home, NavMenu, etc.)</li>
                <li>Test DB to see in it works</li>
                <li>Create a Login page</li>
            </ul>

            <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        </div>
    );
};

export default Home;