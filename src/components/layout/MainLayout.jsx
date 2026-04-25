import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="app-header">
        <div className="header-content">
          <h1>NutriAccess</h1>
          <p>Secure Food Coordination for Hospitalized Patients</p>
        </div>
      </header>
      
      <nav className="app-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/patient-registration">Patient Registration</a></li>
          <li><a href="/visitor-verification">Visitor Verification</a></li>
          <li><a href="/food-submission">Food Submission</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      
      <main className="app-main">
        {children}
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2026 NutriAccess. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;