import React, { useState } from 'react';
import { Header } from './Header';
import { ControlPanel } from './ControlPanel';
import { AudienceTables } from './AudienceTables';
import { CitationsTable } from './CitationsTable';
import { DemographicsFilter } from './DemographicsFilter';
import './ChatRankDashboard.css';

export const ChatRankDashboard = () => {
  const [activeTab, setActiveTab] = useState('myBrands');
  const [activeContentTab, setActiveContentTab] = useState('fullChat');
  const [viewMode, setViewMode] = useState('list');
  const [showDemographics, setShowDemographics] = useState(false);
  
  return (
    <div className="chatrank-dashboard">
      <Header />
      
      <div className="dashboard-content">
        <ControlPanel 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeContentTab={activeContentTab}
          setActiveContentTab={setActiveContentTab}
          viewMode={viewMode}
          setViewMode={setViewMode}
          toggleDemographics={() => setShowDemographics(!showDemographics)}
        />
        
        <div className="dashboard-main">
          <div className="tables-container">
            <AudienceTables />
            <CitationsTable />
          </div>
          
          {showDemographics && (
            <DemographicsFilter onClose={() => setShowDemographics(false)} />
          )}
        </div>
      </div>
    </div>
  );
};
