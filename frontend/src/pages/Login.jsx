import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Si usas token o info en localStorage, limpia aquí:
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');

    navigate('/'); // redirige a landing page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await loginUser(email, password);

    if (result.success) {
      navigate('/dashboard');
    } else {
      alert('Error en login: ' + result.message);
    }
  };

  return (
    <div className="login-container">
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Correo electrónico" required />
          <input name="password" type="password" placeholder="Contraseña" required />
          <button type="submit" className="login-button">Iniciar sesión</button>
          
        </form>
        <button onClick={handleLogout} className="botExit">
            Regresar
        </button>
      </div>
    </div>
  );
}



