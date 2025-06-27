import AudioPlayer from "./AudioPlayer";

function Kapitel5({ label, src }) {
  return (
    <div className="cont kapitel-5">
      <h1>{label}</h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel5;
