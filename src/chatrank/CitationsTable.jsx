import React, { useState, useEffect } from 'react';
import { Tab } from '../components/Tab';
import './CitationsTable.css';

const fetchCitationsData = async (customerId) => {
  try {
    const response = await fetch(`/chatrank/data/${customerId}/citations.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${customerId}`);
    }
    const data = await response.json();
    return data.citations;
  } catch (error) {
    console.error('Error fetching citations data:', error);
    return [];
  }
};

export const CitationsTable = ({ customerId = 'adidas' }) => {
  const [activeTab, setActiveTab] = useState('myBrands');
  const [selectedRow, setSelectedRow] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [citationsData, setCitationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logoErrorMap, setLogoErrorMap] = useState({});

  useEffect(() => {
    console.log('CitationsTable mounted/updated');
    console.log('Current customerId:', customerId);
    
    const loadCitationsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCitationsData(customerId);
        console.log('Fetched citations data:', data);
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received');
        }
        setCitationsData(data);
        setError(null);
      } catch (err) {
        console.error('Error loading citations data:', err);
        setError('Failed to load citations data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadCitationsData();
  }, [customerId]);

  const handleImgError = (rank) => {
    setLogoErrorMap((prev) => ({ ...prev, [rank]: true }));
  };

  if (!citationsData || !Array.isArray(citationsData)) {
    console.error('Invalid citations data:', citationsData);
    return (
      <div className="citations-table">
        <div className="citations-header">
          <div className="citations-title">Citations & Sources</div>
          <div className="citations-legend">
            <div className="legend-item">
              <div className="legend-color citation-color"></div>
              <div className="legend-text">Citation</div>
            </div>
            <div className="legend-item">
              <div className="legend-color source-color"></div>
              <div className="legend-text">Source</div>
            </div>
            <div className="legend-item">
              <div className="legend-color none-color"></div>
              <div className="legend-text">None</div>
            </div>
          </div>
          <div className="citations-tabs">
            <Tab
              isSelected={activeTab === 'myBrands' ? 'on' : 'off'}
              text="My Brands"
              onClick={() => setActiveTab('myBrands')}
            />
            <Tab
              isSelected={activeTab === 'myAudiences' ? 'on' : 'off'}
              text="My Audiences"
              onClick={() => setActiveTab('myAudiences')}
            />
          </div>
        </div>
        <div className="error-state">Invalid data format received</div>
      </div>
    );
  }

  console.log('CitationsTable: Rendering with data:', citationsData);

  const handleRowClick = (rank) => {
    setSelectedRow(rank === selectedRow ? null : rank);
  };

  return (
    <div className="citations-table">
      <div className="citations-header">
        <div className="citations-title">Citations & Sources</div>
        
        <div className="citations-legend">
          <div className="legend-item">
            <div className="legend-color citation-color"></div>
            <div className="legend-text">Citation</div>
          </div>
          <div className="legend-item">
            <div className="legend-color source-color"></div>
            <div className="legend-text">Source</div>
          </div>
          <div className="legend-item">
            <div className="legend-color none-color"></div>
            <div className="legend-text">None</div>
          </div>
        </div>
        
        <div className="citations-tabs">
          <Tab
            isSelected={activeTab === 'myBrands' ? 'on' : 'off'}
            text="My Brands"
            onClick={() => setActiveTab('myBrands')}
          />
          <Tab
            isSelected={activeTab === 'myAudiences' ? 'on' : 'off'}
            text="My Audiences"
            onClick={() => setActiveTab('myAudiences')}
          />
        </div>
      </div>
      
      <div className="citations-table-container" role="table" aria-label="Citations and Sources">
        <div className="citations-table-header" role="rowgroup">
          <div className="citations-header-row" role="row">
            <div className="citations-header-cell rank-column" role="columnheader">Rank</div>
            <div className="citations-header-cell url-column" role="columnheader">URL</div>
            <div className="citations-header-cell share-column" role="columnheader">Share</div>
            <div className="citations-header-cell score-column" role="columnheader">Score</div>
            <div className="citations-header-cell volume-column" role="columnheader">Volume</div>
          </div>
        </div>
        
        <div className="citations-table-body" role="rowgroup">
          {isLoading ? (
            <div className="loading-state">Loading citations data...</div>
          ) : error ? (
            <div className="error-state">{error}</div>
          ) : citationsData.length === 0 ? (
            <div className="empty-state">No citations data available.</div>
          ) : (
            citationsData.map((item) => {
              const logoShouldHide = !item.logo || logoErrorMap[item.rank];
              return (
                <div 
                  key={`citation-${item.rank}`} 
                  className={`citations-row ${selectedRow === item.rank ? 'highlight' : ''}`}
                  role="row"
                  onClick={() => handleRowClick(item.rank)}
                  onMouseEnter={() => setHoveredRow(item.rank)}
                  onMouseLeave={() => setHoveredRow(null)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleRowClick(item.rank);
                      e.preventDefault();
                    }
                  }}
                  aria-selected={selectedRow === item.rank}
                >
                  <div className="citations-cell rank-column" role="cell">{item.rank}.</div>
                  <div className="citations-cell url-column" role="cell">
                    <div className="url-content">
                      <span
                        className={`url-logo-wrapper${logoShouldHide ? ' hide-logo' : ''}`}
                      >
                        {!logoShouldHide && (
                          <img
                            className="url-logo"
                            src={item.logo}
                            alt={item.url + ' logo'}
                            onError={() => handleImgError(item.rank)}
                          />
                        )}
                      </span>
                      <div className="url-text">{item.url}</div>
                    </div>
                  </div>
                  <div className="citations-cell share-column" role="cell">
                    <div className="share-bar">
                      <div className="share-segment citation-segment" style={{ width: `${item.citation}%` }}>
                        <div className="segment-value">{item.citation}%</div>
                      </div>
                      <div className="share-segment source-segment" style={{ width: `${item.source}%` }}>
                        <div className="segment-value">{item.source}%</div>
                      </div>
                      <div className="share-segment none-segment" style={{ width: `${item.none}%` }}>
                        <div className="segment-value">{item.none}%</div>
                      </div>
                    </div>
                  </div>
                  <div className="citations-cell score-column" role="cell">
                    <div className="score-value">{item.score}</div>
                  </div>
                  <div className="citations-cell volume-column" role="cell">
                    <div className="volume-value">{item.volume}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CitationsTable;
