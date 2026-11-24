// useState guarda datos que cambian, aquí lo que se escribe, si la contraseña se ve y los errores
import { useState } from 'react';
// Row y Col acomodan la pantalla en columnas y Form trae los campos de Bootstrap
import { Row, Col, Form } from 'react-bootstrap';
// Link es para ir a otra página y useNavigate para cambiar de página desde el código
import { Link, useNavigate } from 'react-router-dom';

// PANTALLA DE REGISTRO
// Formulario para crear una cuenta nueva con nombre, usuario,
// contraseña y teléfono
function Registro() {
  // Lo que el usuario escribe en los campos que se validan
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  // Si la contraseña se ve o se oculta. Empieza oculta
  const [verPassword, setVerPassword] = useState(false);
  // Mensajes de error de cada campo. Empieza sin errores
  const [errores, setErrores] = useState({});
  // Sirve para mandar al usuario a otra página
  const navegar = useNavigate();

  // MOSTRAR U OCULTAR LA CONTRASEÑA
  const toggleRegPassword = () => {
    setVerPassword(!verPassword);
  };

  // VALIDAR LOS DATOS
  // Revisa el nombre, la contraseña y el teléfono.
  // Devuelve verdadero si no hay ningún error
  const validar = () => {
    const nuevosErrores = {};

    // El nombre solo puede tener letras, tildes, la ñ y espacios
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombreCompleto)) {
      nuevosErrores.nombre = 'El nombre solo debe tener letras, sin números ni símbolos';
    }

    // La contraseña debe tener mínimo 8 caracteres
    if (password.length < 8) {
      nuevosErrores.password = 'La contraseña debe tener mínimo 8 caracteres';
    }

    // El teléfono solo puede tener números y deben ser 10
    if (!/^[0-9]+$/.test(telefono)) {
      nuevosErrores.telefono = 'El teléfono solo debe tener números';
    } else if (telefono.length !== 10) {
      nuevosErrores.telefono = 'El teléfono debe tener 10 números';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // ENVIAR EL REGISTRO
  // Si los datos están bien avisa que se envió el código y pasa al login,
  // si no se quedan los mensajes de error debajo de cada campo
  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!validar()) {
      return;
    }

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

          {/* FORMULARIO. Todos los campos son obligatorios por el required
              e isInvalid pone el borde rojo cuando el campo tiene error */}
          <Form id="form-registro" onSubmit={manejarEnvio}>
            <div className="grupo-campo">
              <Form.Control
                type="text"
                id="nombreCompleto"
                placeholder="Nombre Completo"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                isInvalid={!!errores.nombre}
                required
              />
              {errores.nombre && <span className="texto-error">{errores.nombre}</span>}
            </div>

            <div className="grupo-campo">
              <Form.Control type="text" id="nombreUsuario" placeholder="Nombre Usuario" required />
            </div>

            <div className="grupo-campo">
              <div className="password-group">
                <Form.Control
                  type={verPassword ? 'text' : 'password'}
                  id="regPassword"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errores.password}
                  required
                />
                <span className="toggle-password" onClick={toggleRegPassword}>👁️</span>
              </div>
              {errores.password && <span className="texto-error">{errores.password}</span>}
            </div>

            <div className="grupo-campo">
              <Form.Control
                type="tel"
                id="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                isInvalid={!!errores.telefono}
                required
              />
              {errores.telefono && <span className="texto-error">{errores.telefono}</span>}
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