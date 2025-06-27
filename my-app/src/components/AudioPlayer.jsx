import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  SlControlPlay,
  SlControlPause,
  SlControlForward,
  SlControlRewind,
  SlControlStart,
  SlControlEnd,
  SlVolume2,
} from "react-icons/sl";
import { slugsList } from "./slugsList";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
};

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const slugs = useMemo(() => Object.keys(slugsList), []);
  const index = slugs.indexOf(slug);
  const prevSlug = index > 0 ? slugs[index - 1] : null;
  const nextSlug = index < slugs.length - 1 ? slugs[index + 1] : null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let timeoutId;

    const playAudio = () => {
      timeoutId = setTimeout(() => {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }, 800);
    };

    if (audio.readyState >= 1) {
      playAudio();
    } else {
      audio.addEventListener("loadedmetadata", playAudio, { once: true });
    }

    return () => {
      clearTimeout(timeoutId);
      audio.removeEventListener("loadedmetadata", playAudio);
    };
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioDuration = () => setDuration(audio.duration || 0);
    const updateProgress = () => setProgress(audio.currentTime);

    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const skip = useCallback(
    (sec) => {
      const audio = audioRef.current;
      if (!audio) return;
      const newTime = Math.min(Math.max(0, audio.currentTime + sec), duration);
      audio.currentTime = newTime;
      setProgress(newTime);
    },
    [duration]
  );

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const handleVolume = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    audioRef.current.volume = newVol;
  };

  const goTo = useCallback(
    (targetSlug) => {
      if (targetSlug) navigate(`/${targetSlug}`);
    },
    [navigate]
  );

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="controls">
        <button onClick={() => goTo(prevSlug)}>
          <SlControlStart />
        </button>
        <button onClick={() => skip(-5)}>
          <SlControlRewind />
        </button>
        <button onClick={togglePlay}>
          {isPlaying ? <SlControlPause /> : <SlControlPlay />}
        </button>
        <button onClick={() => skip(5)}>
          <SlControlForward />
        </button>
        <button onClick={() => goTo(nextSlug)}>
          <SlControlEnd />
        </button>
        <div className="time-display">
          {formatTime(progress)} / {formatTime(duration)}
        </div>
      </div>
      <input
        type="range"
        className="progress-bar"
        min="0"
        max={duration}
        step="0.1"
        value={progress}
        onChange={handleSeek}
      />
      <div className="volume">
        <SlVolume2 />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
