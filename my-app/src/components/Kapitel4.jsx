import { useRef, useEffect } from "react";
import AudioButton from "./AudioPlayer";
import Timeline from "./Timeline";

function Kapitel4({ label, prevSlug, nextSlug }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cont kapitel-3">
      <h1>{label}</h1>
      <AudioButton ref={audioRef} src="/relaxing-145038.mp3" />
      <Timeline currentLabel={label} prevSlug={prevSlug} nextSlug={nextSlug} />
    </div>
  );
}

export default Kapitel4;
