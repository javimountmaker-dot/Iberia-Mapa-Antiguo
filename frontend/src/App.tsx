import React, { useState } from 'react';
import Map from './components/Map';
import TimeSlider from './components/TimeSlider';
import SearchBar from './components/SearchBar';

function App() {
  const [year, setYear] = useState(-500);
  const [query, setQuery] = useState('');

  return (
    <div id="app" style={{ height: '100vh', width: '100%' }}>
      <h1>Ancient Maps - MVP Iberia</h1>
      <SearchBar value={query} onChange={setQuery} />
      <TimeSlider year={year} onChange={setYear} />
      <Map />
    </div>
  );
}

export default App;
