import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import AwsVsAmazon from './pages/AwsVsAmazon/AwsVsAmazon'
import WhatIsAws from './pages/WhatIsAws/WhatIsAws'
import AwsServices from './pages/AwsServices/AwsServices'
import DcoImportance from './pages/DcoImportance/DcoImportance'
import AwsCustomers from './pages/AwsCustomers/AwsCustomers'
import AwsInfrastructure from './pages/AwsInfrastructure/AwsInfrastructure'
import PageTransition from './components/PageTransition/PageTransition'

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.MODE === 'production' ? '/AWS_New_Batch_Trainee_Program' : ''
  
  return (
    <Router basename={basename}>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aws-vs-amazon" element={<AwsVsAmazon />} />
          <Route path="/what-is-aws" element={<WhatIsAws />} />
          <Route path="/aws-services" element={<AwsServices />} />
          <Route path="/aws-customers" element={<AwsCustomers />} />
          <Route path="/aws-infrastructure" element={<AwsInfrastructure />} />
          <Route path="/dco-importance" element={<DcoImportance />} />
        </Routes>
      </PageTransition>
    </Router>
  )
}

export default App
