import React, { useState } from 'react';
import './App.css';

import Header from './component/Header/header.js';
import Content from './component/Contents/content.js';

const App = () => {
  const [activeMainContent, setActiveMainContent] = useState('Main');

  return (
    <div className="w-full container mx-auto bg-white">
      <Header setActiveMainContent={setActiveMainContent} />
      <Content activeMainContent={activeMainContent} />
    </div>
  );
}

export default App;
