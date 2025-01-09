import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './eventregister.css';

const EventRegister = () => {
  const location = useLocation();
  const { title, participation, fee } = location.state || {};

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();
  const [columns, setColumns] = useState([]);

  const participants = parseInt(participation, 10) || 0;

  const handleParticipantsChange = (e) => {
    const count = parseInt(e.target.value, 10);
    if (count > participants) {
      alert(`The maximum allowed participants is ${participants}`);
    } else {
      setColumns(Array.from({ length: count }));
    }
  };

  const validateAnweshaId = async (id, index) => {
    try {
      const response = await fetch('http://localhost:5178/auth/id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(`anweshaId-${index}`, {
          type: 'manual',
          message: 'This Anwesha ID is not present.',
        });
        return false;
      } else {
        clearErrors(`anweshaId-${index}`);
        return true;
      }
    } catch (error) {
      setError(`anweshaId-${index}`, {
        type: 'manual',
        message: 'Failed to validate Anwesha ID. Please try again.',
      });
      return false;
    }
  };

  const validateUniqueAnweshaIds = (anweshaIds) => {
    const idSet = new Set(anweshaIds);
    return idSet.size === anweshaIds.length;
  };

  const onSubmit = async (data) => {
    const anweshaIds = columns.map((_, index) => data[`anweshaId-${index}`]);

    // Check for unique Anwesha IDs
    if (!validateUniqueAnweshaIds(anweshaIds)) {
      alert('All Anwesha IDs in a team must be unique.');
      return;
    }

    // Validate all Anwesha IDs
    const validations = await Promise.all(
      anweshaIds.map((id, index) => validateAnweshaId(id, index))
    );

    if (validations.includes(false)) {
      alert('Please fix errors before submitting the form.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5178/auth/saveEvent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          teamName: data.teamName,
          participantCount: data.participantCount,
          anweshaIds,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert('Registration Successful!');
  
        // Store the event name in localStorage
        const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
        existingEvents.push(title); // Add the new event title
        localStorage.setItem('events', JSON.stringify(existingEvents));
      }else {
        alert(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-div">
      <h1 className="register-h1">Register for {title}</h1>
      <p className="register-p">Maximum Participants: {participation}</p>
      <p className="register-p">Registration Fee: {fee}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form-container">
        {/* Team Name */}
        <div className="register-form-group">
          <label htmlFor="teamName-register" className="register-form-label">Team Name</label>
          <input
            id="teamName-register"
            className="register-form-input"
            {...register('teamName', { required: 'Team name is required' })}
          />
          {errors.teamName && <p className="register-error-message">{errors.teamName.message}</p>}
        </div>
  
        {/* Number of Participants */}
        <div className="register-form-group">
          <label htmlFor="participantCount-register" className="register-form-label">Number of Participants</label>
          <input
            id="participantCount-register"
            type="number"
            min="1"
            max={participants}
            className="register-form-input"
            {...register('participantCount', {
              required: 'Number of participants is required',
              valueAsNumber: true,
              validate: (value) =>
                value > 0 && value <= participants || `Maximum allowed is ${participants}`,
            })}
            onChange={handleParticipantsChange}
          />
          {errors.participantCount && (
            <p className="register-error-message">{errors.participantCount.message}</p>
          )}
        </div>
  
        {/* Anwesha IDs */}
        {columns.map((_, index) => (
          <div key={index} className="register-form-group">
            <label htmlFor={`anweshaId-${index}-register`} className="register-form-label">Anwesha ID {index + 1}</label>
            <input
              id={`anweshaId-${index}-register`}
              className="register-form-input"
              {...register(`anweshaId-${index}`, {
                required: 'Anwesha ID is required',
              })}
              onBlur={(e) => validateAnweshaId(e.target.value, index)}
            />
            {errors[`anweshaId-${index}`] && (
              <p className="register-error-message">{errors[`anweshaId-${index}`].message}</p>
            )}
          </div>
        ))}
       
       <img className="QR" src="qr.png" alt="Main Sponsorpayment"/>
       
         {/* Transaction ID Label */}
      <div className="register-form-group">
        <label htmlFor="transactionId" className="register-form-label">Transaction ID</label>
        <input
          id="transactionId"
          className="register-form-input"
          // value="UniqueTransactionID" // You can replace with dynamic value when available
        
        />
      </div>
       
        {/* Submit Button */}
        <button type="submit" className="register-form-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
  
};

export default EventRegister;
