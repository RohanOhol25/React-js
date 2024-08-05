<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Login from './Components/Login'
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoginView, setIsLoginView] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleRegister = (username, password) => {
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
    setIsLoginView(true);
    toast.success('Registration successful! Please log in.');
  };

  const handleLogin = (username, password) => {
    const savedUser = localStorage.getItem('user');
    const savedPassword = localStorage.getItem('password');
    if (username === savedUser && password === savedPassword) {
      setUser(username);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    setUser(null);
    toast.info('Logged out!');
  };

  return (
    <div className="App">
      {!user ? (
        <div>
          {isLoginView ? (
            <Login onLogin={handleLogin} onToggleView={() => setIsLoginView(false)} />
          ) : (
            <Register onRegister={handleRegister} onToggleView={() => setIsLoginView(true)} />
          )}
        </div>
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
      <ToastContainer />
=======
import './App.css'; 
import Counter from './Components/Counter';
import ToggleVisibility from './Components/Toggle';
import InputFieldLogger from './Components/Inputfield';
import DragAndDrop from './Components/Drag&Drop';
import Form from './Components/FormSubmission';

function App() {
  return (
    <div>
      <Counter />
      <ToggleVisibility />
      <InputFieldLogger />
      <DragAndDrop />
      <Form />
>>>>>>> cdb526f753fe3178580e4ecabe119dd6d5e21a48
    </div>
  );
}

export default App;
