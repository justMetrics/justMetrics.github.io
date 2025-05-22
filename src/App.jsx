import { useState } from 'react';

import './App.css';

function App() {
  return (
    <>
      <div className='img-container'>
        <img className='avatar top-left' src='/1.png' alt='' />
        <img className='avatar top-right' src='/2.png' alt='' />
        <img className='avatar bottom-right' src='/3.png' alt='' />
        <img className='avatar bottom-left' src='/4.png' alt='' />
        <h1 className='title'>Just Metrics</h1>
      </div>
    </>
  );
}

export default App;
