import { Link } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import ParticleEffect from '../../components/ParticleEffect/ParticleEffect';
import Avatar from '../../components/Avatar/Avatar';
import CyberpunkBg from '../../components/CyberpunkBg/CyberpunkBg';
import RevealGate from '../../components/RevealGate/RevealGate';
import '../../styles/presentation-text.css';
import './DcoImportance.css';

const DcoImportance: React.FC = () => {
  return (
    <RevealGate
      headline="Why Our DCO Job is So Important"
      tagline="Without DCO, there is no AWS. Without AWS, there is no modern internet"
    >
      <div className="dco-importance">
        <CyberpunkBg />
        <ParticleEffect />
        <Avatar />
        <MusicPlayer />
        <Link to="/" className="back-button">← Back to Home</Link>
        
        {/* Main Title */}
        <h1 className="fancy-title">Why Our DCO Job is So Important</h1>
      <p className="subtitle">A Trainee-Friendly Guide to Understanding DCO's Critical Role</p>
      
      {/* Key Definition */}
      <div className="key-definition">
        <h2>💡 What is DCO?</h2>
        <p className="definition-text">
          <strong>DCO (Data Center Operations)</strong> = The people who keep AWS's physical infrastructure running 24×7
        </p>
        <p className="definition-note">
          Think of us as the "power plant workers" of the cloud world
        </p>
      </div>

      {/* Simple Analogy */}
      <div className="analogy-section">
        <h2>🏗️ A Simple Analogy</h2>
        <div className="analogy-grid">
          <div className="analogy-card">
            <h3>🏙️ If AWS is a City</h3>
            <ul>
              <li><strong>Software Engineers</strong> = Architects designing buildings</li>
              <li><strong>Product Managers</strong> = City planners deciding what to build</li>
              <li><strong>DCO (Us)</strong> = The people who keep the power on, water running, and roads working</li>
            </ul>
            <p className="analogy-note">
              👉 Without us, the entire city goes dark
            </p>
          </div>
        </div>
      </div>

      {/* What We Actually Do */}
      <div className="what-we-do-section">
        <h2>🔧 What DCO Actually Does (Non-Technical Version)</h2>
        <div className="tasks-grid">
          <div className="task-card">
            <span className="task-icon">🖥️</span>
            <h4>Manage Physical Servers</h4>
            <p>Install, monitor, and fix thousands of servers in data centers</p>
          </div>
          <div className="task-card">
            <span className="task-icon">🌡️</span>
            <h4>Control Environment</h4>
            <p>Keep temperature, humidity, and power stable 24×7</p>
          </div>
          <div className="task-card">
            <span className="task-icon">🔌</span>
            <h4>Ensure Power Supply</h4>
            <p>Make sure electricity never stops, even during outages</p>
          </div>
          <div className="task-card">
            <span className="task-icon">🌐</span>
            <h4>Maintain Network</h4>
            <p>Keep cables, switches, and connections working perfectly</p>
          </div>
          <div className="task-card">
            <span className="task-icon">🚨</span>
            <h4>Respond to Incidents</h4>
            <p>Fix problems immediately when something breaks</p>
          </div>
          <div className="task-card">
            <span className="task-icon">📊</span>
            <h4>Monitor Everything</h4>
            <p>Watch thousands of metrics to catch issues before they happen</p>
          </div>
        </div>
      </div>

      {/* Why It's Critical */}
      <div className="critical-section">
        <h2>⚠️ Why DCO Work is CRITICAL</h2>
        <p className="critical-intro">
          Here's what happens if DCO makes a mistake or stops working:
        </p>
        
        <div className="impact-grid">
          <div className="impact-card severe">
            <h3>🔴 Immediate Impact</h3>
            <ul>
              <li>Netflix stops streaming</li>
              <li>Banking apps go offline</li>
              <li>E-commerce sites crash</li>
              <li>Ride-sharing apps fail</li>
              <li>Payment systems freeze</li>
            </ul>
            <p className="impact-note">
              👉 Millions of users affected in seconds
            </p>
          </div>

          <div className="impact-card financial">
            <h3>💰 Financial Impact</h3>
            <ul>
              <li>AWS loses millions per hour</li>
              <li>Customers lose revenue</li>
              <li>Reputation damage</li>
              <li>Potential lawsuits</li>
              <li>Stock price drops</li>
            </ul>
            <p className="impact-note">
              👉 One hour of downtime = $100M+ in losses
            </p>
          </div>
        </div>
      </div>

      {/* Real Numbers */}
      <div className="numbers-section">
        <h2>📊 The Scale We're Talking About</h2>
        <div className="numbers-grid">
          <div className="number-card">
            <span className="big-number">30+</span>
            <p className="number-label">AWS Regions Worldwide</p>
          </div>
          <div className="number-card">
            <span className="big-number">Millions</span>
            <p className="number-label">Servers Under Management</p>
          </div>
          <div className="number-card">
            <span className="big-number">24×7×365</span>
            <p className="number-label">Always On, Never Stop</p>
          </div>
          <div className="number-card">
            <span className="big-number">Billions</span>
            <p className="number-label">Requests Processed Daily</p>
          </div>
        </div>
        <p className="scale-note">
          💡 Every action we take affects millions of users globally
        </p>
      </div>

      {/* Why Companies Trust AWS */}
      <div className="trust-section">
        <h2>🛡️ Why Companies Trust AWS (Because of DCO)</h2>
        <div className="trust-grid">
          <div className="trust-card">
            <h4>99.99% Uptime</h4>
            <p>DCO ensures systems almost never go down</p>
          </div>
          <div className="trust-card">
            <h4>Instant Response</h4>
            <p>DCO teams fix issues in minutes, not hours</p>
          </div>
          <div className="trust-card">
            <h4>Physical Security</h4>
            <p>DCO protects data centers from physical threats</p>
          </div>
          <div className="trust-card">
            <h4>Disaster Recovery</h4>
            <p>DCO has backup plans for every scenario</p>
          </div>
        </div>
      </div>

      {/* Real Examples */}
      <div className="examples-section">
        <h2>🌍 Real-World Examples</h2>
        <div className="example-grid">
          <div className="example-card">
            <h4>🎬 Netflix Streaming</h4>
            <p>
              When you watch Netflix, DCO ensures the servers streaming your video 
              have power, cooling, and network connectivity.
            </p>
          </div>
          <div className="example-card">
            <h4>🏦 Banking Transactions</h4>
            <p>
              When you transfer money, DCO makes sure the database servers 
              are running and your data is safe.
            </p>
          </div>
          <div className="example-card">
            <h4>🚗 Ride-Sharing Apps</h4>
            <p>
              When you book a ride, DCO keeps the backend servers online 
              so drivers can find you.
            </p>
          </div>
          <div className="example-card">
            <h4>🛒 E-Commerce</h4>
            <p>
              During Black Friday sales, DCO ensures servers can handle 
              millions of simultaneous shoppers.
            </p>
          </div>
        </div>
      </div>

      {/* Career Perspective */}
      <div className="career-section">
        <h2>💼 Why DCO is a Great Career</h2>
        <div className="career-grid">
          <div className="career-card">
            <span className="career-icon">🎯</span>
            <h4>Direct Impact</h4>
            <p>Your work immediately affects millions of users</p>
          </div>
          <div className="career-card">
            <span className="career-icon">🔧</span>
            <h4>Hands-On Skills</h4>
            <p>Learn real infrastructure, not just theory</p>
          </div>
          <div className="career-card">
            <span className="career-icon">🚀</span>
            <h4>Career Growth</h4>
            <p>Path to senior infrastructure roles</p>
          </div>
          <div className="career-card">
            <span className="career-icon">💰</span>
            <h4>Job Security</h4>
            <p>Physical infrastructure always needs experts</p>
          </div>
          <div className="career-card">
            <span className="career-icon">🌍</span>
            <h4>Global Opportunities</h4>
            <p>Work in data centers worldwide</p>
          </div>
          <div className="career-card">
            <span className="career-icon">🎓</span>
            <h4>Continuous Learning</h4>
            <p>New technology and challenges every day</p>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="principles-section">
        <h2>🎯 DCO's Core Principles</h2>
        <div className="principles-grid">
          <div className="principle-card">
            <h3>1️⃣ Stability First</h3>
            <p>Never break what's working. Changes must be careful and tested.</p>
          </div>
          <div className="principle-card">
            <h3>2️⃣ Security Always</h3>
            <p>Physical and digital security is non-negotiable.</p>
          </div>
          <div className="principle-card">
            <h3>3️⃣ Speed Matters</h3>
            <p>When something breaks, every second counts.</p>
          </div>
          <div className="principle-card">
            <h3>4️⃣ Documentation Everything</h3>
            <p>Record every action so others can learn and troubleshoot.</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-section">
        <h2>📝 One-Sentence Summary for Trainees</h2>
        <div className="summary-box">
          <p className="summary-text">
            "DCO is the team that keeps AWS's physical infrastructure running 24×7, 
            ensuring that <strong>millions of customers worldwide</strong> can rely on 
            <strong>stable, secure, and always-available</strong> cloud services."
          </p>
        </div>
      </div>

      {/* Final Message */}
      <div className="final-message">
        <h2>💪 Remember This</h2>
        <div className="message-box">
          <p>
            Without DCO, there is no AWS.<br/>
            Without AWS, there is no Netflix, no banking apps, no ride-sharing, no modern internet.
          </p>
          <p className="highlight-text">
            <strong>Your work as DCO literally keeps the modern world running.</strong>
          </p>
        </div>
      </div>
      
      </div>
    </RevealGate>
  );
};

export default DcoImportance;
