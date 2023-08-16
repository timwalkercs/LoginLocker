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
            <div>
                <form method="post" >
                    <fieldset>
                        <legend>Please enter your account information.</legend>
                        <div>
                            <label for="Username">Username:</label>
                            <input type="text" name="CompanyName" value="" />
                        </div>
                        <div>
                            <label for="Masterpass">Password:</label>
                            <input type="text" name="ContactName" value="" />
                        </div>
                        <div>
                            <label>&nbsp;</label>
                            <input type="submit" value="Sign In" class="submit" />
                        </div>
                    </fieldset>
                </form>
                <p>Dont have an account? <a href="/sign-up">Sign Up!</a></p>
                
            </div>
        </div>
    );
};

export default SignIn;