import React, { useState } from 'react';

const JobForm = ({ addApplication, updateApplication, application, setEditing, setShowForm }) => {
  const [formData, setFormData] = useState({
    company: application ? application.company : '',
    position: application ? application.position : '',
    status: application ? application.status : 'applied',
    notes: application ? application.notes : ''
  });

  const { company, position, status, notes } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    
    if (application) {
      updateApplication(application._id, formData);
      setEditing(false);
    } else {
      addApplication(formData);
    }
  };

  return (
    <div className="job-form-container">
      <h2>{application ? 'Edit Application' : 'Add New Application'}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={position}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={onChange}
          >
            <option value="applied">Applied</option>
            <option value="interviewing">Interviewing</option>
            <option value="rejected">Rejected</option>
            <option value="offered">Offered</option>
            <option value="accepted">Accepted</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={notes}
            onChange={onChange}
            rows="4"
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {application ? 'Update' : 'Add'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => application ? setEditing(false) : setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm; 