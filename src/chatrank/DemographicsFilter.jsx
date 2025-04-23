import React, { useState } from 'react';
import './DemographicsFilter.css';

export const DemographicsFilter = ({ onClose, isVisible }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    gender: new Set(),
    age: new Set(),
    income: new Set(),
    ethnicity: new Set(),
    education: new Set(),
    region: new Set(),
    os: new Set()
  });

  const handleFilterChange = (section, option, isChecked) => {
    setSelectedFilters(prev => {
      const newSet = new Set(prev[section]);
      if (isChecked) {
        newSet.add(option);
      } else {
        newSet.delete(option);
      }
      return {
        ...prev,
        [section]: newSet
      };
    });
  };

  const handleReset = () => {
    setSelectedFilters({
      gender: new Set(),
      age: new Set(),
      income: new Set(),
      ethnicity: new Set(),
      education: new Set(),
      region: new Set(),
      os: new Set()
    });
  };

  const handleApply = () => {
    console.log('Applied filters:', selectedFilters);
  };

  return (
    <div className={`demographics-filter ${isVisible ? 'visible' : ''}`}>
      <div className="filter-header">
        <h2 className="filter-title">Audience Filters</h2>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="filter-sections">
        <FilterSection 
          title="Gender" 
          options={['Male', 'Female', 'Non-binary']}
          selected={selectedFilters.gender}
          onChange={(option, isChecked) => handleFilterChange('gender', option, isChecked)}
        />
        <FilterSection 
          title="Age" 
          options={['18-24', '25-34', '35-44', '45-60', '60+']}
          selected={selectedFilters.age}
          onChange={(option, isChecked) => handleFilterChange('age', option, isChecked)}
        />
        <FilterSection 
          title="Income" 
          options={['Under $25k', '$25k-$50k', '$50k-$75k', '$75k-$100k', 'Over $100k']}
          selected={selectedFilters.income}
          onChange={(option, isChecked) => handleFilterChange('income', option, isChecked)}
        />
        <FilterSection 
          title="Ethnicity" 
          options={['White', 'Black', 'Hispanic', 'Asian', 'Other']}
          selected={selectedFilters.ethnicity}
          onChange={(option, isChecked) => handleFilterChange('ethnicity', option, isChecked)}
        />
        <FilterSection 
          title="Education" 
          options={['High school or less', 'Some college', 'Bachelor\'s degree', 'Graduate degree']}
          selected={selectedFilters.education}
          onChange={(option, isChecked) => handleFilterChange('education', option, isChecked)}
        />
        <FilterSection 
          title="Region" 
          options={['Northeast', 'Midwest', 'South', 'West']}
          selected={selectedFilters.region}
          onChange={(option, isChecked) => handleFilterChange('region', option, isChecked)}
        />
        <FilterSection 
          title="OS" 
          options={['iOS', 'Android', 'Windows', 'macOS', 'Linux']}
          selected={selectedFilters.os}
          onChange={(option, isChecked) => handleFilterChange('os', option, isChecked)}
        />
      </div>
      
      <div className="filter-actions">
        <button className="reset-button" onClick={handleReset}>Reset</button>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

const FilterSection = ({ title, options, selected, onChange }) => {
  return (
    <div className="filter-section">
      <h3 className="section-title">{title}</h3>
      <div className="options-list">
        {options.map((option, index) => (
          <div key={index} className="option-item">
            <input type="checkbox" id={`${title}-${index}`} className="option-checkbox" checked={selected.has(option)} onChange={() => onChange(option, !selected.has(option))} />
            <label htmlFor={`${title}-${index}`} className="option-label">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
