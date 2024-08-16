import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../components/auth/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Access AuthContext
  const { saveToken } = useContext(AuthContext);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://taskmanagement-backend-97sv.onrender.com/api/login', formData);
      if (response.status === 200) {
        const token = response.data.data.token;
        saveToken(token); // Save token using the context
        setSuccess('Login successful!');
        setFormData({ email: '', password: '' });

        // Navigate to the home page after successful login
        navigate('/');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      {/* Add a link to the registration page for users who are not registered */}
      <p className="not-registered">
        Not registered yet? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;
