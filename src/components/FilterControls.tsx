import React from 'react';
import { Severity, SortOrder } from '../types';

interface FilterControlsProps {
  severityFilter: Severity | 'All';
  setSeverityFilter: (filter: Severity | 'All') => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ 
  severityFilter, 
  setSeverityFilter,
  sortOrder,
  setSortOrder
}) => {
  return (
    <div className="filter-controls">
      <div className="filter-group">
        <label>Filter by Severity:</label>
        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value as Severity | 'All')}
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Sort by Date:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;