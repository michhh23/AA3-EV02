// Link es para ir a otra página sin recargar el navegador
import { Link } from 'react-router-dom';

// MÓDULO DE NOTIFICACIONES 
function NotificacionesApi() {
  return (
    <div className="pagina alerta-page-bg">

      {/* BARRA DE ARRIBA. La flecha regresa a la selección de rol */}
      <header className="navbar navbar-notif">
        <div className="logo-container">
          <Link to="/roles" className="back-btn"><i className="fa-solid fa-arrow-left"></i></Link>
          <span className="logo">ASPANU</span>
        </div>
        <div className="nav-right">
          <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          <button className="user-btn"><i className="fa-solid fa-circle-user"></i></button>
        </div>
      </header>

      <main className="notificaciones-grid-2col">

        {/* COLUMNA IZQUIERDA. Envío por WhatsApp y el canal alternativo */}
        <div className="notif-col-left">
          <h2>Módulo de Envío Notificaciones<br />(API WhatsApp / SMS)</h2>

          <p className="notif-desc">
            Selecciona el canal de salida para transmitir la alerta climática y la recomendación técnica directamente al teléfono celular del productor registrado.
          </p>

          <button className="btn-red">Enviar Alerta por WhatsApp</button>

          <div className="whatsapp-box">
            <img src="/assets/mensaje (1).png" alt="WhatsApp" className="img-whatsapp" />
          </div>

          <div className="alt-channel">
            <p><strong>Canal Alternativo:</strong><br />SMS</p>
          </div>
        </div>

        {/* COLUMNA DERECHA. Vista previa del mensaje y envío por SMS */}
        <div className="notif-col-right">

          <div className="world-box">
            <img src="/assets/mundo.png" alt="Mundo Clima" className="img-world" />
          </div>

          <div className="preview-text-group">
            <h3>Vista Previa del Mensaje</h3>
            <p className="preview-msg">
              Lluvia fuerte en Tierralta.<br />
              Recomendación:<br />
              1. Limpia zanjas de drenaje.<br />
              2. No abones ni fumigues hoy.<br />
              3. Asegura el amarre del plátano.
            </p>
            <button className="btn-red btn-sms-fix">ENVIAR POR SMS</button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default NotificacionesApi;