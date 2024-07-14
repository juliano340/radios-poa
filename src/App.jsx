import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const [url, setUrl] = useState('https://liverdgaupoa.rbsdirect.com.br/primary/gaucha_rbs.sdp/playlist.m3u8');
  const [activeStation, setActiveStation] = useState('gaucha');

  const handleStationChange = (newUrl, station) => {
    setUrl(newUrl);
    setActiveStation(station);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rádio Player</h1>
        <div className="buttons">
          <button
            className={activeStation === 'gaucha' ? 'active' : ''}
            onClick={() => handleStationChange('https://liverdgaupoa.rbsdirect.com.br/primary/gaucha_rbs.sdp/playlist.m3u8', 'gaucha')}
          >
            Rádio Gaúcha
          </button>
          <button
            className={activeStation === 'bandnews' ? 'active' : ''}
            onClick={() => handleStationChange('https://playerservices.streamtheworld.com/api/livestream-redirect/BANDNEWSFM_SPAAC_SC', 'bandnews')}
          >
            BandNews FM
          </button>
        </div>
        <ReactPlayer
          url={url}
          playing={true}
          controls={true}
          width="100%"
          height="50px"
        />
      </header>
    </div>
  );
}

export default App;
