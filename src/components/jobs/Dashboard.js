import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from './JobForm';
import JobList from './JobList';
import './Jobs.css';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Get token from localStorage
  const token = localStorage.getItem('token');

  // Set axios default headers
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  // Fetch job applications
  const fetchApplications = async () => {
    try {
      const res = await axios.get('https://your-api-url.com/api/job-applications');
      setApplications(res.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch job applications');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Add new job application
  const addApplication = async (application) => {
    try {
      const res = await axios.post('https://your-api-url.com/api/job-applications', application);
      setApplications([res.data, ...applications]);
      setShowForm(false);
    } catch (err) {
      setError('Failed to add job application');
    }
  };

  // Update job application
  const updateApplication = async (id, updatedApplication) => {
    try {
      const res = await axios.put(`https://your-api-url.com/api/job-applications/${id}`, updatedApplication);
      setApplications(
        applications.map(app => app._id === id ? res.data : app)
      );
    } catch (err) {
      setError('Failed to update job application');
    }
  };

  // Delete job application
  const deleteApplication = async (id) => {
    try {
      await axios.delete(`https://your-api-url.com/api/job-applications/${id}`);
      setApplications(applications.filter(app => app._id !== id));
    } catch (err) {
      setError('Failed to delete job application');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Job Applications Dashboard</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <button 
        className="btn btn-primary add-btn" 
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add New Application'}
      </button>
      
      {showForm && (
        <JobForm 
          addApplication={addApplication} 
          setShowForm={setShowForm}
        />
      )}
      
      <JobList 
        applications={applications} 
        updateApplication={updateApplication}
        deleteApplication={deleteApplication}
      />
    </div>
  );
};

export default Dashboard; 