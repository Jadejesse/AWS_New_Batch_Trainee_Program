import { Link } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import ParticleEffect from '../../components/ParticleEffect/ParticleEffect';
import Avatar from '../../components/Avatar/Avatar';
import CyberpunkBg from '../../components/CyberpunkBg/CyberpunkBg';
import RevealGate from '../../components/RevealGate/RevealGate';
import '../../styles/presentation-text.css';
import './AwsServices.css';

const AwsServices: React.FC = () => {
  const serviceLayers = [
    {
      layer: 'Layer 1: AWS Foundation',
      title: 'The Ground Floor',
      description: 'Without these, AWS cannot run',
      services: [
        {
          name: 'IAM',
          description: 'Identity & Access Management - Who can login? Who can access resources? 80% of issues relate to IAM',
          icon: '🔐'
        },
        {
          name: 'VPC',
          description: 'Virtual Private Cloud - AWS virtual data center. Private network, subnets, security boundaries',
          icon: '🌐'
        }
      ]
    },
    {
      layer: 'Layer 2: Compute & Storage',
      title: 'Most Common Services',
      description: 'The foundation of almost every AWS customer',
      services: [
        {
          name: 'EC2',
          description: 'Elastic Compute Cloud - Virtual servers in the cloud. Linux/Windows machines, basic compute power',
          icon: '💻'
        },
        {
          name: 'S3',
          description: 'Simple Storage Service - Cloud storage for images, logs, backups, static websites. One of AWS most profitable services',
          icon: '🗄️'
        },
        {
          name: 'EBS / EFS',
          description: 'Elastic Block Store / Elastic File System - Hard drives for EC2, shared file systems',
          icon: '💾'
        }
      ]
    },
    {
      layer: 'Layer 3: Serverless & Modern Architecture',
      title: 'The Future',
      description: 'Many systems no longer use EC2',
      services: [
        {
          name: 'Lambda',
          description: 'Serverless compute - Event-triggered, auto-scaling. No server management needed',
          icon: 'λ'
        },
        {
          name: 'API Gateway',
          description: 'The door to Lambda - How Lambda gets called. Connects to S3 events, CloudWatch, HTTP requests',
          icon: '🚪'
        }
      ]
    },
    {
      layer: 'Layer 4: Data & Analytics',
      title: 'Database Services',
      description: 'Where your data lives',
      services: [
        {
          name: 'RDS',
          description: 'Relational Database Service - Managed MySQL/PostgreSQL. Used by almost all business systems',
          icon: '🗃️'
        },
        {
          name: 'Redshift',
          description: 'Data Warehouse - For big data analytics and BI. Used when data volume is massive',
          icon: '📊'
        }
      ]
    },
    {
      layer: 'Layer 5: Global Delivery',
      title: 'Frontend & Acceleration',
      description: 'Serving users worldwide',
      services: [
        {
          name: 'CloudFront',
          description: 'CDN - Content Delivery Network. Edge acceleration, lower latency. Essential for frontend, video, images',
          icon: '🌍'
        }
      ]
    },
    {
      layer: 'Layer 6: AI & Modern Innovation',
      title: 'The Future of Cloud',
      description: 'AI as a cloud service',
      services: [
        {
          name: 'AWS Bedrock',
          description: 'AI platform that lets companies use large language models (AI) directly on AWS - no need to build or train models yourself. Like renting a car instead of building an engine.',
          icon: '🤖'
        }
      ]
    }
  ];

  return (
    <RevealGate
      headline="What are AWS Services?"
      tagline="The foundation of modern cloud computing, built layer by layer"
    >
      <div className="aws-services">
        <CyberpunkBg />
        <ParticleEffect />
        <Avatar />
        <MusicPlayer />
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1 className="fancy-title">What are AWS Services?</h1>
      <p className="intro">
        <strong>Key Insight:</strong> Most AWS customers essentially use <span className="highlight">EC2 + S3 + VPC + IAM</span>. 
        All other services grow from this foundation.
      </p>
      
      <div className="layers-container">
        {serviceLayers.map((layer, idx) => (
          <div key={idx} className="service-layer">
            <div className="layer-header">
              <h2>{layer.title}</h2>
              <p className="layer-description">{layer.description}</p>
            </div>
            <div className="services-grid">
              {layer.services.map((service, sIdx) => (
                <div key={sIdx} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bedrock-section">
        <h2>🤖 Why AWS Bedrock Matters</h2>
        <div className="bedrock-content">
          <div className="bedrock-problem">
            <h3>The Problem</h3>
            <p>Many companies want to use AI, but building AI is extremely difficult:</p>
            <ul>
              <li>Requires massive computing power</li>
              <li>Needs complex infrastructure</li>
              <li>Must handle security, privacy, and compliance</li>
            </ul>
            <p className="problem-conclusion">→ Most companies cannot do this alone</p>
          </div>

          <div className="bedrock-solution">
            <h3>The Solution: AWS Bedrock</h3>
            <p className="solution-intro">
              <strong>AWS Bedrock turns AI into a cloud service</strong> - just like EC2 and S3.
            </p>
            <div className="analogy-box">
              <p className="analogy-title">🚗 Simple Analogy:</p>
              <p><strong>Before:</strong> Using AI = Building your own engine</p>
              <p><strong>Now:</strong> Using Bedrock = Renting a car that's already built</p>
              <p className="analogy-note">You don't worry about how the engine works - you just drive.</p>
            </div>
          </div>

          <div className="bedrock-capabilities">
            <h3>What Bedrock Provides</h3>
            <div className="capabilities-grid">
              <div className="capability-item">
                <span className="capability-icon">💬</span>
                <h4>Text</h4>
                <p>Chat, summarize, write documents, answer questions</p>
              </div>
              <div className="capability-item">
                <span className="capability-icon">🖼️</span>
                <h4>Images</h4>
                <p>Generate images, understand images</p>
              </div>
              <div className="capability-item">
                <span className="capability-icon">🔒</span>
                <h4>Enterprise Security</h4>
                <p>Your data stays private, meets compliance requirements</p>
              </div>
            </div>
            <p className="security-note">
              <strong>This is why enterprises trust AWS with AI</strong> - data security is built-in.
            </p>
          </div>

          <div className="bedrock-infrastructure">
            <h3>Bedrock and AWS Infrastructure</h3>
            <p className="infra-intro">
              Bedrock doesn't exist alone - it runs on AWS infrastructure:
            </p>
            <ul className="infra-list">
              <li><strong>Compute:</strong> Needs powerful servers</li>
              <li><strong>Storage (S3):</strong> Stores models and data</li>
              <li><strong>Network (VPC):</strong> Secure connections</li>
              <li><strong>Security:</strong> Isolation and compliance</li>
            </ul>
          </div>

          <div className="bedrock-dco">
            <h3>🔧 Connection to DCO</h3>
            <p className="dco-message">
              <strong>Bedrock looks like software and AI, but it ultimately runs on real servers.</strong>
            </p>
            <p className="dco-impact">
              The stability of these servers directly affects whether customers can use AI.
            </p>
            <p className="dco-conclusion">
              → No matter how advanced AI becomes, it still depends on the Data Center.
            </p>
          </div>
        </div>
      </div>

      <div className="ml-note">
        <h3>💡 About Other AI/ML Services</h3>
        <p>
          AWS also provides other managed AI/ML services (like SageMaker for custom model training). 
          Bedrock is specifically for companies that want to use pre-built AI models without the complexity.
        </p>
      </div>
      
      </div>
    </RevealGate>
  );
};

export default AwsServices;
