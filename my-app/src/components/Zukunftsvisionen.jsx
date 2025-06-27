import AudioPlayer from "./AudioPlayer";

function Zukunftsvisionen({ label, src }) {
  return (
    <div className="cont kapitel-3">
      <h1>{label}</h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Zukunftsvisionen;
