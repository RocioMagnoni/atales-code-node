import { Link } from 'react-router-dom';
import logo from "../assets/img/images.png";


export default function LandingPage() {
  return (
    <div className="container">

       <div class="cuadro" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={logo} alt="Logo Atales" style={{ width: '60px', height: 'auto' }} />
          <h1 class="titulo" style={{ margin: 0 }}>Atales</h1>
        </div>
      </div>



      <h1>Bienvenidos a Atales-Dev</h1>
      <p style={{ textAlign: 'center' }}>Inicia sesión o regístrate para comenzar a gestionar.</p>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Registrar</Link>
      </div>
    </div>
  );
}



