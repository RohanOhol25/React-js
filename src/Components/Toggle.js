import React, { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const darkModeStyles = {
        backgroundColor: '#333',
        color: '#FFF',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };

    const lightModeStyles = {
        backgroundColor: '#FFF',
        color: '#000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };
   return (
        <div style={isDarkMode ? darkModeStyles : lightModeStyles}>
            <button className='btn m-auto px-5 py-2 text-center' onClick={handleToggle}>
                {isDarkMode ?<IoSunny />: <FaMoon/>}
            </button>
        </div>
    );
};

export default DarkModeToggle;