import React from 'react';
import Header from '../components/Header';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="dashboard">Dashboard</div>
        <div className="wel">Welcome to Admin Panel</div>
      </div>
    </div>
  );
};

export default Dashboard;
