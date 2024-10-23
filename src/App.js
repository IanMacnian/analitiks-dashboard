import React from 'react';
import './styles.css';  // Make sure this points to the CSS file you create
import SalesDashboard from './components/SalesDashboard';

function App() {
  return (
    <div>
      <h1>Analitiks SPA - Business Sales Dashboard</h1>
      <div className="dashboard-container">
        <SalesDashboard />
      </div>
    </div>
  );
}

export default App;
