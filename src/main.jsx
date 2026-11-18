// Este es el primer archivo que se ejecuta.

// StrictMode revisa el código mientras desarrollo y avisa errores comunes
import { StrictMode } from 'react';
// createRoot conecta React con el div root del index.html
import { createRoot } from 'react-dom/client';
// BrowserRouter permite pasar de una página a otra sin recargar el navegador
import { BrowserRouter } from 'react-router-dom';

// Primero se carga Bootstrap y después mis estilos,
// así mis estilos tienen prioridad y no se pierde el diseño
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

// App es el componente que tiene todas las rutas
import App from './App.jsx';

// Se dibuja la app dentro del div root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);