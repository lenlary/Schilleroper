import AudioPlayer from "./AudioPlayer";

function Kapitel6({ label, src }) {
  return (
    <div className="cont kapitel-6 cinzel">
      <h1>
        {label} <br /> - 2025 -
      </h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel6;
