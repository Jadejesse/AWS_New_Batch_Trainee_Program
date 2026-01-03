import { Link } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import ParticleEffect from '../../components/ParticleEffect/ParticleEffect';
import Avatar from '../../components/Avatar/Avatar';
import CyberpunkBg from '../../components/CyberpunkBg/CyberpunkBg';
import RevealGate from '../../components/RevealGate/RevealGate';
import '../../styles/presentation-text.css';
import './WhatIsAws.css';

const WhatIsAws: React.FC = () => {
  return (
    <div className="what-is-aws">
      <CyberpunkBg />
      <ParticleEffect />
      <RevealGate
        headline="What is AWS?"
        tagline="AWS rents compute + storage + networking on-demand — pay only what you use."
      >
        <Avatar />
        <MusicPlayer />
        <Link to="/" className="back-button">← Back to Home</Link>
        
        {/* Main Title */}
        <h1 className="fancy-title">What is AWS?</h1>
        <p className="subtitle">A 5-Minute Guide for New Trainees</p>
      
      {/* Key Definition */}
      <div className="key-definition">
        <h2>💡 The One Sentence You Must Remember</h2>
        <p className="definition-text">
          AWS puts <strong>servers, storage, and networking</strong> online, 
          and rents them to anyone who needs them, on-demand.
        </p>
        <p className="definition-note">
          If trainees only remember this one sentence, they're already qualified.
        </p>
      </div>

      {/* Before vs After */}
      <div className="comparison-section">
        <h2>📊 A Real-World Example</h2>
        <div className="comparison-grid">
          <div className="comparison-card before">
            <h3>❌ Traditional Way (Before AWS)</h3>
            <p className="card-intro">When a company wanted to build a website, they had to:</p>
            <ul>
              <li>Buy servers</li>
              <li>Rent a data center</li>
              <li>Set up networking</li>
              <li>Hire 24×7 staff to monitor machines</li>
              <li>Keep paying even when not using</li>
            </ul>
            <p className="result bad">👉 Expensive, slow, and complicated</p>
          </div>

          <div className="comparison-card after">
            <h3>✅ With AWS</h3>
            <p className="card-intro">AWS says: "Don't buy servers, just rent from us when you need them."</p>
            <ul>
              <li>Need 1 server today → Click and it's ready</li>
              <li>Don't need it tomorrow → Turn it off, stop paying</li>
              <li>Global data centers → Fast for users everywhere</li>
            </ul>
            <p className="result good">👉 Just like using water or electricity</p>
          </div>
        </div>
      </div>

      {/* Supermarket Analogy */}
      <div className="analogy-section">
        <h2>🏪 The Best Analogy: AWS is a "Cloud IT Supermarket"</h2>
        <p className="analogy-intro">
          In this supermarket, you can find everything you need:
        </p>
        <div className="supermarket-grid">
          <div className="supermarket-item">
            <span className="item-icon">💻</span>
            <h4>Need Computers?</h4>
            <p>We have them (EC2)</p>
          </div>
          <div className="supermarket-item">
            <span className="item-icon">💾</span>
            <h4>Need Storage?</h4>
            <p>We have it (S3)</p>
          </div>
          <div className="supermarket-item">
            <span className="item-icon">🌐</span>
            <h4>Need Networking?</h4>
            <p>We have it (VPC)</p>
          </div>
          <div className="supermarket-item">
            <span className="item-icon">🗄️</span>
            <h4>Need Databases?</h4>
            <p>We have them (RDS)</p>
          </div>
          <div className="supermarket-item">
            <span className="item-icon">⚡</span>
            <h4>Need Auto-Running Code?</h4>
            <p>We have it (Lambda)</p>
          </div>
        </div>
        <p className="pay-model">💰 You use what you need, and pay only for what you use.</p>
      </div>

      {/* What AWS is NOT */}
      <div className="not-section">
        <h2>🚫 What AWS is NOT</h2>
        <div className="not-grid">
          <div className="not-item">
            <p className="not-text">❌ AWS is NOT a website</p>
          </div>
          <div className="not-item">
            <p className="not-text">❌ AWS is NOT a single server</p>
          </div>
          <div className="not-item">
            <p className="not-text">❌ AWS is NOT only for Amazon's internal use</p>
          </div>
        </div>
        <p className="correct-definition">
          ✅ AWS is a <strong>cloud platform for companies worldwide</strong>
        </p>
      </div>

      {/* Who Uses AWS */}
      <div className="customers-section">
        <h2>👥 Who Are AWS Customers?</h2>
        <p className="customers-intro">
          AWS customers are <strong>NOT regular consumers</strong>, but:
        </p>
        <div className="customers-grid">
          <div className="customer-type">
            <span className="customer-icon">🏢</span>
            <p>Companies</p>
          </div>
          <div className="customer-type">
            <span className="customer-icon">🚀</span>
            <p>Startups</p>
          </div>
          <div className="customer-type">
            <span className="customer-icon">🏦</span>
            <p>Banks</p>
          </div>
          <div className="customer-type">
            <span className="customer-icon">🏛️</span>
            <p>Governments</p>
          </div>
          <div className="customer-type">
            <span className="customer-icon">📱</span>
            <p>App/Website/Game Companies</p>
          </div>
        </div>
        <div className="examples-box">
          <h3>Real Examples (No Technical Details Needed):</h3>
          <ul>
            <li>Netflix videos</li>
            <li>Mobile app backends</li>
            <li>Banking systems</li>
            <li>Food delivery, ride-sharing, payment apps</li>
          </ul>
          <p className="examples-note">
            👉 Many things you use every day are running on AWS behind the scenes
          </p>
        </div>
      </div>

      {/* Core 3 Capabilities */}
      <div className="core-capabilities">
        <h2>🎯 AWS's 3 Core Capabilities (Trainee Version)</h2>
        <p className="capabilities-intro">The "Three-Piece Set":</p>
        <div className="capabilities-grid">
          <div className="capability-card">
            <span className="capability-number">1️⃣</span>
            <h3>Computing (Compute)</h3>
            <p className="capability-desc">
              "Computers in the cloud" that run your programs
            </p>
          </div>
          <div className="capability-card">
            <span className="capability-number">2️⃣</span>
            <h3>Storage</h3>
            <p className="capability-desc">
              "Hard drives in the cloud" that store files, images, and data
            </p>
          </div>
          <div className="capability-card">
            <span className="capability-number">3️⃣</span>
            <h3>Networking</h3>
            <p className="capability-desc">
              Securely connects users and servers together
            </p>
          </div>
        </div>
        <p className="summary-line">
          <strong>One-line summary:</strong> AWS provides Computing Power + Storage + Networking
        </p>
      </div>

      {/* Why Companies Love AWS */}
      <div className="benefits-section">
        <h2>❤️ Why Companies Love AWS (Non-Technical Version)</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="benefit-icon">💰</span>
            <h4>No Need to Buy Equipment</h4>
            <p>Saves money</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">⚡</span>
            <h4>Use When You Need</h4>
            <p>Fast and flexible</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">📊</span>
            <h4>Pay for What You Use</h4>
            <p>Flexible pricing</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🌍</span>
            <h4>Available Globally</h4>
            <p>Massive scale</p>
          </div>
        </div>
      </div>

      {/* Connection to Amazon */}
      <div className="amazon-connection">
        <h2>🔗 Quick Connection: AWS and Amazon</h2>
        <p className="connection-text">
          "Amazon is a company; AWS is Amazon's cloud computing business division."
        </p>
        <p className="connection-note">That's enough. No need to expand further.</p>
      </div>

      {/* Work Summary */}
      <div className="work-summary">
        <h2>💼 One-Sentence Work Summary for Trainees</h2>
        <div className="summary-box">
          <p className="summary-text">
            "Our work at AWS is to ensure these cloud services are 
            <strong> stable, secure, and always available</strong>, 
            because countless customers worldwide depend on AWS to run their systems."
          </p>
        </div>
      </div>

      {/* Advantages */}
      <div className="advantages-section">
        <h2>✨ Advantages of This Explanation</h2>
        <div className="advantages-list">
          <div className="advantage-item">✅ Not abstract</div>
          <div className="advantage-item">✅ No technical jargon</div>
          <div className="advantage-item">✅ Doesn't intimidate new trainees</div>
          <div className="advantage-item">✅ Reflects real AWS usage scenarios</div>
          <div className="advantage-item">✅ Directly relevant to data center / infrastructure work</div>
        </div>
      </div>
      
      </RevealGate>
    </div>
  );
};

export default WhatIsAws;
