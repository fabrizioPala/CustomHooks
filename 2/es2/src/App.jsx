
import React, { useState } from 'react';
import './App.css'

import { Clock } from './Clock';
import { LanguageContext } from './LanguageContext';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("eng");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language">Select Language: </label>
      <select
        name="language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="eng">English</option>
        <option value="ita">Italiano</option>
        {/* Add more language options as needed */}
      </select>

      <LanguageContext.Provider value={selectedLanguage}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;