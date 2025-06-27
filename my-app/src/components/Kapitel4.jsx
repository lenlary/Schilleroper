import AudioPlayer from "./AudioPlayer";

function Kapitel4({ label, src }) {
  return (
    <div className="cont kapitel-4">
      <h1>{label}</h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel4;
