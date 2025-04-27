import React, { useState } from 'react';
import { Severity } from '../types';

interface IncidentFormProps {
  onSubmit: (incident: { title: string; description: string; severity: Severity }) => void;
}

interface FormErrors {
  title?: string;
  description?: string;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Medium');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors: FormErrors = {};
    if (!title.trim()) validationErrors.title = 'Title is required';
    if (!description.trim()) validationErrors.description = 'Description is required';
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    onSubmit({ title, description, severity });
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="incident-form">
      <h2>Report New Incident</h2>
      
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>
      
      <div className="form-group">
        <label>Severity</label>
        <div className="severity-options">
          {(['Low', 'Medium', 'High'] as Severity[]).map((level) => (
            <label key={level}>
              <input
                type="radio"
                name="severity"
                value={level}
                checked={severity === level}
                onChange={() => setSeverity(level)}
              />
              {level}
            </label>
          ))}
        </div>
      </div>
      
      <button type="submit" className="submit-button">Submit Report</button>
    </form>
  );
};

export default IncidentForm;