import { Link } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import ParticleEffect from '../../components/ParticleEffect/ParticleEffect';
import Avatar from '../../components/Avatar/Avatar';
import CyberpunkBg from '../../components/CyberpunkBg/CyberpunkBg';
import RevealGate from '../../components/RevealGate/RevealGate';
import '../../styles/presentation-text.css';
import './AwsCustomers.css';

const AwsCustomers: React.FC = () => {
  const customerTypes = [
    {
      icon: '🏦',
      name: 'Banks & Financial Services',
      examples: ['Capital One', 'Goldman Sachs', 'NASDAQ'],
      impact: 'Handle millions of transactions daily'
    },
    {
      icon: '🏛️',
      name: 'Government Agencies',
      examples: ['NASA', 'CIA', 'US Department of Defense'],
      impact: 'Run critical national infrastructure'
    },
    {
      icon: '🚀',
      name: 'Startups & Tech Companies',
      examples: ['Airbnb', 'Slack', 'Lyft'],
      impact: 'Scale from zero to millions of users'
    },
    {
      icon: '🎬',
      name: 'Media & Entertainment',
      examples: ['Netflix', 'Disney+', 'Twitch'],
      impact: 'Stream billions of hours of content'
    },
    {
      icon: '🛒',
      name: 'E-Commerce',
      examples: ['Amazon.com', 'Shopify stores', 'Etsy'],
      impact: 'Process millions of orders daily'
    },
    {
      icon: '🎮',
      name: 'Gaming Companies',
      examples: ['Epic Games', 'Riot Games', 'Zynga'],
      impact: 'Support millions of concurrent players'
    }
  ];

  return (
    <RevealGate
      headline="Who Uses AWS?"
      tagline="When we have a problem, their business stops"
    >
      <div className="aws-customers">
        <CyberpunkBg />
        <ParticleEffect />
        <Avatar />
        <MusicPlayer />
        <Link to="/" className="back-button">← Back to Home</Link>
        
        <h1 className="fancy-title">Who Uses AWS?</h1>
      <p className="subtitle">Understanding Our Customers and Their Impact</p>
      
      {/* Key Message */}
      <div className="key-message">
        <h2>🎯 The Critical Truth</h2>
        <p className="message-text">
          "When <strong>we</strong> have a problem, <strong>their business</strong> stops."
        </p>
        <p className="message-note">
          This is why DCO work is not just technical—it's business-critical for the entire world.
        </p>
      </div>

      {/* Customer Types */}
      <div className="customer-types-section">
        <h2>📊 AWS Customer Categories</h2>
        <div className="customer-types-grid">
          {customerTypes.map((type, idx) => (
            <div key={idx} className="customer-type-card">
              <span className="customer-type-icon">{type.icon}</span>
              <h3>{type.name}</h3>
              <div className="examples">
                <h4>Examples:</h4>
                <ul>
                  {type.examples.map((example, eIdx) => (
                    <li key={eIdx}>{example}</li>
                  ))}
                </ul>
              </div>
              <p className="impact">{type.impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real Impact */}
      <div className="real-impact-section">
        <h2>💥 What Happens When AWS Goes Down?</h2>
        <div className="impact-scenarios">
          <div className="scenario-card critical">
            <h3>🔴 First 5 Minutes</h3>
            <ul>
              <li>Websites show error pages</li>
              <li>Mobile apps stop working</li>
              <li>Users start complaining on social media</li>
              <li>Customer support gets flooded</li>
            </ul>
          </div>
          <div className="scenario-card severe">
            <h3>🟠 After 30 Minutes</h3>
            <ul>
              <li>News outlets report the outage</li>
              <li>Stock prices start dropping</li>
              <li>Executives get emergency calls</li>
              <li>Revenue loss reaches millions</li>
            </ul>
          </div>
          <div className="scenario-card catastrophic">
            <h3>🟣 After 1 Hour</h3>
            <ul>
              <li>Major news headlines worldwide</li>
              <li>Customers consider switching providers</li>
              <li>Legal teams prepare for SLA breaches</li>
              <li>Reputation damage becomes severe</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scale Numbers */}
      <div className="scale-section">
        <h2>📈 The Scale of AWS Customers</h2>
        <div className="scale-grid">
          <div className="scale-card">
            <span className="scale-number">Millions</span>
            <p>Active AWS Customers</p>
          </div>
          <div className="scale-card">
            <span className="scale-number">190+</span>
            <p>Countries Using AWS</p>
          </div>
          <div className="scale-card">
            <span className="scale-number">Billions</span>
            <p>End Users Affected</p>
          </div>
          <div className="scale-card">
            <span className="scale-number">24×7</span>
            <p>Continuous Dependency</p>
          </div>
        </div>
      </div>

      {/* Customer Expectations */}
      <div className="expectations-section">
        <h2>🎯 What Customers Expect from AWS</h2>
        <div className="expectations-grid">
          <div className="expectation-card">
            <h4>99.99% Uptime</h4>
            <p>Less than 1 hour of downtime per year</p>
          </div>
          <div className="expectation-card">
            <h4>Instant Response</h4>
            <p>Issues resolved in minutes, not hours</p>
          </div>
          <div className="expectation-card">
            <h4>Data Security</h4>
            <p>Zero tolerance for data breaches</p>
          </div>
          <div className="expectation-card">
            <h4>Global Availability</h4>
            <p>Services accessible from anywhere</p>
          </div>
          <div className="expectation-card">
            <h4>Transparent Communication</h4>
            <p>Clear updates during incidents</p>
          </div>
          <div className="expectation-card">
            <h4>Cost Efficiency</h4>
            <p>Pay only for what they use</p>
          </div>
        </div>
      </div>

      {/* DCO Connection */}
      <div className="dco-connection-section">
        <h2>🔗 How This Connects to DCO</h2>
        <div className="connection-box">
          <p className="connection-text">
            Every single one of these customers depends on the physical infrastructure 
            that <strong>DCO teams manage</strong>.
          </p>
          <div className="connection-points">
            <div className="point">
              <span className="point-icon">⚡</span>
              <p>When DCO ensures power is stable → Netflix streams smoothly</p>
            </div>
            <div className="point">
              <span className="point-icon">🌡️</span>
              <p>When DCO maintains cooling → Banking systems stay online</p>
            </div>
            <div className="point">
              <span className="point-icon">🔧</span>
              <p>When DCO fixes hardware quickly → Startups keep growing</p>
            </div>
            <div className="point">
              <span className="point-icon">🛡️</span>
              <p>When DCO secures data centers → Government data stays safe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-section">
        <h2>📝 Key Takeaway</h2>
        <div className="summary-box">
          <p>
            AWS customers aren't just "using a service"—they're <strong>trusting us with their entire business</strong>.
          </p>
          <p>
            When you work in DCO, you're not just maintaining servers. 
            You're <strong>keeping the modern world running</strong>.
          </p>
        </div>
      </div>
      
      </div>
    </RevealGate>
  );
};

export default AwsCustomers;
