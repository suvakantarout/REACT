import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../App';
import { ThemeContext } from '../App';

// Step: 4 (Consumer ke ander jake consume kr lo) Here ChildC is the consumer
const ChildC = () => {
    const user = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme(){

        if(theme == 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }

    return (
        <div>
            Data: {user.name}
            <button onClick={toggleTheme}>
                Change Theme
            </button>
        </div>
    )
}

export default ChildC;
