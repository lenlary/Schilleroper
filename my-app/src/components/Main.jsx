import { useEffect, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import AudioButton from "./AudioPlayer";

const Main = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    navigate("/zirkusgebaeude");
  };

  return (
    <div className="cont Main" ref={ref}>
      <h1>Hauptsaal der Schilleroper</h1>
      <AudioButton ref={audioRef} src="/relaxing-145038.mp3" />

      <button className="start-button" onClick={handleStart}>
        Kapitel beginnen
      </button>
    </div>
  );
});

export default Main;
