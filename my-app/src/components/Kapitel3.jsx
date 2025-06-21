import React, { useRef, useEffect } from "react";
import AudioButton from "./Audiobutton";
import Timeline from "./Timeline";

function Kapitel3({ onNext, onPrev, label, isFirst, isLast }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cont kapitel-2">
      <h1>{label}</h1>
      <AudioButton ref={audioRef} src="/relaxing-145038.mp3" />
      <Timeline
        currentLabel={label}
        onNext={onNext}
        onPrev={onPrev}
        isFirst={isFirst}
        isLast={isLast}
      />
    </div>
  );
}

export default Kapitel3;
