// se decide qué página se muestra según la dirección del navegador.

// Routes agrupa todas las rutas, Route es cada ruta
// y Navigate sirve para mandar al usuario a otra ruta
import { Routes, Route, Navigate } from 'react-router-dom';

// Cada página del proyecto
import Index from './pages/index.jsx';
import Login from './pages/login.jsx';
import Registro from './pages/registro.jsx';
import Roles from './pages/roles.jsx';
import AlertaDetalle from './pages/alerta.jsx';
import CrearAlerta from './pages/crear-alerta.jsx';
import NotificacionesApi from './pages/noificaciones.jsx';

function App() {
  return (
    <Routes>
      {/* path es la dirección y element es la página que se muestra */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/alerta-detalle" element={<AlertaDetalle />} />
      <Route path="/crear-alerta" element={<CrearAlerta />} />
      <Route path="/notificaciones-api" element={<NotificacionesApi />} />

      {/* Si escriben una dirección que no existe, vuelve a la pantalla de inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;