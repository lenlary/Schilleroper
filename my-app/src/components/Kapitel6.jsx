import AudioPlayer from "./AudioPlayer";

function Kapitel6({ label, src }) {
  return (
    <div className="cont kapitel-6">
      <h1>{label}</h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel6;
