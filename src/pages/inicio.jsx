/**
Página principal del Productor después de iniciar sesión
 */
import { useState } from 'react'; // useState -> guarda un dato
import { Row, Col, Nav } from 'react-bootstrap'; // Row y Col -> filas y columnas, Nav -> menú de Bootstrap
import { Link } from 'react-router-dom'; // -> enlace interno sin recargar la página

/** Datos del calendario (junio de 2026 empieza en lunes). */
const DIAS_SEMANA = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
const ESPACIOS_INICIO = 1; // un espacio vacío antes del día 1 (el domingo
const DIAS_DEL_MES = 30;
const DIA_ACTUAL = 17;

function Inicio() {
  const [confirmada, setConfirmada] = useState(false); // false -> la alerta aún no se ha confirmada

  const espacios = Array.from({ length: ESPACIOS_INICIO }, (_, i) => i); 
  const dias = Array.from({ length: DIAS_DEL_MES }, (_, i) => i + 1);

  /** Marca la alerta como confirmada (antes confirmAlert() en la app móvil). */
  const confirmarAlerta = () => {
    setConfirmada(true);
  };

  return (
    <div className="pagina alerta-page-bg">

      <header className="navbar">
        <div className="logo-container">
          <span className="logo">ASPANU</span>
        </div>
        <div className="nav-right">
          <div className="search-box">
            <input type="text" placeholder="Buscar en AgroAlertas" />
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <button className="user-btn"><i className="fa-solid fa-circle-user"></i></button>
          <Link to="/login" className="back-btn" title="Cerrar sesión"><i className="fa-solid fa-right-from-bracket"></i></Link>
        </div>
      </header>

      <Nav className="menu-inicio" activeKey="/inicio"> {/* activeKey -> marca la opción de la página actual */}
        <Nav.Link as={Link} to="/inicio" eventKey="/inicio">Inicio</Nav.Link> {/* as={Link} -> el enlace de Bootstrap navega con React Router */}
        <Nav.Link as={Link} to="/alerta-detalle">Alerta</Nav.Link>
        <Nav.Link as={Link} to="/crear-alerta">Crear alerta</Nav.Link>
        <Nav.Link as={Link} to="/historial">Historial</Nav.Link>
        <Nav.Link as={Link} to="/notificaciones-api">Notificaciones</Nav.Link>
        <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
      </Nav>

      <div className="inicio-titulo">
        <img src="/assets/logo.png" alt="AgroAlertas" />
        <h2>AGROALERTAS</h2>
      </div>

      <Row className="inicio-contenido g-4"> {/* g-4 -> espacio entre columnas */}

        <Col lg={6}> {/* lg={6} -> mitad de ancho en pantallas grandes, completo en celular */}
          <div className="inicio-alerta">
            <img src="/assets/lluvia.png" alt="lluvia" className="inicio-alerta-img" />
            <h2>ALERTA<br />LLUVIA</h2>
            <p>Lluvia fuerte pronosticada en Tierralta. En las próximas 3 horas se esperan lluvias intensas</p>

            {confirmada ? ( // condición - cambia lo que se muestra al confirmar
              <div className="inicio-acciones">
                <span className="pill pill-verde">ALERTA CONFIRMADA</span>
                <Link to="/notificaciones-api" className="pill pill-oscuro">SMS</Link>
              </div>
            ) : (
              <>
                <span className="pill-riesgo">RIESGO ALTO</span>
                <div className="inicio-acciones">
                  <button className="pill" onClick={confirmarAlerta}>CONFIRMAR</button>
                  <Link to="/alerta-detalle" className="pill pill-oscuro">mas detalles</Link>
                </div>
              </>
            )}
          </div>
        </Col>

        <Col lg={6}>
          <div className="inicio-calendario">
            <div className="cal-encabezado">
              <span className="cal-anio">2026</span>
              <span className="cal-mes">JUNIO</span>
            </div>

            <div className="cal-cuadricula">
              {DIAS_SEMANA.map((dia) => ( // map -> recorre la lista y crea un elemento por cada valor
                <div key={dia} className="cal-dia-semana">{dia}</div> // key -> identificador único que React necesita en listas
              ))}
              {espacios.map((i) => (
                <div key={`vacio-${i}`}></div>
              ))}
              {dias.map((dia) => (
                <div key={dia} className={dia === DIA_ACTUAL ? 'cal-dia cal-hoy' : 'cal-dia'}>{dia}</div>
              ))}
            </div>
          </div>
        </Col>

      </Row>
    </div>
  );
}

export default Inicio;