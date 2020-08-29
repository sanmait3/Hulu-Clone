import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Nav from './Nav';
import Results from './Results';
import requests from './requests';

function App() {
  
  const [selectedOption , setselectedOption] = useState(requests.fetchTrending);
console.log(process.env.REACT_APP_HULU_API)
  return (
    <div className="app">
      <Header />
      
      <Nav setselectedOption={setselectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
