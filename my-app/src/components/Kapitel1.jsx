import { useRef, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import Timeline from "./Timeline";

function Kapitel1({ label, prevSlug, nextSlug }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cont kapitel-1">
      <h1>{label}</h1>
      <AudioPlayer ref={audioRef} src="/der-zirkus.mp3" />
      <Timeline currentLabel={label} prevSlug={prevSlug} nextSlug={nextSlug} />
    </div>
  );
}

export default Kapitel1;
