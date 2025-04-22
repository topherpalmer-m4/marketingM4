import React from 'react';
import { Tab } from '../components/Tab';
import './ControlPanel.css';

export const ControlPanel = ({
  activeTab,
  setActiveTab,
  activeContentTab,
  setActiveContentTab,
  viewMode,
  setViewMode,
  toggleDemographics
}) => {
  return (
    <div className="control-panel">
      <div className="view-selectors">
        <div className="view-option">
          <div className="view-icon"></div>
          <span>Product</span>
        </div>
        
        <div className="view-option">
          <div className="view-icon"></div>
          <span>% of total mentions</span>
        </div>
      </div>
      
      <div className="control-actions">
        <div className="chart-controls">
          <button 
            className={`chart-option ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button 
            className={`chart-option ${viewMode === 'bar' ? 'active' : ''}`}
            onClick={() => setViewMode('bar')}
            aria-label="Bar chart view"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 13V9M6 13V6M10 13V8M14 13V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button 
            className={`chart-option ${viewMode === 'line' ? 'active' : ''}`}
            onClick={() => setViewMode('line')}
            aria-label="Line chart view"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L5.5 8.5L8.5 11.5L14 6M14 6V10M14 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className={`chart-option ${viewMode === 'pie' ? 'active' : ''}`}
            onClick={() => setViewMode('pie')}
            aria-label="Pie chart view"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8V2C5.239 2 3 4.239 3 7C3 9.761 5.239 12 8 12C10.761 12 13 9.761 13 7H8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="tab-groups">
          <div className="tab-group">
            <Tab
              className="tab-start"
              color="default"
              divClassName="tab-instance"
              isSelected={activeContentTab === 'fullChat' ? 'on' : 'off'}
              radius="full"
              size="sm"
              text="Full Chat"
              variant="default"
              onClick={() => setActiveContentTab('fullChat')}
            />
            <Tab
              className="tab-item"
              color="default"
              divClassName="tab-content"
              isSelected={activeContentTab === 'prompt' ? 'on' : 'off'}
              radius="full"
              size="sm"
              text="Prompt"
              variant="default"
              onClick={() => setActiveContentTab('prompt')}
            />
            <Tab
              className="tab-item"
              color="default"
              divClassName="tab-content"
              isSelected={activeContentTab === 'response' ? 'on' : 'off'}
              radius="full"
              size="sm"
              text="Response"
              variant="default"
              onClick={() => setActiveContentTab('response')}
            />
          </div>
          
          <div className="tab-group">
            <Tab
              className="tab-item"
              color="default"
              divClassName="tab-content"
              isSelected={activeTab === 'allBrands' ? 'on' : 'off'}
              radius="full"
              size="sm"
              text="All brands"
              variant="default"
              onClick={() => setActiveTab('allBrands')}
            />
            <Tab
              className="tab-item"
              color="default"
              divClassName="tab-content"
              isSelected={activeTab === 'myBrands' ? 'on' : 'off'}
              radius="full"
              size="sm"
              text="My brands"
              variant="default"
              onClick={() => setActiveTab('myBrands')}
            />
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="action-button">+ Brand</button>
          <button 
            className="action-button"
            onClick={toggleDemographics}
          >
            + Audience
          </button>
        </div>
      </div>
    </div>
  );
};
