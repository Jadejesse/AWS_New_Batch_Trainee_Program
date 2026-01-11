import { Link } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import ParticleEffect from '../../components/ParticleEffect/ParticleEffect';
import Avatar from '../../components/Avatar/Avatar';
import CyberpunkBg from '../../components/CyberpunkBg/CyberpunkBg';
import RevealGate from '../../components/RevealGate/RevealGate';
import '../../styles/presentation-text.css';
import './WhatIsCloud.css';

const WhatIsCloud: React.FC = () => {
  return (
    <div className="what-is-cloud">
      <CyberpunkBg />
      <ParticleEffect />
      <RevealGate
        headline="What is Cloud?"
        tagline="Cloud is just someone else's computer, but scaled and automated."
      >
        <Avatar />
        <MusicPlayer />
        <Link to="/" className="back-button">← Back to Home</Link>
        
        <h1 className="fancy-title">What is Cloud?</h1>
        <p className="subtitle">The Foundation of Modern AWS Training</p>

        {/* Key Definition */}
        <div className="key-definition">
          <h2>💡 The Simple Definition</h2>
          <p className="definition-text">
            Cloud Computing is the <strong>on-demand delivery</strong> of IT resources 
            over the internet with <strong>pay-as-you-go pricing</strong>.
          </p>
          <p className="definition-note">
            Instead of buying and maintaining physical data centers, you access technology services like computing power, storage, and databases on an as-needed basis.
          </p>
        </div>

        {/* Utility Analogy */}
        <div className="analogy-section">
          <h2>🚿 The Utility Analogy</h2>
          <div className="analogy-grid">
            <div className="analogy-card">
              <h3>Traditional IT</h3>
              <p>Like digging a well and building a water treatment plant just to get a glass of water.</p>
              <p className="result bad">Huge upfront cost + Maintenance</p>
            </div>
            <div className="analogy-card highlight">
              <h3>Cloud Computing</h3>
              <p>Like turning on a faucet. You use water when you need it and only pay for what you use.</p>
              <p className="result good">No upfront cost + Scalable</p>
            </div>
          </div>
        </div>

        {/* Service Models */}
        <div className="service-models">
          <h2>🏗️ Service Models (The 3 Layers)</h2>
          <div className="models-grid">
            <div className="model-card iaas">
              <span className="model-icon">🧱</span>
              <h3>IaaS</h3>
              <p className="model-full">Infrastructure as a Service</p>
              <p className="model-desc">The basic building blocks. Networking, computers, and data storage space.</p>
              <p className="example">Example: Amazon EC2</p>
            </div>
            <div className="model-card paas">
              <span className="model-icon">🛠️</span>
              <h3>PaaS</h3>
              <p className="model-full">Platform as a Service</p>
              <p className="model-desc">Removes the need to manage the underlying infrastructure (hardware/OS).</p>
              <p className="example">Example: AWS Elastic Beanstalk</p>
            </div>
            <div className="model-card saas">
              <span className="model-icon">💻</span>
              <h3>SaaS</h3>
              <p className="model-full">Software as a Service</p>
              <p className="model-desc">Completed product that is run and managed by the service provider.</p>
              <p className="example">Example: Gmail, Salesforce</p>
            </div>
          </div>
        </div>

        {/* Deployment Models */}
        <div className="deployment-models">
          <h2>🌐 Deployment Models</h2>
          <div className="deployment-grid">
            <div className="deployment-card">
              <h3>Public Cloud</h3>
              <p>Cloud resources owned and operated by a third-party cloud service provider (like AWS).</p>
            </div>
            <div className="deployment-card">
              <h3>Private Cloud</h3>
              <p>Cloud resources used exclusively by a single business or organization.</p>
            </div>
            <div className="deployment-card highlight">
              <h3>Hybrid Cloud</h3>
              <p>Combines on-premises infrastructure (private cloud) with public clouds.</p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="advantages-section">
          <h2>🚀 Why Everyone is Moving to Cloud?</h2>
          <div className="advantages-list">
            <div className="advantage-item">✅ Trade Capital Expense for Variable Expense</div>
            <div className="advantage-item">✅ Benefit from Massive Economies of Scale</div>
            <div className="advantage-item">✅ Stop Guessing Capacity</div>
            <div className="advantage-item">✅ Increase Speed and Agility</div>
            <div className="advantage-item">✅ Stop Spending Money Running Data Centers</div>
            <div className="advantage-item">✅ Go Global in Minutes</div>
          </div>
        </div>

      </RevealGate>
    </div>
  );
};

export default WhatIsCloud;
