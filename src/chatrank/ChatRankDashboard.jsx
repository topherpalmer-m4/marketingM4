import React, { useState } from 'react';
import { HeaderSection } from './HeaderSection';
import { CitationsTable } from './CitationsTable';
import { AudienceTables } from './AudienceTables';
import './ChatRankDashboard.css';

export const ChatRankDashboard = () => {
  const [selectedClient, setSelectedClient] = useState('adidas');

  const handleClientSelect = (clientName) => {
    console.log('Client selected:', clientName);
    setSelectedClient(clientName.toLowerCase());
  };

  return (
    <div className="chatrank-dashboard">
      <HeaderSection 
        onClientSelect={handleClientSelect} 
        selectedClient={selectedClient} 
      />
      
      <div className="dashboard-content">
        <AudienceTables customerId={selectedClient.toLowerCase()} />
        <CitationsTable customerId={selectedClient.toLowerCase()} />
      </div>
    </div>
  );
};
