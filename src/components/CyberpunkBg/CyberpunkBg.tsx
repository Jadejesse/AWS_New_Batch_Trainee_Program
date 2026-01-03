import React from 'react';
import '../../styles/cyberpunk-bg.css';

const CyberpunkBg: React.FC = () => {
  return (
    <div className="cyberpunk-bg">
      <div className="neon-grid"></div>
      <div className="scan-lines"></div>
      
      {/* Neon Buildings */}
      <div className="neon-buildings">
        <div className="building building-1"></div>
        <div className="building building-2"></div>
        <div className="building building-3"></div>
        <div className="building building-4"></div>
        <div className="building building-5"></div>
        <div className="building building-6"></div>
        <div className="building building-7"></div>
      </div>
      
      {/* Floating Neon Particles */}
      <div className="neon-particle"></div>
      <div className="neon-particle"></div>
      <div className="neon-particle"></div>
      <div className="neon-particle"></div>
      <div className="neon-particle"></div>
    </div>
  );
};

export default CyberpunkBg;
