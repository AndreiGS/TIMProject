import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainAppPage from './pages/MainAppPage';
import AboutPage from './pages/AboutPage';
import StationDetailsPage from './pages/StationDetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<MainAppPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/station/:networkId" element={<StationDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
