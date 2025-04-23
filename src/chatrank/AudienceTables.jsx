import React, { useState, useEffect, useMemo } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { CitationsTable } from './CitationsTable';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const brandIconMap = {
  'ABC': 'https://upload.wikimedia.org/wikipedia/commons/6/66/ABC-2021-LOGO.svg',
  'Netflix': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'YouTube': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
  'Disney+': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
  'Hulu': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg',
  'Amazon Prime Video': 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Amazon_Prime_Video_logo.svg',
  'default': 'https://upload.wikimedia.org/wikipedia/commons/6/66/ABC-2021-LOGO.svg'
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

export const AudienceTables = ({ customerId = 'adidas', dataDisplay = 'list' }) => {
  const [audienceData, setAudienceData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredState, setHoveredState] = useState({});
  const [highlightedState, setHighlightedState] = useState({});
  const [currentChartType, setCurrentChartType] = useState(dataDisplay);

  useEffect(() => {
    console.log('Customer ID changed:', customerId);
    const loadAudienceData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAudienceData(customerId);
        console.log
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
        console.error('Error loading audience data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadAudienceData();
  }, [customerId]);

  const fetchAudienceData = async (customerId) => {
    try {
      const path = `/chatrank/data/${customerId}/audience-data.json`;
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Could not load data for customer: ${customerId}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      setAudienceData({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('Chart type changed:', dataDisplay);
    setCurrentChartType(dataDisplay);
  }, [dataDisplay]);

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

  // --- NEW: Compute maxRows for all tables ---
  const maxRows = React.useMemo(() => {
    if (!audienceData || typeof audienceData !== 'object') return 0;
    return Math.max(
      0,
      ...Object.values(audienceData).map(arr => Array.isArray(arr) ? arr.length : 0)
    );
  }, [audienceData]);

  const renderChart = (title, data, tableId) => {
    if (isLoading) {
      return (
        <div className="audience-table loading">
          <div className="table-title">Loading...</div>
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

    const labels = data.map(item => item.name);
    const mentions = data.map(item => parseFloat(item.mentions.replace('%', '')));

    const chartData = {
      labels,
      datasets: [{
        label: 'Mentions (%)',
        data: mentions,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        borderColor: '#1F2937',
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 13,
              weight: '700'
            },
            color: '#1F2937'
          }
        },
        title: {
          display: true,
          text: title,
          font: {
            size: 16,
            weight: '700'
          },
          color: '#1F2937',
          padding: {
            top: 16,
            bottom: 8
          }
        }
      }
    };

    let ChartComponent;
    if (currentChartType === 'bar') {
      ChartComponent = Bar;
    } else if (currentChartType === 'pie') {
      ChartComponent = Pie;
    } else {
      return renderTable(title, data, tableId, maxRows);
    }

    return (
      <div className="audience-table">
        <div className="chart-container">
          <ChartComponent data={chartData} options={options} />
        </div>
      </div>
    );
  };

  const renderTable = (title, data, tableId, maxRows) => {
    if (isLoading) {
      return (
        <div className="audience-table loading">
          <div className="table-title">Loading...</div>
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

    const rows = [...data];
    while (rows.length < maxRows) {
      rows.push({ id: `empty-${rows.length}`, empty: true });
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
          {rows.map((item, idx) => {
            if (item.empty) {
              return (
                <div
                  key={item.id}
                  className="table-row empty-row"
                  style={{ background: 'transparent', cursor: 'default', height: '44px' }}
                  role="row"
                  aria-hidden="true"
                >
                  <div className="table-cell rank-cell" role="cell"></div>
                  <div className="table-cell product-cell" role="cell"></div>
                  <div className="table-cell mentions-cell" role="cell"></div>
                </div>
              );
            }
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
                style={{ height: '44px' }}
              >
                <div className="table-cell rank-cell" role="cell">
                  {item.rank}.
                </div>
                <div className="table-cell product-cell" role="cell">
                  {item.iconUrl ? (
                    <img 
                      src={item.iconUrl}
                      alt=""
                      className="product-logo"
                    />
                  ) : (
                    <div className="product-logo-placeholder" />
                  )}
                  <span className={`product-name ${!item.iconUrl ? 'no-icon' : ''}`}>{item.name}</span>
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
            {currentChartType === 'bar' || currentChartType === 'pie'
              ? renderChart(formatTableTitle(key), value, key)
              : renderTable(formatTableTitle(key), value, key, maxRows)}
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

const styles = `
  .audience-tables {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .audience-tables-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
  }

  .audience-table {
    flex: 1;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    min-width: 0;
  }

  .table-title {
    font-size: 16px;
    font-weight: 700;
    color: #1F2937;
    padding: 16px 16px 0 16px;
    background-color: #ffffff;
  }

  .table-header {
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    padding-top: 8px;
  }

  .header-row {
    display: flex;
    align-items: center;
    padding: 16px;
  }

  .header-cell {
    font-size: 13px;
    font-weight: 700;
    color: #1F2937;
    line-height: 16px;
    padding: 8px 0;
  }

  .rank-cell {
    width: 40px;
    font-weight: 500;
  }

  .product-cell {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mentions-cell {
    width: 60px;
    text-align: right;
  }

  .table-body {
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .table-row {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-bottom: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .table-row:hover {
    background-color: #f4f4f5;
  }

  .table-row.highlight {
    background-color: #ecfdf5;
    border: 1px solid #10b981;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }

  .table-row.hovered:not(.highlight):not(.selected) {
    background-color: #f4f4f5;
  }

  .table-row.selected:not(.highlight) {
    background-color: #e6f0ff;
    border: 1px solid #2563eb;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .table-row:focus {
    outline: 2px solid #2563eb;
    outline-offset: -2px;
  }

  .table-cell {
    font-size: 13px;
    font-weight: 400;
    color: #1F2937;
    line-height: 16px;
    padding: 0 8px;
  }

  .product-logo {
    width: 24px;
    height: 24px;
  }

  .product-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trend-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 8px;
  }

  .trend-arrow {
    width: 10px;
    height: 10px;
    background-color: #16a34a;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .trend-value {
    font-size: 11px;
    font-weight: 600;
    color: #16a34a;
    line-height: 13px;
  }

  .header-cell.product-cell {
    flex: 1;
  }

  .audience-table.loading,
  .audience-table.error,
  .audience-table.empty {
    padding: 16px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .loading-message,
  .error-message,
  .empty-message {
    padding: 24px 16px;
    text-align: center;
    color: #6b7280;
    font-size: 14px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-top: 16px;
  }

  .error-message {
    color: #e53935;
    border-color: #ffcdd2;
    background-color: #ffebee;
  }

  .empty-message {
    color: #9ca3af;
  }

  .chart-container {
    max-width: 100%;
    height: 300px;
    padding: 16px;
  }

  @media (max-width: 992px) {
    .audience-tables-row {
      flex-direction: column;
      gap: 20px;
    }
    
    .audience-table {
      width: 100%;
    }
  }

  .citations-table {
    margin-top: 20px;
    width: 100%;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);