import AudioPlayer from "./AudioPlayer";

function Kapitel3({ label, src }) {
  return (
    <div className="cont kapitel-3">
      <h1>{label}</h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel3;
