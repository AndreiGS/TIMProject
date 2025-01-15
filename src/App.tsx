import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainAppPage from './pages/MainAppPage';
import AboutPage from './pages/AboutPage';
import StationDetailsPage from './pages/StationDetailsPage';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<MainAppPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/station/:networkId" element={<StationDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
