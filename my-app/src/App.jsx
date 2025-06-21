import React, { useState, useRef } from "react";
import Home from "./components/Home";
import Main from "./components/Main";
import Kapitel1 from "./components/Kapitel1";
import Kapitel2 from "./components/Kapitel2";
import Kapitel3 from "./components/Kapitel3";

const chapters = [Kapitel1, Kapitel2, Kapitel3];

function App() {
  const mainRef = useRef(null);
  const [phase, setPhase] = useState("home"); // 'home' → 'main' → 'kapitel'
  const [currentChapter, setCurrentChapter] = useState(0);

  const CurrentChapter = chapters[currentChapter];

  const enterMain = () => setPhase("main");
  const startKapitel = () => setPhase("kapitel");

  const [animationDirection, setAnimationDirection] = useState("forward");

  const nextChapter = () => {
    setAnimationDirection("forward");
    setCurrentChapter((prev) => Math.min(prev + 1, chapters.length - 1));
  };

  const prevChapter = () => {
    setAnimationDirection("backward");
    setCurrentChapter((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      {phase === "home" && <Home onEnter={enterMain} scrollTarget={mainRef} />}

      {phase === "main" && (
        <Main onStartChapters={startKapitel} ref={mainRef} />
      )}

      {phase === "kapitel" && (
        <div className={`kapitel-wrapper ${animationDirection}`}>
          <CurrentChapter
            onNext={nextChapter}
            onPrev={prevChapter}
            isFirst={currentChapter === 0}
            isLast={currentChapter === chapters.length - 1}
            label={`Kapitel ${currentChapter + 1}`}
          />
        </div>
      )}
    </>
  );
}

export default App;
