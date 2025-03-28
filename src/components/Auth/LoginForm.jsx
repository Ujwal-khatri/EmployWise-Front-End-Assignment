import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/reqres';
import '../../styles/Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      navigate('/users');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
         
          <div className="email-input">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required />
          </div>
          
        </div>
        <div className="form-group">
          <label>Password</label>
          
          <div className="password-input">
          <input type="password" value={password}onChange={(e) => setPassword(e.target.value)}required />
          </div>
          
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
