import AudioPlayer from "./AudioPlayer";

function Kapitel1({ label, src }) {
  return (
    <div className="cont kapitel-1">
      <h1>{label}</h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel1;
