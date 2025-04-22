import React from 'react';
import './DemographicsFilter.css';

export const DemographicsFilter = ({ onClose, isVisible }) => {
  return (
    <div className={`demographics-filter ${isVisible ? 'visible' : ''}`}>
      <div className="filter-header">
        <h2 className="filter-title">Audience Filters</h2>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="filter-sections">
        <FilterSection title="Gender" options={['Male', 'Female', 'Non-binary']} />
        <FilterSection title="Income" options={['Under $25k', '$25k-$50k', '$50k-$75k', '$75k-$100k', 'Over $100k']} />
        <FilterSection title="Ethnicity" options={['White', 'Black', 'Hispanic', 'Asian', 'Other']} />
        <FilterSection title="Education" options={['High school or less', 'Some college', 'Bachelor\'s degree', 'Graduate degree']} />
        <FilterSection title="Region" options={['Northeast', 'Midwest', 'South', 'West']} />
        <FilterSection title="OS" options={['iOS', 'Android', 'Windows', 'macOS', 'Linux']} />
      </div>
      
      <div className="filter-actions">
        <button className="reset-button">Reset</button>
        <button className="apply-button">Apply</button>
      </div>
    </div>
  );
};

const FilterSection = ({ title, options }) => {
  return (
    <div className="filter-section">
      <h3 className="section-title">{title}</h3>
      <div className="options-list">
        {options.map((option, index) => (
          <div key={index} className="option-item">
            <input type="checkbox" id={`${title}-${index}`} className="option-checkbox" />
            <label htmlFor={`${title}-${index}`} className="option-label">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
