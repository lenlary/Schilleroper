import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

const AudioButton = forwardRef(({ src }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => audioRef.current);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  };

  // Automatisch auf neue Quelle reagieren
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Lade neue Datei
      setIsPlaying(false);
    }
  }, [src]);

  return (
    <div className="audio-button">
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <button onClick={toggleAudio}>{isPlaying ? "Stop" : "Play"}</button>
    </div>
  );
});

export default AudioButton;
