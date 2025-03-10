import React, { useState } from 'react';
import JobForm from './JobForm';

const JobItem = ({ application, updateApplication, deleteApplication }) => {
  const [editing, setEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Get status class for styling
  const getStatusClass = (status) => {
    switch(status) {
      case 'applied':
        return 'status-applied';
      case 'interviewing':
        return 'status-interviewing';
      case 'rejected':
        return 'status-rejected';
      case 'offered':
        return 'status-offered';
      case 'accepted':
        return 'status-accepted';
      default:
        return '';
    }
  };
  
  // Capitalize first letter of status
  const formatStatus = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="job-item">
      {editing ? (
        <JobForm 
          application={application}
          updateApplication={updateApplication}
          setEditing={setEditing}
        />
      ) : (
        <>
          <div className="job-header" onClick={() => setShowDetails(!showDetails)}>
            <div className="job-title">
              <h3>{application.company}</h3>
              <p>{application.position}</p>
            </div>
            <div className="job-meta">
              <span className={`job-status ${getStatusClass(application.status)}`}>
                {formatStatus(application.status)}
              </span>
              <span className="job-date">{formatDate(application.dateApplied)}</span>
            </div>
          </div>
          
          {showDetails && (
            <div className="job-details">
              {application.notes && (
                <div className="job-notes">
                  <h4>Notes:</h4>
                  <p>{application.notes}</p>
                </div>
              )}
              
              <div className="job-actions">
                <button 
                  className="btn btn-edit" 
                  onClick={() => setEditing(true)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-delete" 
                  onClick={() => deleteApplication(application._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JobItem; 