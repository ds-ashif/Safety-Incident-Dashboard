import React, { useState } from 'react';
import { Incident, mockIncidents, Severity, SortOrder } from '../types';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import FilterControls from './FilterControls';

const IncidentDashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [showForm, setShowForm] = useState(false);

  const addIncident = (newIncident: { title: string; description: string; severity: Severity }) => {
    const incident: Incident = {
      ...newIncident,
      id: Math.max(...incidents.map(i => i.id), 0) + 1,
      reported_at: new Date().toISOString()
    };
    setIncidents([incident, ...incidents]);
    setShowForm(false);
  };

  return (
    <div className="dashboard">
      <div className="header-container">
        <h1>AI Safety Incident Dashboard</h1>
      </div>
      
      <button 
        onClick={() => setShowForm(!showForm)}
        className="toggle-form-button"
      >
        {showForm ? 'Hide Form' : 'Report New Incident'}
      </button>
      
      {showForm && <IncidentForm onSubmit={addIncident} />}
      
      <FilterControls 
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      
      <IncidentList 
        incidents={incidents}
        severityFilter={severityFilter}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default IncidentDashboard;
