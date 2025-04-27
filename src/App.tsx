import React from 'react';
import IncidentDashboard from './components/IncidentDashboard';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <IncidentDashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;