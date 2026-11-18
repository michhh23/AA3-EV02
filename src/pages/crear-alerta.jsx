// los campos del formulario
import { Form } from 'react-bootstrap';
// Link para ir a otra página y useNavigate para cambiar de página desde el código
import { Link, useNavigate } from 'react-router-dom';

// PANTALLA PARA CREAR ALERTA (agrónomo)
// El agrónomo llena el formulario con el título, el tipo de evento,
// el riesgo, la ubicación y las recomendaciones para el productor
function CrearAlerta() {
  // Sirve para mandar al usuario a otra página
  const navegar = useNavigate();

  // GUARDAR LA ALERTA
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert('¡Alerta emitida exitosamente a los productores!');
    navegar('/alerta-detalle');
  };

  return (
    <div className="pagina">

      {/* BARRA DE ARRIBA.*/}
      <header className="navbar">
        <div className="logo-container">
          <Link to="/roles" className="back-btn"><i className="fa-solid fa-arrow-left"></i></Link>
          <span className="logo">ASPANU</span>
          <div className="vertical-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="nav-right">
          <button className="search-btn">🔍</button>
          <button className="user-btn"><i className="fa-solid fa-circle-user"></i></button>
        </div>
      </header>

      {/* MAPA DE COBERTURA */}
      <section className="map-banner">
        <img src="/assets/mapa-banner.png" alt="Mapa de Cobertura" className="map-img" />
      </section>

      <main className="vista-alerta-container">

        {/* PRONÓSTICO DEL TIEMPO */}
        <div className="weather-card-section">
          <img src="/assets/Tiempo.png" alt="Pronóstico del tiempo" className="weather-img" />
        </div>

        {/* FORMULARIO. */}
        <div className="form-directo">
          <h2>CREAR ALERTA</h2>

          <Form id="form-crear-alerta" onSubmit={manejarEnvio}>
            <Form.Group className="grupo-campo mb-3" controlId="tituloAlerta">
              <Form.Label>Título de la Alerta</Form.Label>
              <Form.Control type="text" placeholder="Ej: Riesgo de Inundación Sector Norte" required />
            </Form.Group>

            {/* Tipo de evento y riesgo van en la misma fila */}
            <div className="form-row">
              <Form.Group className="grupo-campo mb-3" controlId="tipoAlerta">
                <Form.Label>Tipo de Evento</Form.Label>
                <Form.Select required>
                  <option value="">Seleccione...</option>
                  <option value="inundacion">Inundación / Lluvia Fuerte</option>
                  <option value="sequia">Sequía Prolongada</option>
                  <option value="plaga">Plaga o Enfermedad</option>
                  <option value="viento">Vendaval / Vientos Fuertes</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="grupo-campo mb-3" controlId="nivelRiesgo">
                <Form.Label>Riesgo</Form.Label>
                <Form.Select required>
                  <option value="bajo">Bajo (Sin riesgo)</option>
                  <option value="medio">Medio (Con riesgo)</option>
                  <option value="alto">Alto (Riesgo critico)</option>
                  <option value="critico">Critico (Urgencia)</option>
                </Form.Select>
              </Form.Group>
            </div>

            <Form.Group className="grupo-campo mb-3" controlId="ubicacion">
              <Form.Label>Ubicación</Form.Label>
              <Form.Control type="text" placeholder="Ej: Parcela #4 - Vereda La Esperanza" required />
            </Form.Group>

            <Form.Group className="grupo-campo mb-3" controlId="descripcion">
              <Form.Label>Recomendaciones</Form.Label>
              {/* hace que el campo sea un cuadro de texto grande */}
              <Form.Control as="textarea" rows={3} placeholder="Detalle..." required />
            </Form.Group>

            <button type="submit" className="btn-submit btn-alerta">Guardar</button>
          </Form>
        </div>

      </main>
    </div>
  );
}

export default CrearAlerta;