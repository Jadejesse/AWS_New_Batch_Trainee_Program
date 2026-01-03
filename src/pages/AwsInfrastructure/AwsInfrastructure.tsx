import { Link } from 'react-router-dom';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import ParticleEffect from '../../components/ParticleEffect/ParticleEffect';
import Avatar from '../../components/Avatar/Avatar';
import CyberpunkBg from '../../components/CyberpunkBg/CyberpunkBg';
import RevealGate from '../../components/RevealGate/RevealGate';
import '../../styles/presentation-text.css';
import './AwsInfrastructure.css';

const AwsInfrastructure: React.FC = () => {
  return (
    <RevealGate
      headline="AWS Infrastructure"
      tagline="Region, AZ, Data Center — the three layers that power the cloud"
    >
      <div className="aws-infrastructure">
        <CyberpunkBg />
        <ParticleEffect />
        <Avatar />
        <MusicPlayer />
        <Link to="/" className="back-button">← Back to Home</Link>
        
        <h1 className="fancy-title">AWS Infrastructure</h1>
      <p className="subtitle">Understanding Region, AZ, and Data Centers</p>
      
      {/* Key Concept */}
      <div className="key-concept">
        <h2>🏗️ The Three-Layer Structure</h2>
        <p className="concept-text">
          AWS infrastructure is organized in <strong>three layers</strong>, 
          from largest to smallest:
        </p>
      </div>

      {/* Three Layers */}
      <div className="layers-section">
        <div className="layer-card region">
          <div className="layer-number">1</div>
          <h3>🌍 Region</h3>
          <p className="layer-definition">
            A <strong>geographic area</strong> (like a country or large region)
          </p>
          <div className="layer-details">
            <h4>Examples:</h4>
            <ul>
              <li>us-east-1 (Virginia, USA)</li>
              <li>eu-west-1 (Ireland)</li>
              <li>ap-southeast-2 (Sydney, Australia)</li>
            </ul>
            <div className="layer-note">
              <p>💡 Each Region is <strong>completely independent</strong></p>
              <p>👉 If one Region fails, others keep running</p>
            </div>
          </div>
        </div>

        <div className="layer-card az">
          <div className="layer-number">2</div>
          <h3>🏢 Availability Zone (AZ)</h3>
          <p className="layer-definition">
            <strong>Independent data center groups</strong> within a Region
          </p>
          <div className="layer-details">
            <h4>Key Facts:</h4>
            <ul>
              <li>Each Region has 2-6 AZs</li>
              <li>AZs are physically separated (different buildings)</li>
              <li>Connected by high-speed private network</li>
              <li>If one AZ fails, others in the Region continue</li>
            </ul>
            <div className="layer-note">
              <p>💡 AZs provide <strong>redundancy</strong> within a Region</p>
              <p>👉 This is how AWS achieves 99.99% uptime</p>
            </div>
          </div>
        </div>

        <div className="layer-card datacenter">
          <div className="layer-number">3</div>
          <h3>🖥️ Data Center</h3>
          <p className="layer-definition">
            The <strong>physical building</strong> where servers actually live
          </p>
          <div className="layer-details">
            <h4>What's Inside:</h4>
            <ul>
              <li>Thousands of physical servers</li>
              <li>Networking equipment (switches, routers)</li>
              <li>Power systems (generators, UPS)</li>
              <li>Cooling systems (HVAC)</li>
              <li>Security systems (cameras, access control)</li>
            </ul>
            <div className="layer-note dco-highlight">
              <p>💪 <strong>This is where DCO works!</strong></p>
              <p>👉 DCO manages the physical infrastructure at this level</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Hierarchy */}
      <div className="hierarchy-section">
        <h2>📊 How They Connect</h2>
        <div className="hierarchy-visual">
          <div className="hierarchy-level">
            <span className="hierarchy-icon">🌍</span>
            <p className="hierarchy-label">1 Region</p>
          </div>
          <div className="hierarchy-arrow">↓ contains ↓</div>
          <div className="hierarchy-level">
            <span className="hierarchy-icon">🏢🏢🏢</span>
            <p className="hierarchy-label">Multiple AZs (2-6)</p>
          </div>
          <div className="hierarchy-arrow">↓ contains ↓</div>
          <div className="hierarchy-level">
            <span className="hierarchy-icon">🖥️🖥️🖥️🖥️</span>
            <p className="hierarchy-label">Multiple Data Centers</p>
          </div>
        </div>
      </div>

      {/* Real Example */}
      <div className="example-section">
        <h2>🗺️ Real Example: US East (Virginia)</h2>
        <div className="example-box">
          <div className="example-item">
            <h4>Region Name:</h4>
            <p>us-east-1</p>
          </div>
          <div className="example-item">
            <h4>Location:</h4>
            <p>Northern Virginia, USA</p>
          </div>
          <div className="example-item">
            <h4>Number of AZs:</h4>
            <p>6 Availability Zones</p>
          </div>
          <div className="example-item">
            <h4>Data Centers:</h4>
            <p>Multiple buildings per AZ</p>
          </div>
          <div className="example-note">
            <p>💡 This is AWS's largest and oldest Region</p>
            <p>Many major companies run their primary systems here</p>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="why-matters-section">
        <h2>❓ Why This Structure Matters</h2>
        <div className="matters-grid">
          <div className="matter-card">
            <h4>🛡️ Redundancy</h4>
            <p>
              If one data center fails, traffic automatically moves to another AZ. 
              Customers don't even notice.
            </p>
          </div>
          <div className="matter-card">
            <h4>🌍 Global Reach</h4>
            <p>
              Multiple Regions worldwide mean users get fast service 
              no matter where they are.
            </p>
          </div>
          <div className="matter-card">
            <h4>⚡ Low Latency</h4>
            <p>
              Data stays close to users. A user in Sydney connects to 
              ap-southeast-2, not us-east-1.
            </p>
          </div>
          <div className="matter-card">
            <h4>📜 Compliance</h4>
            <p>
              Some countries require data to stay within their borders. 
              Regions make this possible.
            </p>
          </div>
        </div>
      </div>

      {/* DCO's Role */}
      <div className="dco-role-section">
        <h2>🔧 Where DCO Fits In</h2>
        <div className="dco-role-box">
          <p className="role-intro">
            DCO works at the <strong>Data Center level</strong>—the physical foundation 
            of everything.
          </p>
          <div className="role-responsibilities">
            <div className="responsibility">
              <span className="resp-icon">🖥️</span>
              <div>
                <h4>Server Management</h4>
                <p>Install, monitor, and replace physical servers</p>
              </div>
            </div>
            <div className="responsibility">
              <span className="resp-icon">🔌</span>
              <div>
                <h4>Power Systems</h4>
                <p>Ensure electricity never stops, manage generators and UPS</p>
              </div>
            </div>
            <div className="responsibility">
              <span className="resp-icon">🌡️</span>
              <div>
                <h4>Cooling Systems</h4>
                <p>Keep temperature stable so servers don't overheat</p>
              </div>
            </div>
            <div className="responsibility">
              <span className="resp-icon">🌐</span>
              <div>
                <h4>Network Infrastructure</h4>
                <p>Maintain cables, switches, and physical connections</p>
              </div>
            </div>
            <div className="responsibility">
              <span className="resp-icon">🛡️</span>
              <div>
                <h4>Physical Security</h4>
                <p>Control access, monitor cameras, protect equipment</p>
              </div>
            </div>
            <div className="responsibility">
              <span className="resp-icon">🚨</span>
              <div>
                <h4>Incident Response</h4>
                <p>Fix hardware failures immediately, 24×7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Scale */}
      <div className="global-scale-section">
        <h2>🌐 AWS Global Infrastructure Scale</h2>
        <div className="scale-stats">
          <div className="stat-card">
            <span className="stat-number">30+</span>
            <p>Geographic Regions</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">96+</span>
            <p>Availability Zones</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">400+</span>
            <p>Edge Locations</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">245+</span>
            <p>Countries Served</p>
          </div>
        </div>
        <p className="scale-note">
          💡 And DCO teams manage the physical infrastructure for all of this!
        </p>
      </div>

      {/* Summary */}
      <div className="summary-section">
        <h2>📝 Key Takeaway</h2>
        <div className="summary-box">
          <p>
            <strong>Region</strong> = Geographic area<br/>
            <strong>AZ</strong> = Independent data center groups within a Region<br/>
            <strong>Data Center</strong> = Physical building with servers
          </p>
          <p className="summary-highlight">
            DCO works at the <strong>Data Center level</strong>, managing the physical 
            infrastructure that makes everything else possible.
          </p>
        </div>
      </div>
      
      </div>
    </RevealGate>
  );
};

export default AwsInfrastructure;
