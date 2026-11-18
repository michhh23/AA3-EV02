// PANTALLA DE ALERTA DEL PRODUCTOR
// Es la página que ve el producto
function AlertaDetalle() {
  return (

    <div className="pagina alerta-page-bg">

      {/* BARRA DE ARRIBA */}
      <header className="navbar">
        <div className="logo-container">
          <button className="menu-btn"><i className="fa-solid fa-bars"></i></button>
          <span className="logo">ASPANU</span>
        </div>
        <div className="nav-right">
          <button className="search-btn">🔍</button>
          <button className="user-btn"><i className="fa-solid fa-circle-user"></i></button>
        </div>
      </header>

      {/* BANNER con el título de la alerta */}
      <section className="banner-lluvia">
        <div className="banner-title-box">
          <h1>ALERTA</h1>
          <h1>LLUVIA FUERTE</h1>
        </div>
      </section>

      <main className="alerta-content">

        {/* CALENDARIO DEL MES. Los span vacíos son los días antes del 1 */}
        <div className="calendar-section">
          <h2 className="month-title">JANUARY</h2>

          <div className="calendar-grid">
            <span className="day-head">SUN</span>
            <span className="day-head">MON</span>
            <span className="day-head">TUE</span>
            <span className="day-head">WED</span>
            <span className="day-head">THU</span>
            <span className="day-head">FRI</span>
            <span className="day-head">SAT</span>

            <span className="empty"></span>
            <span className="empty"></span>
            <span className="empty"></span>
            <span className="empty"></span>
            <span>01</span><span>02</span><span>03</span>
            <span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>10</span>
            <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
            <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
            <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
          </div>
        </div>

        {/* TARJETAS. La primera es la alerta y la segunda las acciones a seguir */}
        <div className="cards-section">

          <div className="card-blanca">
            <h3 className="card-title-red">LLUVIA EXTREMA</h3>
            <p className="card-text">Lluvia fuerte pronosticada en Tierralta</p>
            <p className="card-text">En las próximas 3 horas se esperan lluvias intensas</p>
            <button className="btn-card-blue">CONFIRMAR</button>
          </div>

          <div className="card-blanca">
            <h3 className="card-title-red">ACCIÓN</h3>
            <ol className="action-list">
              <li><strong>Limpia los drenajes:</strong> Despeja las zanjas para que el agua corra y no encharque el lote.</li>
              <li><strong>No abones ni fumigues:</strong> La lluvia lavará los productos e insumos.</li>
              <li><strong>Asegura el plátano:</strong> Revisa el amarre de las matas con racimos pesados.</li>
            </ol>
            <button className="btn-card-blue">DETALLES</button>
            <span className="sms-link">SMS</span>
          </div>

        </div>

      </main>
    </div>
  );
}

export default AlertaDetalle;