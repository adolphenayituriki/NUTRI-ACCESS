import React, { useState } from 'react';
import './PatientRegistration.css';

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    hospitalName: '',
    patientAge: '',
    patientGender: '',
    roomNumber: '',
    admissionDate: '',
    doctorName: '',
    contactNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
      isValid = false;
    }

    if (!formData.hospitalName.trim()) {
      newErrors.hospitalName = 'Hospital name is required';
      isValid = false;
    }

    if (!formData.patientAge.trim()) {
      newErrors.patientAge = 'Patient age is required';
      isValid = false;
    } else if (isNaN(formData.patientAge) || formData.patientAge <= 0) {
      newErrors.patientAge = 'Please enter a valid age';
      isValid = false;
    }

    if (!formData.patientGender) {
      newErrors.patientGender = 'Please select a gender';
      isValid = false;
    }

    if (!formData.roomNumber.trim()) {
      newErrors.roomNumber = 'Room number is required';
      isValid = false;
    }

    if (!formData.admissionDate) {
      newErrors.admissionDate = 'Admission date is required';
      isValid = false;
    }

    if (!formData.doctorName.trim()) {
      newErrors.doctorName = 'Doctor name is required';
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.contactNumber.replace(/\s/g, ''))) {
      newErrors.contactNumber = 'Please enter a valid contact number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Generate a mock patient ID (in real app, this would come from backend)
      const patientId = `PAT-${Math.floor(1000 + Math.random() * 9000)}`;
      
      // Here you would typically send data to backend API
      console.log('Patient registration data:', { ...formData, patientId });
      
      setSuccessMessage(`Patient registered successfully! Patient ID: ${patientId}`);
      
      // Reset form after successful submission
      setFormData({
        patientName: '',
        hospitalName: '',
        patientAge: '',
        patientGender: '',
        roomNumber: '',
        admissionDate: '',
        doctorName: '',
        contactNumber: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  return (
    <div className="patient-registration-container">
      <div className="registration-card">
        <h2>Patient Registration</h2>
        <p className="subtitle">Register a new patient in the NutriAccess system</p>
        
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="patientName">Patient Name *</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Enter patient's full name"
            />
            {errors.patientName && <span className="error-message">{errors.patientName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="hospitalName">Hospital Name *</label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              placeholder="Enter hospital name"
            />
            {errors.hospitalName && <span className="error-message">{errors.hospitalName}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="patientAge">Patient Age *</label>
              <input
                type="number"
                id="patientAge"
                name="patientAge"
                value={formData.patientAge}
                onChange={handleChange}
                placeholder="Enter age"
                min="1"
                max="120"
              />
              {errors.patientAge && <span className="error-message">{errors.patientAge}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="patientGender">Patient Gender *</label>
              <select
                id="patientGender"
                name="patientGender"
                value={formData.patientGender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.patientGender && <span className="error-message">{errors.patientGender}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="roomNumber">Room Number *</label>
            <input
              type="text"
              id="roomNumber"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              placeholder="Enter room number"
            />
            {errors.roomNumber && <span className="error-message">{errors.roomNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="admissionDate">Admission Date *</label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
            />
            {errors.admissionDate && <span className="error-message">{errors.admissionDate}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="doctorName">Attending Doctor *</label>
            <input
              type="text"
              id="doctorName"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              placeholder="Enter doctor's name"
            />
            {errors.doctorName && <span className="error-message">{errors.doctorName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number *</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number (10-15 digits)"
            />
            {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Register Patient
            </button>
            <button type="reset" className="btn-secondary">
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientRegistration;