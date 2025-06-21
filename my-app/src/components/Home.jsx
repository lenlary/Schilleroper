import React, { useState } from "react";

function Home({ onEnter, scrollTarget }) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);

    setTimeout(() => {
      onEnter();

      setTimeout(() => {
        scrollTarget.current?.scrollIntoView();
      }, 50);
    }, 800);
  };

  return (
    <div className={`cont Hero ${isEntering ? "enter-sequence" : ""}`}>
      <h1></h1>
      <div className="door-area" onClick={handleEnter} title="Eintreten"></div>
      <h2>VERGANGENHEIT IM RAMPENLICHT</h2>
    </div>
  );
}

export default Home;
