import React, { useState, useEffect } from 'react';
import { CitationsTable } from './CitationsTable';
import './AudienceTables.css';

const brandIconMap = {
  'Nike': 'https://c.animaapp.com/2o30tgAo/img/group-5066-7@2x.png',
  'Adidas': 'https://c.animaapp.com/2o30tgAo/img/group-5067@2x.png',
  'New Balance': 'https://c.animaapp.com/2o30tgAo/img/group-5069@2x.png',
  'ASICS': 'https://c.animaapp.com/2o30tgAo/img/group-5068-2@2x.png',
  'Brooks': 'https://c.animaapp.com/2o30tgAo/img/group-5070-1@2x.png',
  'Hoka': 'https://c.animaapp.com/2o30tgAo/img/group-5071@2x.png',
  'Air Jordan': 'https://c.animaapp.com/2o30tgAo/img/group-5089@2x.png',
  'default': 'https://c.animaapp.com/2o30tgAo/img/group-5093@2x.png'
};

const getBrandIconUrl = (productName) => {
  const brandKey = Object.keys(brandIconMap).find(brand => 
    productName.includes(brand)
  );
  
  return brandKey ? brandIconMap[brandKey] : brandIconMap.default;
};

const formatTableTitle = (arrayName) => {
  const withSpaces = arrayName.replace(/([A-Z])/g, ' $1');
  const capitalized = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
  return capitalized.replace(/\s*Data\s*$/, '');
};

const fetchAudienceData = async (customerId = 'adidas') => {
  try {
    const response = await fetch(`/src/chatrank/data/${customerId}/audience-data.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch audience data for ${customerId}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching audience data:', error);
    throw error;
  }
};

export const AudienceTables = ({ customerId = 'adidas' }) => {
  const [audienceData, setAudienceData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [hoveredState, setHoveredState] = useState({});
  const [highlightedState, setHighlightedState] = useState({});

  useEffect(() => {
    const loadAudienceData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAudienceData(customerId);
        setAudienceData(data);
        
        const initialHoveredState = {};
        const initialHighlightedState = {};
        
        Object.keys(data).forEach(key => {
          initialHoveredState[key] = null;
          initialHighlightedState[key] = new Set();
        });
        
        setHoveredState(initialHoveredState);
        setHighlightedState(initialHighlightedState);
        setError(null);
      } catch (err) {
        setError('Failed to load audience data. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadAudienceData();
  }, [customerId]);

  const handleMouseEnter = (tableId, rowId) => {
    setHoveredState(prev => ({
      ...prev,
      [tableId]: rowId
    }));
  };

  const handleMouseLeave = (tableId) => {
    setHoveredState(prev => ({
      ...prev,
      [tableId]: null
    }));
  };

  const handleClick = (tableId, rowId) => {
    setHighlightedState(prev => {
      const newHighlighted = { ...prev };
      const tableSet = new Set(newHighlighted[tableId]);
      
      if (tableSet.has(rowId)) {
        tableSet.delete(rowId);
      } else {
        tableSet.add(rowId);
      }
      
      newHighlighted[tableId] = tableSet;
      return newHighlighted;
    });
  };

  const renderTable = (title, data, tableId) => {
    if (isLoading) {
      return (
        <div className="audience-table loading">
          <div className="table-title">{title}</div>
          <div className="loading-message">Loading data...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="audience-table error">
          <div className="table-title">{title}</div>
          <div className="error-message">{error}</div>
        </div>
      );
    }

    if (!data || data.length === 0) {
      return (
        <div className="audience-table empty">
          <div className="table-title">{title}</div>
          <div className="empty-message">No data available.</div>
        </div>
      );
    }

    return (
      <div className="audience-table" role="table" aria-label={title}>
        <div className="table-title">{title}</div>
        
        <div className="table-header" role="rowgroup">
          <div className="header-row" role="row">
            <div className="header-cell rank-cell" role="columnheader">Rank</div>
            <div className="header-cell product-cell" role="columnheader">Product</div>
            <div className="header-cell mentions-cell" role="columnheader">Mentions</div>
          </div>
        </div>
        
        <div className="table-body" role="rowgroup">
          {data.map((item) => {
            const isHovered = hoveredState[tableId] === item.id;
            const isHighlighted = highlightedState[tableId]?.has(item.id);
            
            return (
              <div 
                key={item.id}
                className={`table-row ${isHighlighted ? 'highlight' : ''} ${isHovered ? 'hovered' : ''}`}
                role="row"
                onMouseEnter={() => handleMouseEnter(tableId, item.id)}
                onMouseLeave={() => handleMouseLeave(tableId)}
                onClick={() => handleClick(tableId, item.id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleClick(tableId, item.id);
                    e.preventDefault();
                  }
                }}
              >
                <div className="table-cell rank-cell" role="cell">
                  {item.rank}.
                </div>
                <div className="table-cell product-cell" role="cell">
                  <img 
                    src={getBrandIconUrl(item.name)}
                    alt=""
                    className="product-logo"
                  />
                  <span className="product-name">{item.name}</span>
                  {item.trend && (
                    <div className="trend-indicator">
                      <div className="trend-arrow" />
                      <span className="trend-value">{item.trend}</span>
                    </div>
                  )}
                </div>
                <div className="table-cell mentions-cell" role="cell">
                  {item.mentions}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="audience-tables">
      <div className="audience-tables-row">
        {!isLoading && !error && Object.entries(audienceData).map(([key, value]) => (
          <React.Fragment key={key}>
            {renderTable(formatTableTitle(key), value, key)}
          </React.Fragment>
        ))}
        
        {isLoading && (
          <>
            <div className="audience-table loading">
              <div className="table-title">Loading...</div>
              <div className="loading-message">Loading data...</div>
            </div>
            <div className="audience-table loading">
              <div className="table-title">Loading...</div>
              <div className="loading-message">Loading data...</div>
            </div>
            <div className="audience-table loading">
              <div className="table-title">Loading...</div>
              <div className="loading-message">Loading data...</div>
            </div>
          </>
        )}
        
        {error && (
          <div className="audience-table error">
            <div className="table-title">Error</div>
            <div className="error-message">{error}</div>
          </div>
        )}
      </div>
      
      <CitationsTable customerId={customerId} />
    </div>
  );
};