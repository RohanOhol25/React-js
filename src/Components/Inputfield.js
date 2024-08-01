import React, { useState } from 'react';

const InputFieldLogger = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px',}}>
            <h1>Input Field Logger</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <h4 className='my-5 '>{inputValue}</h4>
        </div>
    );
};

export default InputFieldLogger;
