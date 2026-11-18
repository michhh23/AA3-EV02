// Link para ir a otra página de la app sin recargar el navegador.
import { Link } from 'react-router-dom';

// PANTALLA DE INICIO

function Index() {
  return (
    <div className="pagina home-body">

      {/* BARRA DE ARRIBA con el logo, el buscador y el menú */}
      <header className="navbar-landing">
        <span className="logo-landing">ASPANU</span>

        <div className="search-box-landing">
          <input type="text" placeholder="Buscar..." />
          <button className="search-btn-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <button className="menu-landing-btn"><i className="fa-solid fa-bars"></i></button>
      </header>

      {/* MENÚ con los enlaces. Los que van a otra página usan Link */}
      <nav className="top-nav-landing">
        <div className="nav-left-links">
          <Link to="/">Home</Link>
          <a href="#">About</a>
          <a href="#">Sale</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-right-links">
          <Link to="/login">Login</Link>
          <Link to="/registro">Sign Up</Link>
        </div>
      </nav>

      {/* BIENVENIDA con el botón SEGUIR que lleva al login */}
      <main className="hero-landing">
        <div className="hero-content">
          <h1>AGROALERTAS</h1>
          <p className="welcome-text">Bienvenidos</p>

          <Link to="/login" className="btn-seguir">SEGUIR</Link>
        </div>
      </main>

    </div>
  );
}

export default Index;