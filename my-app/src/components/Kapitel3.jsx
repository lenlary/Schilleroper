import AudioPlayer from "./AudioPlayer";

function Kapitel3({ label, src }) {
  return (
    <div className="cont kapitel-3 cinzel">
      <h1>
        {label} <br /> - 1932 -
      </h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel3;
