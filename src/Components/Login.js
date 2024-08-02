import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Login({ onLogin, onToggleView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username, password);
    } else {
      toast.error('Please fill in both fields.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        /><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <button onClick={onToggleView}>Register</button>
      </p>
    </div>
  );
}

export default Login;
