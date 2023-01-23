import './index.scss';
import { Routes, Route } from 'react-router-dom'
import RegistrationPage from './components/register';
import VerificationPage from './components/verification';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<RegistrationPage />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;
