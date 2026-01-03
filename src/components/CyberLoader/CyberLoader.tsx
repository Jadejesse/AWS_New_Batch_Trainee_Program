import React from 'react';
import './CyberLoader.css';

const CyberLoader: React.FC = () => {
  return (
    <div className="cyber-loader-overlay">
      <div className="cyber-loader">
        <div className="cyber-grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="grid-line" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <div className="cyber-circle">
          <div className="circle-inner"></div>
          <div className="circle-outer"></div>
        </div>
        <div className="cyber-text">
          <span className="glitch" data-text="LOADING">LOADING</span>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
        <div className="scan-line"></div>
      </div>
    </div>
  );
};

export default CyberLoader;
