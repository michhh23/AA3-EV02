/**
Pantalla de inicio de sesión. Solo deja entrar al usuario
 */
import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap'; 
import { Link, useNavigate } from 'react-router-dom';

/** Usuarios permitidos */
const USUARIOS = {
  productor: { password: '1234', rol: 'productor' },
};

function Login() {
  const [usuario, setUsuario] = useState(''); // texto escrito en el campo USUARIO
  const [password, setPassword] = useState(''); // texto escrito en el campo Contraseña
  const [verPassword, setVerPassword] = useState(false); // false -> la contraseña empieza oculta
  const [mostrarError, setMostrarError] = useState(false); // false -> la alerta empieza oculta
  const navegar = useNavigate();

  /** Muestra u oculta la contraseña */
  const togglePassword = () => {
    setVerPassword(!verPassword); // !verPassword -> invierte el valor: true <-> false
  };

  /** Oculta la alerta de error */
  const cerrarAlerta = () => {
    setMostrarError(false);
  };

  /**
   * Valida el usuario y la contraseña.
   * Si son correctos entra a /inicio; si no, muestra la alerta de error.
   * @param {Event} e - evento submit
   */
  const manejarEnvio = (e) => {
    e.preventDefault(); // preventDefault -> evita que la página se recargue

    const usuarioLimpio = usuario.trim().toLowerCase().replace(/\s+/g, ''); // trim -> quita espacios a los lados, toLowerCase -> todo a minúscula, replace(/\s+/g,'') -> quita los espacios de en medio
    const cuenta = USUARIOS[usuarioLimpio]; // busca el usuario dentro del objeto USUARIOS

    if (!cuenta || cuenta.password !== password.trim()) { // cunta -> el usuario no existe
      setMostrarError(true);
      return;
    }

    setMostrarError(false);
        navegar('/roles'); // entra a la selección de rol
  };

  return (
    <div className="pagina">

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

      <Row as="main" className="login-container g-0">

        <Col as="section" md={6} className="login-image-section"> {/* md={6} -> mitad de ancho en computador, completo en celular */}
          <img src="/assets/planeta-clima.png" alt="Ilustración Clima y Tierra" className="hero-img" />
        </Col>

        <Col as="section" md={6} className="login-form-section">

          <div id="error-alert" className={mostrarError ? 'alert-box' : 'alert-box hidden'}> {/* condición ? si : no -> agrega "hidden" cuando no hay error */}
            <div className="alert-icon">⚠️</div>
            <div className="alert-content">
              <h3>¡CONTRASEÑA INCORRECTA!</h3>
              <p>Verifique su contraseña o establezca una nueva</p>
            </div>
            <button className="close-btn" onClick={cerrarAlerta}>×</button>
          </div>

          <h2>INICIAR SESION</h2>

          <Form id="form-login" onSubmit={manejarEnvio}>
            <div className="grupo-campo">
              <Form.Control
                type="text"
                id="usuario"
                placeholder="USUARIO"
                value={usuario} // value -> el campo muestra lo que hay en el estado
                onChange={(e) => setUsuario(e.target.value)} // onChange -> cada tecla actualiza el estado
                required
              />
            </div>

            <div className="grupo-campo password-group">
              <Form.Control
                type={verPassword ? 'text' : 'password'}
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={togglePassword}>👁️</span>
            </div>

            <button type="submit" className="btn-submit">Iniciar sesión</button>
          </Form>

          <div className="login-links">
            <a href="#" className="link-forget">Olvidé mi contraseña</a>
            <p>¿Todavía no tienes una cuenta? <Link to="/registro" className="link-register">Regístrate</Link></p>
          </div>

        </Col>

      </Row>
    </div>
  );
}

export default Login;