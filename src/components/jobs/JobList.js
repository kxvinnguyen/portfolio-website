import React, { useState } from 'react';
import JobItem from './JobItem';

const JobList = ({ applications, updateApplication, deleteApplication }) => {
  const [filter, setFilter] = useState('all');
  
  // Filter applications based on status
  const filteredApplications = filter === 'all' 
    ? applications 
    : applications.filter(app => app.status === filter);

  return (
    <div className="job-list-container">
      <div className="filter-container">
        <label htmlFor="filter">Filter by Status:</label>
        <select 
          id="filter" 
          value={filter} 
          onChange={e => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="rejected">Rejected</option>
          <option value="offered">Offered</option>
          <option value="accepted">Accepted</option>
        </select>
      </div>
      
      {filteredApplications.length === 0 ? (
        <p className="no-applications">No job applications found.</p>
      ) : (
        <div className="job-items">
          {filteredApplications.map(application => (
            <JobItem 
              key={application._id} 
              application={application}
              updateApplication={updateApplication}
              deleteApplication={deleteApplication}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList; 