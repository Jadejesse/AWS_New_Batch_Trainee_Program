import { Link } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import ParticleEffect from '../../components/ParticleEffect/ParticleEffect';
import Avatar from '../../components/Avatar/Avatar';
import CyberpunkBg from '../../components/CyberpunkBg/CyberpunkBg';
import RevealGate from '../../components/RevealGate/RevealGate';
import '../../styles/presentation-text.css';
import './AwsVsAmazon.css';

const AwsVsAmazon: React.FC = () => {
  const cloudProviders = [
    {
      name: 'AWS',
      fullName: 'Amazon Web Services',
      company: 'Amazon',
      icon: '☁️',
      marketShare: '#1 Global Market Leader',
      strengths: [
        'Most comprehensive service portfolio (200+ services)',
        'Largest global infrastructure (30+ regions)',
        'Strongest enterprise adoption',
        'Best for: Startups, Enterprise, ML/AI'
      ],
      keyServices: 'EC2, S3, Lambda, RDS, DynamoDB'
    },
    {
      name: 'Azure',
      fullName: 'Microsoft Azure',
      company: 'Microsoft',
      icon: '🔷',
      marketShare: '#2 Global Market Share',
      strengths: [
        'Best integration with Microsoft ecosystem',
        'Strong hybrid cloud capabilities',
        'Enterprise Windows workloads',
        'Best for: Enterprise, .NET, Hybrid Cloud'
      ],
      keyServices: 'Virtual Machines, Blob Storage, Azure Functions'
    },
    {
      name: 'GCP',
      fullName: 'Google Cloud Platform',
      company: 'Google',
      icon: '🔴',
      marketShare: '#3 Global Market Share',
      strengths: [
        'Best for data analytics and ML',
        'Superior Kubernetes (GKE)',
        'Strong in BigQuery and AI/ML',
        'Best for: Data Science, ML, Containers'
      ],
      keyServices: 'Compute Engine, Cloud Storage, BigQuery'
    }
  ];

  return (
    <RevealGate
      headline="Amazon vs AWS"
      tagline="One-liner: Amazon is a company; AWS is the cloud computing division inside it."
    >
      <div className="aws-vs-amazon">
        <CyberpunkBg />
        <ParticleEffect />
        <Avatar />
        <MusicPlayer />
        <Link to="/" className="back-button">← Back to Home</Link>
        
        {/* Main Title */}
        <h1 className="fancy-title">Amazon vs AWS: The Essential Guide</h1>
      
      {/* Key Conclusion */}
      <div className="key-conclusion">
        <h2>🎯 One Sentence Summary</h2>
        <p className="conclusion-text">
          <strong>Amazon</strong> is a company; <strong>AWS</strong> is the cloud computing division within that company.
        </p>
        <p className="subtitle">That's it. Everything else builds on this foundation.</p>
      </div>

      {/* Main Comparison */}
      <div className="main-comparison">
        <div className="comparison-card amazon-card">
          <h2>🏢 Amazon</h2>
          <h3>A Diversified Conglomerate</h3>
          <p className="card-intro">
            Amazon is a global company with multiple business units:
          </p>
          <ul className="business-units">
            <li><span className="icon">🛒</span> E-commerce (Amazon.com)</li>
            <li><span className="icon">📦</span> Logistics & Warehousing</li>
            <li><span className="icon">🎬</span> Digital Content (Prime Video, Music)</li>
            <li><span className="icon">🔊</span> Smart Hardware (Echo, Kindle)</li>
            <li><span className="icon">☁️</span> Cloud Computing (AWS)</li>
          </ul>
          <p className="highlight-box">
            👉 AWS is just one of many divisions, but it's extremely important
          </p>
        </div>

        <div className="comparison-card aws-card">
          <h2>☁️ AWS</h2>
          <h3>Cloud Service Provider</h3>
          <p className="card-intro">
            AWS is Amazon's cloud computing division that sells:
          </p>
          <ul className="business-units">
            <li><span className="icon">💻</span> Computing Power (EC2 / Lambda)</li>
            <li><span className="icon">💾</span> Storage (S3 / EBS)</li>
            <li><span className="icon">🌐</span> Networking (VPC)</li>
            <li><span className="icon">🗄️</span> Databases (RDS / DynamoDB)</li>
            <li><span className="icon">🤖</span> AI / ML / Analytics</li>
          </ul>
          <p className="highlight-box">
            👉 AWS customers are companies and developers, not consumers
          </p>
        </div>
      </div>

      {/* Analogy Section */}
      <div className="analogy-section">
        <h2>💡 Easy Analogies for Trainees</h2>
        <div className="analogy-grid">
          <div className="analogy-card">
            <h3>🏢 Corporate Structure Analogy</h3>
            <p><strong>Amazon</strong> = A large conglomerate</p>
            <p><strong>AWS</strong> = The "cloud computing" business unit</p>
            <div className="examples">
              <p>Similar to:</p>
              <ul>
                <li>Google → Google Cloud</li>
                <li>Microsoft → Azure</li>
                <li>Alibaba → Alibaba Cloud</li>
              </ul>
            </div>
          </div>

          <div className="analogy-card">
            <h3>🏬 Shopping Mall Analogy</h3>
            <p><strong>Amazon</strong> = A large shopping center</p>
            <p><strong>AWS</strong> = The power plant + data center inside</p>
            <div className="examples">
              <p>Who uses what:</p>
              <ul>
                <li>Regular users: Shop on Amazon</li>
                <li>Enterprise clients: Rent computing power from AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differences */}
      <div className="key-differences">
        <h2>🔑 Organizational & Cultural Differences</h2>
        <div className="diff-grid">
          <div className="diff-card">
            <h3>Amazon (Overall)</h3>
            <ul>
              <li>Multiple business types</li>
              <li>Consumer-facing (B2C)</li>
              <li>E-commerce + Logistics</li>
              <li>Fast-paced</li>
              <li>Cost, efficiency, scale-driven</li>
            </ul>
          </div>
          <div className="diff-card highlight">
            <h3>AWS (Relatively Independent)</h3>
            <ul>
              <li>B2B (Enterprise customers)</li>
              <li>Engineering / Tech-focused</li>
              <li>SLA & Stability critical</li>
              <li>Customers: Netflix, Airbnb, Banks, Governments, SaaS companies</li>
            </ul>
            <p className="note">👉 AWS operates more like an engineering company than an e-commerce company</p>
          </div>
        </div>
      </div>

      {/* Money Flow */}
      <div className="money-section">
        <h2>💰 Where Does The Money Come From?</h2>
        <div className="money-card">
          <p className="money-fact">
            <strong>"Many of Amazon's new ventures are funded by AWS profits."</strong>
          </p>
          <div className="money-breakdown">
            <div className="money-item">
              <h4>AWS</h4>
              <ul>
                <li>✅ Highest profit margin</li>
                <li>✅ Most stable cash flow</li>
              </ul>
            </div>
            <div className="money-item">
              <h4>E-commerce</h4>
              <ul>
                <li>📈 High revenue</li>
                <li>📉 Low profit margin</li>
              </ul>
            </div>
          </div>
          <p className="insight">
            💡 This explains why AWS has such strict requirements for stability, processes, and risk control
          </p>
        </div>
      </div>

      {/* Common Misconceptions */}
      <div className="misconceptions">
        <h2>❌ Common Trainee Misconceptions</h2>
        <div className="misconception-grid">
          <div className="misconception-item">
            <p className="wrong">❌ "AWS is just Amazon's servers"</p>
            <p className="correct">✅ AWS is a public cloud platform serving global enterprises, not just Amazon's internal infrastructure</p>
          </div>
          <div className="misconception-item">
            <p className="wrong">❌ "Working at AWS means working on e-commerce backend"</p>
            <p className="correct">✅ AWS serves global enterprise customers, not Amazon.com shoppers</p>
          </div>
          <div className="misconception-item">
            <p className="wrong">❌ "AWS and Amazon.com are the same thing"</p>
            <p className="correct">✅ Amazon.com is actually one of AWS's customers</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-section">
        <h2>📝 Standard Trainee Summary</h2>
        <div className="summary-box">
          <p>
            "Amazon is a global company with diverse business operations; 
            AWS is Amazon's cloud computing division focused specifically on cloud services.
          </p>
          <p>
            Our customers are not consumers shopping on Amazon, 
            but enterprises and governments running their core systems on AWS.
          </p>
          <p>
            Therefore, our work revolves around three core principles: 
            <strong> Stability, Security, and Scalability.</strong>
          </p>
        </div>
      </div>

      {/* Three Major Cloud Providers */}
      <div className="cloud-providers-section">
        <h2>🌍 The Three Major Cloud Providers</h2>
        <p className="providers-intro">
          The global cloud computing market is dominated by three major players, 
          each with unique strengths and market positioning.
        </p>
        
        <div className="providers-grid">
          {cloudProviders.map((provider, idx) => (
            <div key={idx} className="provider-card">
              <div className="provider-header">
                <span className="provider-icon">{provider.icon}</span>
                <div>
                  <h3>{provider.name}</h3>
                  <p className="provider-full-name">{provider.fullName}</p>
                  <p className="provider-company">by {provider.company}</p>
                </div>
              </div>
              <div className="market-share">{provider.marketShare}</div>
              <div className="provider-content">
                <h4>Key Strengths:</h4>
                <ul>
                  {provider.strengths.map((strength, sIdx) => (
                    <li key={sIdx}>{strength}</li>
                  ))}
                </ul>
                <div className="key-services">
                  <strong>Core Services:</strong> {provider.keyServices}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="comparison-note">
          <h3>🎯 Quick Comparison</h3>
          <ul>
            <li><strong>AWS:</strong> Most comprehensive, largest ecosystem, best for most use cases</li>
            <li><strong>Azure:</strong> Best for Microsoft-heavy enterprises and hybrid cloud</li>
            <li><strong>GCP:</strong> Best for data analytics, ML, and container-native workloads</li>
          </ul>
          <p className="final-note">
            💡 Many large enterprises use multiple cloud providers (multi-cloud strategy) 
            to avoid vendor lock-in and leverage each platform's strengths.
          </p>
        </div>
      </div>
      </div>
    </RevealGate>
  );
};

export default AwsVsAmazon;
