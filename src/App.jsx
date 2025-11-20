import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import logo from '/logo-Bxcm9Kh9.png';
import symbolLogo from './assets/symbolLogo.svg';
import backgroundVideo from '/Firefly Studio lights photoshoot black and white without a model 577781-CMDFDyt-.mp4';

function App() {
  const [count, setCount] = useState(0);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
  };

  return (
    <>
      {videoEnabled && (
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}
      <header className="px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="border-2 border-white rounded-full px-4 py-2">
              <span
                className="text-white border border-white px-2 py-1 rounded"
                style={{ fontFamily: '"Saira Condensed", sans-serif' }}
              >
                MusesKlosetAgency
              </span>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={toggleVideo}
              aria-pressed={!videoEnabled}
              aria-label={
                videoEnabled
                  ? 'Disable background video'
                  : 'Enable background video'
              }
              className="px-4 py-2 border-2 border-white rounded-full bg-transparent text-white"
              style={{ fontFamily: '"Saira Condensed", sans-serif' }}
            >
              {videoEnabled ? 'Background Video: On' : 'Background Video: Off'}
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24">
            <img
              src={symbolLogo}
              alt="Symbol Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <img
              src={logo}
              alt="MusesKlosetAgency"
              className="mb-2 w-48 max-w-full h-auto"
            />
          </div>
        </div>
      </header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
