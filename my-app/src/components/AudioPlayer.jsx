import { useRef, useState, useEffect, forwardRef } from "react";

const AudioButton = forwardRef(({ src }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // in Sekunden

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }

    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const skip = (sec) => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(
      0,
      Math.min(audio.duration, audio.currentTime + sec)
    );
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="controls">
        <button onClick={() => skip(-10)}>⏪ 10s</button>
        <button onClick={togglePlay}>
          {isPlaying ? "⏸ Pause" : "▶️ Play"}
        </button>
        <button onClick={() => skip(10)}>⏩ 10s</button>
      </div>
      <input
        type="range"
        min="0"
        max={audioRef.current?.duration || 0}
        step="0.1"
        value={progress}
        onChange={handleSeek}
      />
    </div>
  );
});

export default AudioPlayer;
