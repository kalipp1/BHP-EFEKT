import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header';
import Home from './components/pages/Home/Home';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Services from './components/pages/Services/Services';
import Prices from './components/pages/Prices/Prices';
import NotFound from './components/pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: "url('/images/background-image.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: 'white'
    }}>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
