import React from 'react';
import './styles.css';  // Make sure this points to the CSS file you create
import SalesDashboard from './components/SalesDashboard';
import MyMap from './components/MyMap'; // Importa tu componente de mapa

function App() {
  return (
    <div>
      <h1>Analitiks SPA - Business Sales Dashboard</h1>
      <div className="dashboard-container">
        <SalesDashboard />
      </div>
      <div className="map-container">
        <h2>Mapa de clientes</h2>
        <MyMap /> {/* Aquí se muestra el mapa */}
      </div>
    </div>
  );
}

export default App;
