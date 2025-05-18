import './styles.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


//####
function Home() {
  const [isEntering, setIsEntering] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      navigate('/home');
    }, 800); 
  };

  return (
    <>
      <body>
      <div className={`Hero ${isEntering ? 'enter-sequence' : ''}`}>
          <h1></h1>
          <div 
          class="door-area" 
          onClick={handleEnter}
          title="Eintreten">
          </div>
          <h2>VERGANGENHEIT IM RAMPENLICHT</h2>
        </div>
      </body>
    </>
  )
}

export default Home
