// Link es para ir a otra página sin recargar el navegador
import { Link } from 'react-router-dom';

// SELECCIÓN DE ROL
// Aparece después de iniciar sesión. Cada tarjeta lleva a la página de su rol:
// agrónomo a crear alerta, gerencia a notificaciones y productor a la alerta
function Roles() {
  return (
    <div className="pagina">

      {/* BARRA DE ARRIBA */}
      <header className="navbar">
        <div className="logo-container">
          <button className="menu-btn">☰</button>
          <span className="logo">ASPANU</span>
          <div className="vertical-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="nav-right">
          <button className="search-btn">🔍</button>
          <button className="user-btn">👤</button>
        </div>
      </header>

      {/* MAPA */}
      <section className="map-banner">
        <img src="/assets/mapa-banner.png" alt="Mapa de cobertura" className="map-img" />
      </section>

      {/* TARJETAS DE ROL. Cada una es un Link a la página de ese rol */}
      <main className="roles-container">

        <Link to="/crear-alerta" className="role-card">
          <div className="card-img-wrapper">
            <img src="/assets/agronomo.png" alt="Agrónomo" />
          </div>
          <h3>Agrónomo</h3>
        </Link>

        <Link to="/notificaciones-api" className="role-card">
          <div className="card-img-wrapper">
            <img src="/assets/gerencia.png" alt="Gerencia" />
          </div>
          <h3>Gerencia</h3>
        </Link>

        <Link to="/alerta-detalle" className="role-card">
          <div className="card-img-wrapper">
            <img src="/assets/productor.png" alt="Productor" />
          </div>
          <h3>Productor</h3>
        </Link>

      </main>
    </div>
  );
}

export default Roles;