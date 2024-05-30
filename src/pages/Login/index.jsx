import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorState, setErrorState] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: e.target.email.value,
        password: e.target.password.value
      };
      const { data, status } = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:v8VCVx1R/auth/login', body);
      if (status === 200) {
        navigate('/admin/dashboard');
        setTimeout(() => {
          window.location.reload();
        }, 1000); // 1 sekunddan so'ng qayta yuklash (1000 millisekund)
      }
      console.log(data.authToken);
      window.localStorage.setItem('AuthToken', data.authToken);
    } catch (error) {
      setErrorState(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            {errorState?.message === 'Request failed with status code 403' && (
              <p style={{ color: 'red', textAlign: 'center' }}>Email or Password is incorrect!</p>
            )}
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
