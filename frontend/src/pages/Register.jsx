import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import '../styles/register.css';

export default function Register() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Si usas token o info en localStorage, limpia aquí:
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');

    navigate('/'); // redirige a landing page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const result = await registerUser(user);

    if (result.success) {
      alert('Registro exitoso');
      navigate('/login');
    } else {
      alert('Error: ' + result.message);
    }
  };

  return (
    <div class="register-container" >
      <h2>Registrate y comenza!</h2>
      
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" required />
        <input name="email" placeholder="Email" type="email" required />
        <input name="password" placeholder="Contraseña" type="password" required />
        <button type="submit" className="register-button">Registrar</button>
        
      </form>
      <button onClick={handleLogout} className="botExit">
          Regresar
        </button>
    </div>
  );
}


