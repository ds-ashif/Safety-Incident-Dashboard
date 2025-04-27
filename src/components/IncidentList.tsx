import React from 'react';
import { Incident, Severity, SortOrder } from '../types';
import IncidentItem from './IncidentItem';

interface IncidentListProps {
  incidents: Incident[];
  severityFilter: Severity | 'All';
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({ 
  incidents, 
  severityFilter,
  sortOrder 
}) => {
  const filteredIncidents = incidents.filter(incident => 
    severityFilter === 'All' || incident.severity === severityFilter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="incident-list">
      {sortedIncidents.length === 0 ? (
        <p className="no-incidents">No incidents found matching your criteria.</p>
      ) : (
        <ul>
          {sortedIncidents.map(incident => (
            <IncidentItem key={incident.id} incident={incident} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default IncidentList;