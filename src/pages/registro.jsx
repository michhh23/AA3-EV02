// useState guarda datos que cambian, aquí si la contraseña se ve o no
import { useState } from 'react';
// Row y Col acomodan la pantalla en columnas y Form trae los campos de Bootstrap
import { Row, Col, Form } from 'react-bootstrap';
// Link es para ir a otra página y useNavigate para cambiar de página desde el código
import { Link, useNavigate } from 'react-router-dom';

// PANTALLA DE REGISTRO
// Formulario para crear una cuenta nueva con nombre, usuario,
// contraseña y teléfono
function Registro() {
  // Si la contraseña se ve o se oculta. Empieza oculta
  const [verPassword, setVerPassword] = useState(false);
  // Sirve para mandar al usuario a otra página
  const navegar = useNavigate();

  // MOSTRAR U OCULTAR LA CONTRASEÑA
  const toggleRegPassword = () => {
    setVerPassword(!verPassword);
  };

  // ENVIAR EL REGISTRO
  // Antes estaba en script.js. Evita que la página se recargue,
  // avisa que se envió el código y pasa al login
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert('¡Código de verificación enviado al teléfono registrado!');
    navegar('/login');
  };

  return (
    <div className="pagina">

      {/* BARRA DE ARRIBA */}
      <header className="navbar">
        <div className="logo">ASPANU</div>
        <div className="nav-right">
          <div className="search-box">
            <input type="text" placeholder="Buscar..." />
            <button className="search-btn">🔍</button>
          </div>
          <button className="menu-btn">☰</button>
        </div>
      </header>

      {/* La pantalla se divide en dos con Row y Col de Bootstrap */}
      <Row as="main" className="login-container g-0">

        <Col as="section" md={6} className="login-image-section">
          <img src="/assets/planeta-clima.png" alt="Ilustración Clima y Tierra" className="hero-img" />
        </Col>

        <Col as="section" md={6} className="login-form-section">

          <h2>REGISTRO</h2>

          {/* FORMULARIO. Todos los campos son obligatorios por el required */}
          <Form id="form-registro" onSubmit={manejarEnvio}>
            <div className="grupo-campo">
              <Form.Control type="text" id="nombreCompleto" placeholder="Nombre Completo" required />
            </div>

            <div className="grupo-campo">
              <Form.Control type="text" id="nombreUsuario" placeholder="Nombre Usuario" required />
            </div>

            <div className="grupo-campo password-group">
              <Form.Control type={verPassword ? 'text' : 'password'} id="regPassword" placeholder="Contraseña" required />
              <span className="toggle-password" onClick={toggleRegPassword}>👁️</span>
            </div>

            <div className="grupo-campo">
              <Form.Control type="tel" id="telefono" placeholder="Telefono" required />
            </div>

            <button type="submit" className="btn-submit">Enviar Codigo</button>
          </Form>

          <div className="login-links">
            <p>¿Ya tienes una cuenta? <Link to="/login" className="link-register">Inicia sesión</Link></p>
          </div>

        </Col>

      </Row>
    </div>
  );
}

export default Registro;