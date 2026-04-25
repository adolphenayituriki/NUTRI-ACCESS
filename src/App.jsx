import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import PatientRegistration from './components/patient/PatientRegistration';
import VisitorVerification from './components/visitor/VisitorVerification';
import FoodSubmission from './components/food/FoodSubmission';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={
          <div className="home-page">
            <div className="hero-section">
              <h1>NutriAccess</h1>
              <p>Secure, Family&hospital-Controlled Food Coordination System for Hospitalized Patients</p>
              <div className="feature-cards">
                <div className="feature-card">
                  <h3>Patient Registration</h3>
                  <p>Create patient profiles with unique IDs and dietary restrictions</p>
                  <Link to="/patient-registration" className="btn-link">Get Started</Link>
                </div>
                <div className="feature-card">
                  <h3>Visitor Verification</h3>
                  <p>Verify visitor identity before food submission</p>
                  <Link to="/visitor-verification" className="btn-link">Learn More</Link>
                </div>
                <div className="feature-card">
                  <h3>Food Approval System</h3>
                  <p>Submit food for approval based on patient diet profiles</p>
                  <Link to="/food-submission" className="btn-link">Try It</Link>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/patient-registration" element={<PatientRegistration />} />
        <Route path="/visitor-verification" element={<VisitorVerification />} />
        <Route path="/food-submission" element={<FoodSubmission />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
