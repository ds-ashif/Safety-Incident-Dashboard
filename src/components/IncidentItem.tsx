import React, { useState } from 'react';
import { Incident } from '../types';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const reportedDate = new Date(incident.reported_at).toLocaleDateString();

  return (
    <li className={`incident-item severity-${incident.severity.toLowerCase()}`}>
      <div className="incident-summary" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="incident-header">
          <h3>{incident.title}</h3>
          <span className="severity-badge">{incident.severity}</span>
        </div>
        <div className="incident-meta">
          <span className="reported-date">Reported: {reportedDate}</span>
          <button 
            className="view-details-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Hide Details' : 'View Details'}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="incident-details">
          <p>{incident.description}</p>
        </div>
      )}
    </li>
  );
};

export default IncidentItem;