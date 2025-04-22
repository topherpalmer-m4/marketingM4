import React, { useState, useEffect } from 'react';
import { Settings2 } from '../icons/Settings2';
import './HeaderSection.css';

export const HeaderSection = ({ onClientSelect, selectedClient = 'Adidas' }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/src/chatrank/data/clients.json');
        if (!response.ok) {
          throw new Error('Failed to fetch clients data');
        }
        const data = await response.json();
        setClients(data.clients);
        setError(null);
      } catch (err) {
        console.error('Error fetching clients:', err);
        setError('Failed to load clients. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  const formatClientName = (name) => {
    const isPotentialAcronym = /^[A-Za-z]{2,5}$/.test(name);
    
    if (isPotentialAcronym) {
      return name.toUpperCase();
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
  };

  const formattedClientName = formatClientName(selectedClient);

  const selectedClientLogo = clients.find(client => client.url.toLowerCase() === selectedClient.toLowerCase())?.logo || 
    "https://c.animaapp.com/2o30tgAo/img/group-5067@2x.png";

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClientSelect = (client) => {
    if (onClientSelect) {
      onClientSelect(client);
    }
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    console.log('Selected client:', selectedClient);
    console.log('Selected client logo:', selectedClientLogo);
    console.log('Available clients:', clients);
  }, [selectedClient, selectedClientLogo, clients]);

  return (
    <header className="chatrank-header">
      <div className="header-content">
        <div className="brand-section">
          <button 
            className="hamburger-menu"
            onClick={toggleDrawer}
            aria-label="Open menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
          
          <h1 className="brand-title">
            ChatRank <span className="separator">-</span> {formattedClientName}
          </h1>
          
          <img 
            src={selectedClientLogo}
            alt={`${formattedClientName} logo`}
            className="brand-logo"
          />
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
      
      {isDrawerOpen && (
        <div className="client-drawer-overlay" onClick={toggleDrawer}>
          <div className="client-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h2>Select Client</h2>
              <button className="close-drawer" onClick={toggleDrawer}>×</button>
            </div>
            
            <div className="drawer-content">
              {isLoading ? (
                <div className="drawer-loading">Loading clients...</div>
              ) : error ? (
                <div className="drawer-error">{error}</div>
              ) : (
                <ul className="client-list">
                  {clients.map((client) => (
                    <li 
                      key={client.url} 
                      className={`client-item ${client.url.toLowerCase() === selectedClient.toLowerCase() ? 'selected' : ''}`}
                      onClick={() => handleClientSelect(client.url)}
                    >
                      <img 
                        src={client.logo} 
                        alt={`${client.url} logo`} 
                        className="client-logo"
                      />
                      <span className="client-name">{formatClientName(client.url)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
