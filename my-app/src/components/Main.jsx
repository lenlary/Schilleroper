import React, { useEffect, useRef, forwardRef } from "react";
import AudioButton from "./Audiobutton";

const Main = forwardRef(({ onStartChapters }, ref) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cont Main" ref={ref}>
      <h1>Hauptsaal der Schilleroper</h1>
      <AudioButton ref={audioRef} src="/relaxing-145038.mp3" />

      <button className="start-button" onClick={onStartChapters}>
        Kapitel beginnen
      </button>
    </div>
  );
});

export default Main;
