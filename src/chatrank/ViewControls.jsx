import React from 'react';
import { Tab } from '../components/Tab';
import { BarChart } from '../icons/BarChart';
import { LineChart } from '../icons/LineChart';
import { List } from '../icons/List';
import { PieChart } from '../icons/PieChart';
import './ViewControls.css';

export const ViewControls = ({
  activeTab,
  activeContentTab,
  viewMode,
  onTabChange,
  onContentTabChange,
  onViewModeChange,
  onToggleDemographics
}) => {
  return (
    <div className="view-controls">
      <div className="view-navigation">
        <button className="view-option">
          <div className="view-icon back-icon" />
          <span>Product</span>
        </button>
        
        <button className="view-option">
          <div className="view-icon back-icon" />
          <span>% of total mentions</span>
        </button>
      </div>
      
      <div className="view-actions">
        <div className="chart-controls">
          <button 
            className={`chart-option ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => onViewModeChange('list')}
          >
            <List />
          </button>
          <button 
            className={`chart-option ${viewMode === 'bar' ? 'active' : ''}`}
            onClick={() => onViewModeChange('bar')}
          >
            <BarChart />
          </button>
          <button 
            className={`chart-option ${viewMode === 'line' ? 'active' : ''}`}
            onClick={() => onViewModeChange('line')}
          >
            <LineChart />
          </button>
          <button 
            className={`chart-option ${viewMode === 'pie' ? 'active' : ''}`}
            onClick={() => onViewModeChange('pie')}
          >
            <PieChart />
          </button>
        </div>
        
        <div className="tab-controls">
          <div className="tab-group">
            <Tab
              isSelected={activeContentTab === 'fullChat' ? 'on' : 'off'}
              text="Full Chat"
              onClick={() => onContentTabChange('fullChat')}
            />
            <Tab
              isSelected={activeContentTab === 'prompt' ? 'on' : 'off'}
              text="Prompt"
              onClick={() => onContentTabChange('prompt')}
            />
            <Tab
              isSelected={activeContentTab === 'response' ? 'on' : 'off'}
              text="Response"
              onClick={() => onContentTabChange('response')}
            />
          </div>
          
          <div className="tab-group">
            <Tab
              isSelected={activeTab === 'allBrands' ? 'on' : 'off'}
              text="All brands"
              onClick={() => onTabChange('allBrands')}
            />
            <Tab
              isSelected={activeTab === 'myBrands' ? 'on' : 'off'}
              text="My brands"
              onClick={() => onTabChange('myBrands')}
            />
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="action-button">+ Brand</button>
          <button 
            className="action-button"
            onClick={onToggleDemographics}
          >
            + Audience
          </button>
        </div>
      </div>
    </div>
  );
};
