import React, { useState } from 'react';

function BackgroundForm({ onSubmit, initialData = {} }) {
  const [softwareExperience, setSoftwareExperience] = useState(initialData.softwareExperience || '');
  const [hardwareExperience, setHardwareExperience] = useState(initialData.hardwareExperience || '');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (!softwareExperience || !hardwareExperience) {
      setError('Please answer all questions.');
      return;
    }

    onSubmit({ softwareExperience, hardwareExperience });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="softwareExperience">Describe your software development experience:</label>
        <textarea
          id="softwareExperience"
          value={softwareExperience}
          onChange={(e) => setSoftwareExperience(e.target.value)}
          rows="5"
          required
        />
      </div>
      <div>
        <label htmlFor="hardwareExperience">Describe your hardware experience (robotics, electronics, etc.):</label>
        <textarea
          id="hardwareExperience"
          value={hardwareExperience}
          onChange={(e) => setHardwareExperience(e.target.value)}
          rows="5"
          required
        />
      </div>
      <button type="submit">Save Background</button>
    </form>
  );
}

export default BackgroundForm;
