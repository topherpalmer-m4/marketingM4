import React from 'react';
import { Settings2 } from '../icons/Settings2';
import './HeaderSection.css';

export const HeaderSection = () => {
  return (
    <header className="chatrank-header">
      <div className="header-content">
        <div className="brand-section">
          <img 
            src="https://c.animaapp.com/2o30tgAo/img/group-5093@2x.png"
            alt="Adidas logo"
            className="brand-logo"
          />
          <h1 className="brand-title">
            ChatRank <span className="separator">-</span> Adidas
          </h1>
        </div>
        
        <div className="header-controls">
          <div className="filter-dropdown">
            <div className="filter-label">Category</div>
            <div className="filter-value">Footwear</div>
            <div className="dropdown-arrow" />
          </div>
          
          <div className="filter-dropdown">
            <div className="filter-label">Time frame</div>
            <div className="filter-value">Past 3 months</div>
            <div className="dropdown-arrow" />
          </div>
          
          <button className="settings-button">
            <Settings2 className="settings-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};
