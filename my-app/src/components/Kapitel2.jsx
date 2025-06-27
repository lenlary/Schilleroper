import AudioPlayer from "./AudioPlayer";

function Kapitel2({ label, src }) {
  return (
    <div className="cont kapitel-2">
      <h1>{label}</h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel2;
