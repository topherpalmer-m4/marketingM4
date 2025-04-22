import React, { useState } from 'react';
import { HeaderSection } from './HeaderSection';
import { ControlPanel } from './ControlPanel';
import { AudienceTables } from './AudienceTables';
import { DemographicsFilter } from './DemographicsFilter';
import './ChatRankDashboard.css';

export const ChatRankDashboard = () => {
  const [selectedClient, setSelectedClient] = useState('adidas');
  const [activeTab, setActiveTab] = useState('myBrands');
  const [activeContentTab, setActiveContentTab] = useState('fullChat');
  const [viewMode, setViewMode] = useState('list');
  const [showDemographics, setShowDemographics] = useState(false);

  const handleClientSelect = (clientName) => {
    setSelectedClient(clientName.toLowerCase());
  };

  const toggleDemographics = () => {
    setShowDemographics(!showDemographics);
  };

  return (
    <div className="chatrank-dashboard">
      <HeaderSection 
        onClientSelect={handleClientSelect} 
        selectedClient={selectedClient} 
      />
      
      <div className="control-panel-container">
        <ControlPanel
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeContentTab={activeContentTab}
          setActiveContentTab={setActiveContentTab}
          viewMode={viewMode}
          setViewMode={setViewMode}
          toggleDemographics={toggleDemographics}
        />
      </div>
      
      <div className={`dashboard-content ${showDemographics ? 'filter-visible' : ''}`}>
        <AudienceTables 
          customerId={selectedClient} 
          dataDisplay={viewMode}
        />
      </div>
      
      <DemographicsFilter 
        isVisible={showDemographics} 
        onClose={() => setShowDemographics(false)} 
      />
    </div>
  );
};
