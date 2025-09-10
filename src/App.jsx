
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import About from "./components/About";
import MiniGallery from "./components/MiniGallery";
import GalleryPage from "./components/GalleryPage";
import './App.css';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-white text-gray-900 pt-6`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <MiniGallery />
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App
