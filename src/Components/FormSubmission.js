import React, { useState } from 'react';
import './Form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const submitform = (e) =>{
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        alert('Data saved to local storage');
        console.log('Form Data:', formData);          
    }

    return (
        <div className='container text-center my-5'>
            <h1 className='py-3'>Form Submission</h1>

            <form className='py-4'>
                <div >
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
                        />
                    </label>
                </div>
                <button onClick={submitform} className='btn btn-primary' type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Submit
                </button>
            </form>
            <div>
            </div>
        </div>
    );
};

export default Form
